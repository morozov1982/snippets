## Наибольшее произведение-палиндром

# Число-палиндром с обеих сторон (справа налево и слева направо)
# читается одинаково. Самое большое число-палиндром,
# полученное умножением двух двузначных чисел – 9009 = 91 × 99.

## Найдите самый большой палиндром,
## полученный умножением двух трехзначных чисел.

# максимальный и минимальный множители
max_num = 999
min_num = 100

# будущий ответ
max_pal = 0
# пара множителей
pair = []

# для результатов умножения
num = 0

def reverse_str(string):
    new_str = ""
    for letter in str(string[::-1]):
        new_str += letter
    return new_str

for num1 in range(max_num, min_num + 1, -1):
    for num2 in range(max_num, min_num + 1, -1):
        num = num1 * num2
        if num == int(reverse_str(str(num))) and num > max_pal:
            max_pal = num
            pair = [num1, num2]

print(f"Максимальный палиндром от умножения двух трёхзначных чисел = {max_pal}")
print(pair[0], "*", pair[1], "=", max_pal)

input("Хочешь выйти, жми Enter!")
