## Сумма цифр степени

# 2**15 = 32768, сумма цифр этого числа равна 3 + 2 + 7 + 6 + 8 = 26.

## Какова сумма цифр числа 2**1000?

num = 2
pow = 1000
num_pow = None
summ = 0

num_pow = str(num**pow)

for i in range(len(num_pow)):
    summ += int(num_pow[i])


print(num_pow)
print(summ)



input("Хочешь выйти, жми Enter!")
