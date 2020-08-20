## Самая длинная последовательность Коллатца

# Следующая повторяющаяся последовательность определена
# для множества натуральных чисел:
#
# n → n/2 (n - четное)
# n → 3n + 1 (n - нечетное)

# Используя описанное выше правило и начиная с 13,
# сгенерируется следующая последовательность:
#
# 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

# Получившаяся последовательность (начиная с 13 и заканчивая 1)
# содержит 10 элементов. Хотя это до сих пор и не доказано
# (проблема Коллатца (Collatz)), предполагается,
# что все сгенерированные таким образом последовательности оканчиваются на 1.

## Какой начальный элемент меньше миллиона генерирует
## самую длинную последовательность?
##
## Примечание:
## Следующие за первым элементы последовательности могут быть больше миллиона.

MIN = 1
MAX = 1000000

longest_list = []
longest_len = 0


def create_collatz(cur_list=[]):
    cur = cur_list[-1]

    if cur % 2 == 0:
        cur = int(cur/2)
    else:
        cur = cur * 3 + 1

    cur_list.append(cur)

    if cur == 1:
        return cur_list
    else:
        return create_collatz(cur_list)


# 1. Перебираем в цикле числа с 1 до 1000000 (не включая)
for num in range(MIN, MAX):
    current_list = [num]
    current_list = create_collatz(current_list)
    current_len = len(current_list)

    if current_len > longest_len:
        longest_list = current_list
        longest_len = current_len

print(f"Longest ({longest_len}): {longest_list}")
input("Хочешь выйти, жми Enter!")
