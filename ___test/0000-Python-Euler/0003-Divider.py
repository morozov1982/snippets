number = 600851475143

def dividers(num):
    min_divider = 2
    max_divider = num
    dividers = []
    s_dividers = []
    while max_divider >= min_divider:
        if number % min_divider == 0:
            s_dividers.append(min_divider)
            max_divider = int(number / min_divider)
            dividers.append(max_divider)
        min_divider += 1
    for i in s_dividers[::-1]:
        dividers.append(i)
    return dividers

def is_simle_num(numbers):
    #print("Список максимальных делителей:", numbers)
    for num in numbers:
        div = 2
        while num % div != 0 and num > int(div/2):
            div += 1
        else:
            if num == div:
                return num
        #print("Это оно:", num)
        #return num

dividers_list = dividers(number)

#print(dividers_list)

print(is_simle_num(dividers_list))

