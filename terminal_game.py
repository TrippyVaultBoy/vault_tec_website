import random

class Terminal_game():
    def __init__(self, max_attempts=4):
        self.words = ["WOOD", "SPOT", "GETS", "WHEN", "POTS",
                      "FLAT", "DRAG", "WEAK", "HUTS", "EGOS"]
        self.used_words = []
        self.filler = ["{", "}", "(", ")", "[", "]",
                       ",", ".", "?", "!", "|", "/",
                       "'", "=", "*", "%", "-", ";",
                       "#", "_", ">", "<", "@", "$"]
        self.correct_word = random.choice(self.words)
        self.max_attempts = max_attempts
        self.attempts_left = max_attempts
        self.game_rows = 10


    def display_words(self):
        prevline = "right"
        print()
        print("Password Required")
        print()
        for i in range(self.game_rows):
            if prevline == "right":
                randhex1 = "0x0" + str(hex(random.randint(1, 255))).replace("0x", "").upper()
                randhex2 = "0x0" + str(hex(random.randint(1, 255))).replace("0x", "").upper()
                filler1 = ''.join(random.choices(self.filler, k=4))
                filler2 = ''.join(random.choices(self.filler, k=4))
                filler3 = ''.join(random.choices(self.filler, k=12)) 
                
                word = random.choice([x for x in self.words if x not in self.used_words])
                self.used_words.append(word)
                print(f"|     {randhex1}    {filler1}{word}{filler2}         {randhex2}    {filler3}      |")
            
                prevline = "left"
            
            elif prevline == "left":
                randhex1 = "0x0" + str(hex(random.randint(1, 255))).replace("0x", "").upper()
                randhex2 = "0x0" + str(hex(random.randint(1, 255))).replace("0x", "").upper()
                filler1 = ''.join(random.choices(self.filler, k=4))
                filler2 = ''.join(random.choices(self.filler, k=4))
                filler3 = ''.join(random.choices(self.filler, k=12))
                
                word = random.choice([x for x in self.words if x not in self.used_words])
                self.used_words.append(word)
                print(f"|     {randhex1}    {filler3}         {randhex2}    {filler1}{word}{filler2}      |")
                
                prevline = "right"


    def play(self):
        self.display_words()
        while self.attempts_left > 0:
            guess = input(">").strip().upper()
            
            if guess == self.correct_word:
                print()
                print("Password Accepted.")
                return True
            
            else:
                self.attempts_left -= 1
                likeness = self.likeness(self.correct_word, guess)
                print(">Attempts Remaining: ", self.attempts_left)
                print(f">{guess}")
                print(">Entry denied.")
                print(f">Likeness={likeness}")
        
        print("Out of attempts! Correct password: ", self.correct_word)
        return False
    
    def likeness(self, correct_word, guess):
        word1 = list(correct_word)
        word2 = list(guess)
        likeness = 0

        for i in range(len(word1)):
            if word1[i] == word2[i]:
                likeness =+ 1

        return likeness