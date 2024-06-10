a = 10
b = 5

print(a+b)
print(a-b)
print(a/b)
print(a*b)
print(a**b)


book_names = ["book1", "book2", "book3", "book4", "book5", "book6", "book7", "book8", "book9", "book10"]
book_prices = [100, 200, 150, 175, 180, 210, 230, 250, 275, 300]
for i in range(10):
    if i < 5:
        new = 0.1
    else:
        new = 0.2
    new_price = book_prices[i] * (1 - new)
    print("{}: {}".format(book_names[i], new_price))


family_ages = [35, 40, 10]
new_ages = [age + 25 for age in family_ages]
print(new_ages)



first_name = str(input)
last_name = str(input)
age = str(input)
residence = str(input)
profession = str(input)
hobbies = str(input)
print("hello i am {} {}. i am {} years old and i am a {} living in {}. i enjoy {}.".format(first_name, last_name, age, profession, residence, hobbies))



num = 7
if num % 2 == 0:
    print("{} is even.".format(num))    
else:
    print("{} is odd.".format(num))