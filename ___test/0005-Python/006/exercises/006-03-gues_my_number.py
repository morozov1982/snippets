# Отгадай число
#
# Компьютер выбирает случайное число в диапазоне от 1 до 100
# Игрок пытается отгадать это число, и компьютер говорит,
# предположение больше/меньше, чем загаданное число,
# или попало в точку

import random

# начальные значения
the_number = random.randint(1, 100)

def ask_number(question):
    '''Просит ввести число из диапазона.'''
    response = None
    while response not in range(1, 101):
        response = int(input(question))
    return response

def main():
    print("\tДобро пожаловать в игру 'Отгадай число'!")
    print("\nЯ загадал натуральное число из диапазона от 1 до 100.")
    print("Постарайтесь отгадать его за минимальное число попыток.\n")

    guess = 0
    tries = 0

    # цикл отгадывания
    while guess != the_number:
        guess = ask_number("Ваше предположение (от 1 до 100): ")
        if guess > the_number:
            print("Меньше...")
        else:
            print("Больше...")
        tries += 1

    print("Baм удалось отгадать число! Зто в самом деле", the_number)
    print("Bы затратили на отгадывание всего лишь ", tries, " попыток!\n")

# запуск программы
main()

input("\n\nНажмите Enter, чтобы выйти.")
