while True:
    s = input('Введите что-нибудь: ')
    if s == 'что-нибудь':
        break
    if len(s) < 10:
        print('Слишком коротко')
        continue
    print('Введённая строка достаточной длины')