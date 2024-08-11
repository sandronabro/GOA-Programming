class Create_acc:

    def __init__(self, fullname, mail, address, password):
        self.fullname = fullname
        self.mail = mail
        self.address = address
        self.password = password

    def return_all(self):
        return f"Your name is: {self.fullname}, you live in {self.address}. \nYour mail is: {self.mail} and your password is: {self.password}"
    
user1 = Create_acc("sandro", "sandrojalaghonia707@gmail.com", "Tbilisi", "helloworld123!")
print(user1.return_all())




def return_val(user_dict, val):
    return {key: value for key, value in user_dict.items() if value == val}

dict1 = {
    "a": 1, 
    "b": 1,
    "c": 2,
    "d": 2
}
print(return_val(dict1, 1))


numbers = [1, 2, 3, 4, 5]
num1, num2, *num3 = numbers
print(num3, type(num3))


def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)
    
print(factorial(5))