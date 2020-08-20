symbols = [' ', '.', '?', '!', ':', ';', '-', '—', '(', ')', '[', ']', '{', '}', '\'', ',', '"', '\\', '|', '/']

def trim_symbols(text):
    text = text.lower()
    for symbol in symbols:
        if text.find(symbol) != -1:
            text = text.replace(symbol, '')
    return text

def reverse(text):
    return text[::-1]

def is_palindrome(text):
    print(text)
    return text == reverse(text)

something = input('Введите текст: ')
if (is_palindrome(trim_symbols(something))):
    print("Да, это палиндром") # Палиндромы: топот, мадам, потоп...
else:
    print("Нет, это не палиндром")