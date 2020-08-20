# Случайные слова
# Выводит список слов в случайном порядке

# импорт модуля
import random

# слова
WORDS = ("ПУПОК", "ПЕРЕСТРОЙКА", "БОБЁР", "МАФИЯ", "БЕЛЛЕТРИСТИКА", "АФОНЯ", "ПЕРЕБОР", "ПРОФИТРОЛИ")

# уже использовали
used = []

print("Случайный набор слов:")

while len(WORDS) > len(used):
    word = random.choice(WORDS)
    while word in used:
        word = random.choice(WORDS)
    else:
        used.append(word)
    print(len(used), "-", word.title())


input("\nНажмите Enter, чтобы выйти.")
