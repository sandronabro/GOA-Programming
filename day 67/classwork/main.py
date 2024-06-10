# 1
def find_average(numbers):
    if not numbers:
        return 0
    
    return sum(numbers) / len(numbers)

# 2
def array_plus_array(arr1,arr2):
    return sum(arr1) + sum(arr2)

# 3


# 4
def sum_of_n(n):
    result = []
    for i in range(abs(n) + 1):
        m = sum(range(i + 1))
        if n < 0:
            m = -m
        result.append(m)
    return result


# 5
def difference_of_squares(n):
    num_sums = sum(range(1, n+1))
                     
    sum_square = num_sums ** 2
    square_sum = sum(x**2 for x in range(1, n+1))
    
    substaction = square_sum - sum_square
    
    return abs(substaction)

print("done")