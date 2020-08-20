## 10001-ое простое число

# Выписав первые шесть простых чисел, получим 2, 3, 5, 7, 11 и 13.
# Очевидно, что 6-ое простое число - 13.

## Какое число является 10001-ым простым числом?

primes = [2]
quantity = 10001
current = 3

def test_loop(cur):
    for num in primes:
        if cur % num == 0:
            return False
    return True

#основной цикл
while len(primes) < quantity:
    if test_loop(current):
        primes.append(current)
    current += 1

print(f'{len(primes)}-й простой делитель -', primes[-1])

input("Хочешь выйти, жми Enter!")
