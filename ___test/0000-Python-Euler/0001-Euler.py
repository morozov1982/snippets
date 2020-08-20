num = 0
total_num = 1000
numbers = []
summ = 0

while num < total_num - 1:
    num += 1
    if num % 3 == 0:
        numbers.append(num)
        summ += num
    elif num % 5 == 0:
        numbers.append(num)
        summ += num

print(summ)
