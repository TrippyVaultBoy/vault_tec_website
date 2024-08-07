import os

class Terminal_turret():
    def display(self):
        os.system("clear")
        display = ("=------------------------------------------------------------------------------=\n"
                "|                  Welcome to ROBCO Industries (TM) Termlink                   |\n"
                "|------------------------------------------------------------------------------|\n"
                "|                                                                              |\n"
                "|    Standardized Turret Control Firmware v8.13                                |\n"
                "|    Status: Online, All Clear                                                 |\n"
                "|    Admin: Turret Defense System                                              |\n"
                "|    UNITS CONNECTED: 11                                                       |\n"
                "|                                                                              |\n"
                "|    Please use caution around turret. Users should always assume that         |\n"
                "|    turrets are loaded and capable of live-fire.                              |\n"
                "|                                                                              |\n"
                "|    Please choose an option:                                                  |\n"
                "|                                                                              |\n"
                "|    [1:Deactivate] [2:About your Defense System] [3:System Diagnostics]       |\n"
                "|                                                                              |\n"
                "|                                                                              |\n"
                "|                                                                              |\n"
                "|                                                                              |\n"
                "|                                                                              |\n"
                "=------------------------------------------------------------------------------=\n")
        print(display)