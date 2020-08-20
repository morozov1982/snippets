## Сложение простых чисел

# Сумма простых чисел меньше 10 равна 2 + 3 + 5 + 7 = 17.

## Найдите сумму всех простых чисел меньше двух миллионов.

MIN = 2
MAX = 2000000

primes = []
summation = 0

def is_prime(num, list):
    for i in list:
        if num % i == 0:
            return False
    return True

for num in range(MIN, MAX+1):
    if len(primes) < 2:
        primes.append(num)

    if num <= MAX and is_prime(num, primes):
        primes.append(num)

for num in primes:
    summation += num

print("Primes:", primes)
print("Summation:", summation)

input("Хочешь выйти, жми Enter!")
