def total(initial = 5, *numbers, **keywords):
    count = initial
    print('Count:', count)
    for number in numbers:
        count += number
        print('Count after number:', count)
    for key in keywords:
        count += keywords[key]
        print('Count after keywords:', count)
    return count

print(total(10, 1, 2, 3, vegetables = 50, fruits = 100))