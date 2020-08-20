fibo_list = []

def add_fibo_to_list(fibo):
    fibo_len = len(fibo)
    if fibo_len < 1:
        fibo.append(1)
    elif fibo_len < 2:
        fibo.append(fibo[0])
    else:
        fibo.append(fibo[-2] + fibo[-1])
    return fibo

def sum_of_even(list):
    sum = 0
    for i in list:
        if i % 2 == 0:
            sum += i
    return sum

while sum_of_even(fibo_list) < 4000000:
    add_fibo_to_list(fibo_list)

print("FIBO_LIST: ", fibo_list)
print("Сумма всех четных элементов ряда Фибоначчи, которые не превышают четыре миллиона:", sum_of_even(fibo_list))
