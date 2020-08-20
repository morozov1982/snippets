## Наименьшее кратное

# 2520 - самое маленькое число,
# которое делится без остатка на все числа
# от 1 до 10.

## Какое самое маленькое число делится нацело на все числа
## от 1 до 20?

'''
НОК - наименьшее общее кратное

Алгоритм:
1. Находим делители каждого числа
2. Выписываем все делители максимального числа
3. Находим делители от меньшего числа которых недостаёт среди делителей большего
4. После прохода по всей последовательности перемножаем собраные делители
'''

# минимальное и максимальное число в последовательности
MIN = 2
MAX = 20

# все делители, каждого из чисел
all_divs = []
# все уникальные делители
unique_divs = []

# НОК
nok = 1


def find_divs(num):
    '''Ищет все делители числа'''
    divs = []
    for i in range(MIN, num+1):
        while num % i == 0:
            divs.append(i)
            num /= i
    return divs

def check_multiples(divs_list):
    divs = []
    divs_list.reverse()
    for i in divs_list:
        for j in i:
            if j not in divs or i.count(j) > divs.count(j):
                divs.append(j)
    return divs

def multiply_list(divs_list):
    res = 1
    for num in divs_list:
        res *= num
    return res

def main():
    # 1. Находим делители каждого числа
    for i in range(MIN, MAX+1):
        finded = find_divs(i)
        all_divs.append(finded)

    # 2. Выписываем все делители максимального числа
    #unique_divs.append(all_divs[len(all_divs)-1])

    # 3. Добавляем недостающие делители в список
    checked = check_multiples(all_divs)
    unique_divs = checked

    # 4. Умножаем все делители
    nok = multiply_list(unique_divs)
    print("Наименьшее общее кратное:", nok)

main()





input("Хочешь выйти, жми Enter!")
