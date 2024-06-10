# # ჯერ ვქმნით ცვლადებს და დავწერთ შიგნით INPUTS სადაც ჩავწერთ რიცხვს
# num1 = int(input("Enter a number: "))
# num2 = int(input("Enter a number: "))


# # და შემდეგ დავპრინტავთ ამ ცვლდებით მათემატიკურ ოპერაციებს
# print(num1 + num2)
# print(num1 - num2)
# print(num1 / num2)
# print(num1 * num2)
# print(num1 ** num2)


# CLASSWORK 1
a = int(input("Enter a number: "))
b = int(input("Enter a number: "))
c = int(input("Enter a number: "))

if a+b > c and a+c > b and b +c > a:
    print("This is a triangle")
else:
    print("This is NOT a triangle")



# CLASSWORK 2
def add(a, b):
    return a + b

def devide(a, b):
    return a - b

def multiply(a, b):
    return a * b

def substract(a, b):
    return a / b

num1 = int(input("Enter a number: "))
num2 = int(input("Enter a number: "))

add = add(num1, num2)
devide = devide(num1, num2)
multiply = multiply(num1, num2)
substract = substract(num1, num2)

print(add)
print(devide)
print(multiply)
print(substract)


#CLASSWORK 3
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)
    
factorial = factorial(10)
print(factorial)


# CLASSWORK 4
num1 = 5
num2 = 10
num3 = num1+num2
print(num3)
num3 = num1*num2
print(num3)