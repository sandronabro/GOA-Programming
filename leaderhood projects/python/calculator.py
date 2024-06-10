# pretty simple calculator

def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y != 0:
        return x / y
    else:
        return "error 404"
    

# mathematical opeatations
while True:
    operation = input("enter mathematical operation (+, -, *, /) or 'q' to quit: ")

    if operation == 'q':
        break

# user enters numbers
    num1 = float(input("enter first number: "))
    num2 = float(input("enter second number: "))


# then the magic happens
    if operation == '+':
        result = add(num1, num2)
        print("{} + {} = {}".format(num1, num2, result))
    elif operation == '-':
        result = subtract(num1, num2)
        print("{} - {} = {}".format(num1, num2, result))
    elif operation == '*':
        result = multiply(num1, num2)
        print("{} * {} = {}".format(num1, num2, result))
    elif operation == '/':
        result = divide(num1, num2)
        print("{} / {} = {}".format(num1, num2, result))
    else:
        print("operation is not in the system!")

print("bye bye")