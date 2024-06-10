# cw 1
# def smallest_num(list):
#     if len(list) == 0:
#         return []

#     smallest = list[0]
#     for num in list:
#         if num < smallest:
#             smallest = num 

#     return smallest

# cw 2
numbers = [3, 4, 2, 9, 1, 7, 8]

largest = numbers[0]
for num in numbers:
    if num > largest:
        largest = num

# optional cw 2
numbers.remove(largest)

print(numbers)
