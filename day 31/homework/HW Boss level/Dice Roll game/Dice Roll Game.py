import random

def roll_dice():
    return random.randint(1, 6)

def main():
    print("Welcome to Dice Roll!")

    user_name = input("Enter your name: ")

    computer_score = 0
    user_score = 0 
    rounds = 5

    for _ in range(rounds):
        input("Press Enter to roll the dice...")

        user_roll = roll_dice()
        print("{} rolled a {}".format(user_name, user_roll))
        user_score += user_roll

        computer_roll = roll_dice()
        print("Robot rolled a", computer_roll)
        computer_score += computer_roll

    print("Game Over!")
    print("{}'s total score: {}".format(user_name, user_score))
    print("Robot's total score:", computer_score)

    if user_score > computer_score:
        print("{} wins!".format(user_name))
    elif user_score < computer_score:
        print("Robot wins!")
    else:
        print("It's a tie!")

if True:
    main()
