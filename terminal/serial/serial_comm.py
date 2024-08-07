#!/usr/bin/python3
import serial
import subprocess
import time
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Serial port configuration
serial_port = 'COM3'  # Change this to your actual serial port
baud_rate = 1200

try:
    ser = serial.Serial(serial_port, baud_rate, timeout=1)
except serial.SerialException as e:
    logging.error(f"Error opening serial port: {e}")
    exit(1)

def read_from_serial():
    try:
        return ser.readline().decode().strip()
    except Exception as e:
        logging.error(f"Error reading from serial: {e}")
        return ""

def write_to_serial(data):
    try:
        ser.write((data + '\n').encode())
    except Exception as e:
        logging.error(f"Error writing to serial: {e}")

def execute_command(command):
    try:
        print("executing command")
        result = subprocess.run(command, shell=True, capture_output=True, text=True, timeout=10)
        print(result)
        return result.stdout + result.stderr
    except subprocess.TimeoutExpired:
        return "Command timed out"
    except subprocess.CalledProcessError as e:
        return f"Command failed with error: {e.stderr}"

def execute_python_file(command):
    try:
        print("executing python file")
        result = subprocess.run(command.split(), capture_output=True, text=True, check=True)
        print(result.stdout)
        return result.stdout
    except subprocess.CalledProcessError as e:
        return f"Execution failed with error: {e.stderr}"

try:
    while True:
        command = read_from_serial()
        if command:
            command = command.replace('..', '.\\')
            logging.info(f"Received command: {command}")
            if command.startswith('python '):
                output = execute_python_file(command)
            else:
                output = execute_command(command)
            write_to_serial(output)
        time.sleep(0.1)  # Sleep to prevent high CPU usage
except KeyboardInterrupt:
    logging.info("Exiting...")
finally:
    ser.close()
    logging.info("Serial port closed")