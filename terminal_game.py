import random
import os
import sys

class Terminal_game():
    def __init__(self, max_attempts=4):
        self.words = ["WORD", "WOLF", "BARK", "CARD", "FIRM",
                      "FIND", "KIND", "WAND", "BOLD", "GLOW"]
        self.used_words = []
        self.filler = ["{", "}", "(", ")", "[", "]",
                       ",", ".", "?", "!", "|", "/",
                       "'", "=", "*", "%", "-", ";",
                       "#", "_", ">", "<", "@", "$"]
        self.correct_word = random.choice(self.words)
        self.max_attempts = max_attempts
        self.attempts_left = max_attempts
        self.game_rows = 10
        self.display = ""


    def display_words(self):
        prevline = "right"
        os.system('clear')
        self.display += ("=------------------------------------------------------------------------------=\n"
                         "|                  Welcome to ROBCO Industries (TM) Termlink                   |\n"
                         "|------------------------------------------------------------------------------|\n"
                         "|                                                                              |\n" 
                         "|                             Password Required.                               |\n"
                         "|                         Attempts Remaining: # # # #                          |\n"
                         "|                                                                              |\n"
                         "|                                                                              |\n")
        
        for i in range(self.game_rows):
            
            if prevline == "right":
                randhex1 = "0x0" + str(hex(random.randint(1, 255))).replace("0x", "").upper().zfill(2)
                randhex2 = "0x0" + str(hex(random.randint(1, 255))).replace("0x", "").upper().zfill(2)
                filler1 = ''.join(random.choices(self.filler, k=4))
                filler2 = ''.join(random.choices(self.filler, k=4))
                filler3 = ''.join(random.choices(self.filler, k=12)) 
                
                word = random.choice([x for x in self.words if x not in self.used_words])
                self.used_words.append(word)
                self.display += (f"|        {randhex1}    {filler1}{word}{filler2}       {randhex2}    {filler3}                     |\n")
            
                prevline = "left"
            
            elif prevline == "left":
                randhex1 = "0x0" + str(hex(random.randint(1, 255))).replace("0x", "").upper().zfill(2)
                randhex2 = "0x0" + str(hex(random.randint(1, 255))).replace("0x", "").upper().zfill(2)
                filler1 = ''.join(random.choices(self.filler, k=4))
                filler2 = ''.join(random.choices(self.filler, k=4))
                filler3 = ''.join(random.choices(self.filler, k=12))
                
                word = random.choice([x for x in self.words if x not in self.used_words])
                self.used_words.append(word)
                self.display += (f"|        {randhex1}    {filler3}       {randhex2}    {filler1}{word}{filler2}                     |\n")

                prevline = "right"

        self.display += ("|                                                                              |\n"
                         "|                                                                              |\n"
                         "=------------------------------------------------------------------------------=\n")


    def play(self):
        self.display_words()
        print(self.display)
        while self.attempts_left > 0:
            guess = input(">").strip().upper()
            print()

            if guess not in self.words:
                print()

            if guess == self.correct_word:
                os.system('clear')
                print("=------------------------------------------------------------------------------=\n"
                      "|                  Welcome to ROBCO Industries (TM) Termlink                   |\n"
                      "|------------------------------------------------------------------------------|\n"
                      "|                                                                              |\n"
                      "|                               Password Accepted.                             |\n"
                      "|                                Access granted.                               |\n"
                      "|                                                                              |\n"
                      "|                                                                              |\n"
                      "|                                   #######                                    |\n"
                      "|                                ###       ###                                 |\n"
                      "|                  ###############           ###############                   |\n"
                      "|                             ##     #####     ##                              |\n"
                      "|                             ##   #########   ##                              |\n"
                      "|         #####################-   #########   -#####################          |\n"
                      "|                             ##   #########   ##                              |\n"
                      "|                             ##     #####     ##                              |\n"
                      "|                  ###############           ###############                   |\n"
                      "|                                ###       ###                                 |\n"
                      "|                                   #######                                    |\n"
                      "|                                                                              |\n"
                      "=------------------------------------------------------------------------------=\n")
                return True
            
            elif guess != self.correct_word and guess in self.words:
                self.attempts_left -= 1
                likeness = self.likeness(self.correct_word, guess)

                screen = list(self.display)
                if self.attempts_left == 3:
                    screen[405:485] = "|                            Attempts Remaining: # # #                         |"
                if self.attempts_left == 2:
                    screen[405:485] = "|                            Attempts Remaining: # #                           |"
                if self.attempts_left == 1:
                    screen[405:485] = "|                            Attempts Remaining: #                             |"
                screen[1278:1282] = f"{guess}"
                screen[1359:1373] = f">Entry denied."
                screen[1440:1451] = f">Likeness={likeness}"
                self.display = screen
                
                os.system("clear")
                print(''.join(self.display))
        
        os.system("clear")
        print("=------------------------------------------------------------------------------=\n"
              "|                  Welcome to ROBCO Industries (TM) Termlink                   |\n"
              "|------------------------------------------------------------------------------|\n"
              "|                                                                              |\n"
              "|                               Terminal Locked.                               |\n"
              "|                              Please contact an                               |\n"
              "|                                administrator                                 |\n"
              "|                                                                              |\n"
              "|                                   #######                                    |\n"
              "|                                ###       ###                                 |\n"
              "|                  ###############           ###############                   |\n"
              "|                             ##     #####     ##                              |\n"
              "|                             ##   #########   ##                              |\n"
              "|         #####################-   #########   -#####################          |\n"
              "|                             ##   #########   ##                              |\n"
              "|                             ##     #####     ##                              |\n"
              "|                  ###############           ###############                   |\n"
              "|                                ###       ###                                 |\n"
              "|                                   #######                                    |\n"
              "|                                                                              |\n"
              "=------------------------------------------------------------------------------=\n")
        sys.exit("Terminal lockout.")
    
    def likeness(self, correct_word, guess):
        word1 = list(correct_word)
        word2 = list(guess)
        likeness = 0

        for i in range(len(word1)):
            if word1[i] == word2[i]:
                likeness += 1

        return likeness