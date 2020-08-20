# текст задом наперёд

print(
    '''
        Добро пожаловать!
    Могу развернуть ваш текст задом наперёд.
    ''')

text = input("Введите свой текст: ")

reverse_text = ""

for i in range(-1, -len(text)-1, -1):
    reverse_text += text[i]

print("Развёрнутый текст:")
print("\t", reverse_text)

input("\nНажмите Enter, чтобы выйти.")
