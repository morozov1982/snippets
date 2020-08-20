## Треугольное число с большим количеством делителей

# Последовательность треугольных чисел образуется путем
# сложения натуральных чисел. К примеру, 7-ое треугольное число
# равно 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28.
#
# Первые десять треугольных чисел:
# 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
#
# Перечислим делители первых семи треугольных чисел:

#  1: 1
#  3: 1, 3
#  6: 1, 2, 3, 6
# 10: 1, 2, 5, 10
# 15: 1, 3, 5, 15
# 21: 1, 3, 7, 21
# 28: 1, 2, 4, 7, 14, 28
#
# Как мы видим, 28 - первое треугольное число,
# у которого более пяти делителей.

## Каково первое треугольное число, у которого более пятисот делителей?

triangle_nums = []
TR_LIST_LEN = 15000
HIGHLY = 500

divisible = None
last_div = None


def gen_triangle_num_list(list_len=1):
    tr_list = [1]
    prev = None
    cur = None
    for i in range(1, list_len):
        prev = tr_list[i-1]
        cur = i+prev+1
        tr_list.append(cur)
    return tr_list


def find_dividers(number):
    divs = [1]
    for i in range(2, int(number/2 + 1)):
        if number % i == 0:
            divs.append(i)
    divs.append(number)
    return divs


triangle_nums = tuple(gen_triangle_num_list(TR_LIST_LEN))
#print(triangle_nums)


max_divs = 0
for num in triangle_nums:
    num_divs = find_dividers(num)
    length = len(num_divs)
    if num == TR_LIST_LEN - 500:
        print("TR_LIST_LEN-500")
    if length > max_divs:
        max_divs = length
    if length > HIGHLY:
        divisible = num
        print(f'{divisible}: {num_divs}, length: {length}')
        break


if not divisible:
    print(f'Максимальное количество делителей - {max_divs}')
    print('Увеличьте TR_LIST_LEN, его значение недостаточно')


input("Хочешь выйти, жми Enter!")
