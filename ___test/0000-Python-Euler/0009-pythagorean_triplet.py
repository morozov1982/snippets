## Особая тройка Пифагора

# Тройка Пифагора - три натуральных числа a < b < c,
# для которых выполняется равенство
#
# a**2 + b**2 = c**2
# Например, 3**2 + 4**2 = 9 + 16 = 25 = 5**2.

## Существует только одна тройка Пифагора, для которой a + b + c = 1000.
## Найдите произведение abc.

import math

summary = 1000
multiply = 1

a = 1
b = 1
c = 1

for i in range(1,500):
    for j in range(1,500):
        for k in range(1,500):
            if i < j < k:
                cur_sum = i + j + k
                if cur_sum == summary and (i**2 + j**2 == k**2):
                    a, b, c = i, j, k
                    multiply = a * b * c

print("a:", a, "b", b, "c:", c)
print("a * b * c =", multiply)


input("Хочешь выйти, жми Enter!")
