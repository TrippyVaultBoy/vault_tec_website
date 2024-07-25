#!/usr/bin/python3
import serial
import subprocess

                #/dev/cu.usbserial-10 Serial Port (USB)
serial_port = '/dev/cu.usbserial-10'
baud_rate = 1200

ser = serial.Serial(serial_port, baud_rate, timeout=1)

def read_from_serial():
    return ser.readline().decode().strip()


def write_to_serial(data):
    ser.write((data + '\n').encode())


def execute_command(command):
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    return result.stdout + result.stderr


try:
    while True:
        command = read_from_serial()
        if command:
            print(f"Received command: {command}")
            output = execute_command(command)
            write_to_serial(output)
except KeyboardInterrupt:
    print("Exiting...")
finally:
    ser.close()
