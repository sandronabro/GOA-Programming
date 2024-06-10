import random

# this is a range from thhe random number. its 1-100
min_num = 1
max_num = 100

# this generates a random number
secret_number = random.randint(min_num, max_num)

# the number of attemps
attempts = 0
max_attempts = 15

# the game
while attempts < max_attempts:
    guess = int(input("enter number between {0} and {1}: ".format(min_num, max_num)))

    if guess == secret_number:
        print("you guessed the number {0} correctly".format(secret_number))
        break
    elif guess < secret_number:
        print("too low. enter again")
    else:
        print("thats too high. enter again")

    attempts += 1

# GAME OVER1!!
if attempts == max_attempts:
    print("YOU LOSE! THE NUMBER WAS {0}".format(secret_number))