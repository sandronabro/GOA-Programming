def create_account():
    return {'balance': 0}

def deposit(account, amount):
    if amount > 0:
        account['balance'] += amount
        print("Deposited ${}. New balance: ${}".format(amount, account['balance']))
    else:
        print("Invalid deposit amount.")

def withdraw(account, amount):
    if amount > 0 and amount <= account['balance']:
        account['balance'] -= amount
        print("Withdrew ${}. New balance: ${}".format(amount, account['balance']))
    elif amount <= 0:
        print("Invalid amount. Please enter a new number.")
    else:
        print("Not enough balance. Try again")

def get_balance(account):
    return account['balance']

def main():
    print("Welcome to SJ Bank")

    user_account = create_account()

    while True:
        print("Options:")
        print("1. Deposit")
        print("2. Withdraw")
        print("3. Check Balance")
        print("4. Exit")

        choice = input("Enter your choice (1/2/3/4): ")

        if choice == '1':
            amount_input = input("Enter the deposit amount: $")
            if amount_input.replace('.', '', 1).isdigit():  # Check if it's a valid positive number
                amount = float(amount_input)
                deposit(user_account, amount)
            else:
                print("Invalid number. Please enter a valid number.")
        elif choice == '2':
            amount_input = input("Enter the withdraw amount: $")
            if amount_input.replace('.', '', 1).isdigit():  # Check if it's a valid positive number
                amount = float(amount_input)
                withdraw(user_account, amount)
            else:
                print("Invalid number. Please enter a valid number.")
        elif choice == '3':
            print("Your current balance is ${}".format(get_balance(user_account)))
        elif choice == '4':
            print("Thanks for choosing our bank!")
            break
        else:
            print("Invalid choice. Please enter a valid option.")

if True:
    main()