## Пути через таблицу

# Начиная в левом верхнем углу сетки 2×2
# и имея возможность двигаться только вниз или вправо,
# существует ровно 6 маршрутов до правого нижнего угла сетки.

# __    _       _
#   |    |_      |      |__     |_     |
#   |      |     |_        |      |_   |__

## Сколько существует таких маршрутов в сетке 20×20?

# будем решать используя треугольник Паскаля
'''
0 -              1
1 -            1   1
2 -          1   2   1
3 -        1   3   3   1
4 -      1   4   6   4   1
5 -    1   5  10  10   5   1
6 -  1   6  15  20  15   6   1
'''

from math import factorial

# число клеток по горизонтали (место слева) и вертикали (место справа)
ROWS = 20
COLS = 20

# строка теругольника Паскаля
N = ROWS + COLS

# количество возможных ходов
c = None


def ways(n,m):
    # треугольник Паскаля
    return int(factorial(n) / (factorial(m) * factorial(n-m)))


c = ways(N, ROWS)
print(f"В сетке {ROWS}x{COLS} {c} маршрутов.")


input("Хочешь выйти, жми Enter!")
