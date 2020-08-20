# Простая игра
# Демонстрирует импорт модулей

import games
import random

print("Добро пожаловать в самую-самую простую игру!\n")
again = None

while again != "n":
    print("again:", again)
    players = []
    num = games.ask_number(question="Сколько игроков участвует? (2-4): ", low=2, high=5)

    for i in range(num):
        name = input("Имя игрока: ")
        score = random.randrange(100) + 1
        player = games.Player(name, score)
        players.append(player)

    print("\nВот результат игры:")
    for player in players:
        print(player)

    again = games.ask_yes_no("\nХотите сыграть ещё раз? (y/n): ")


input("\n\nНажмите Enter, чтобы выйти.")
