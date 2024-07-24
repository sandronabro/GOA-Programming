# cw 1
# def manual_pop(list, index=-1):
#     new_list = []
#     for i in range(len(list)):
#         if i != index:
#             new_list.append(list[i])
#     print(new_list)

# for i in range(9, 21):
#     print(i)

# cw 2
# person = {
#     "Name": "Sandro",
#     "Last_name": "Jalaghonia",
#     "Ages": [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
#     "Groups": [6,5,0]
# }

# print(person)

# cw 3
name = input("Name: ")
lastname = input("Last name: ")
age = input("Age: ")

dict = dict()

dict["name"] = name
dict["lastname"] = lastname
dict["age"] = age

value = input("Value: ")
print(dict.get(value, "Key no found"))