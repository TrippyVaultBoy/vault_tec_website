#!/usr/bin/python3
import cmd
from datetime import datetime
import os
from terminal_game import Terminal_game

class Robco_term(cmd.Cmd):
    os.system("clear")
    intro = (
        "=--------------------------------------------------------------=\n"
        "|          Welcome to ROBCO Industries (TM) Termlink           |\n"
        "|--------------------------------------------------------------|\n"
        "|  last login: 10/23/77 15:29:01                               |\n"
        "|                                                              |\n"
        "|                      Enter \"Start\"                           |\n"
        "|                                                              |\n"
        )

    prompt = "cmnd: "

    def do_Start(self, arg):
        """Start the terminal game"""
        self.do_game(arg)

    def do_greet(self, arg):
        """Greet the user with the provided name"""
        print("Hello, {:s}".format(arg))

    def do_quit(self, arg):
        """Exit the console"""
        print("Exiting Termlink...")
        return True

    def do_date(self, arg):
        """Print the current date in textual format"""
        now = datetime.now()
        textual_date = now.strftime("%A, %B %d, %Y")
        print("Today's date: ", textual_date)

    def do_time(self, arg):
        """Print the time in H/M/S AM/PM format"""
        now = datetime.now()
        current_time = now.strftime("%I:%M:%S %p")
        print("Current Time: ", current_time)

    def do_datetime(self, arg):
        """Print the current date and time"""
        now = datetime.now()
        textual_date = now.strftime("%A, %B %d, %Y ")
        current_time = now.strftime("%I:%M:%S %p")
        print("Current datetime: ", textual_date, current_time)

    def do_pwd(self, arg):
        """Print the current working directory"""
        current_directory = os.getcwd()
        print("Current Working Directory: ", current_directory)

    def do_game(self, arg):
        game = Terminal_game()
        game.play()

    def default(self, line):
        print("Unknown command: {:s}".format(line))

if __name__ == '__main__':
    Robco_term().cmdloop()