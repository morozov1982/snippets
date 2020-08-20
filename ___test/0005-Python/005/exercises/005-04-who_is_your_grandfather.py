# Кто твой дед?
# Определяем деда по имени человека

pairs = {"Исаак" : "Авраам", "Иаков" : "Исаак",
         "Иуда" : "Иаков", "Фарес" : "Иуда",
         "Хецрон" : "Фарес", "Арам" : "Хецрон",
         "Аминадав" : "Арам", "Наассон" : "Аминадав",
         "Салмон" : "Наассон", "Вооз" : "Салмон"}

choice = None
son_name = None

while choice != "0":
    print('''
Узнай имя отца по имени сына.
Меню:
    0 - чтобы выйти
    1 - узнать имя отца
    2 - добавить свою пару (сын - отец)
    3 - удалить пару (сын - отец)
    4 - узнать имя деда
    5 - вывести имена всех сыновей и их отцов''')
    
    choice = input("\nЧто будем делать: ")
    if choice == "0":
        print("До свидания!")

    elif choice == "1":
        
        son_name = input("Введи имя сына: ")
        son_name = son_name.title()
        
        if son_name in pairs:
            print(f"Сын - {son_name}, а его отец - {pairs[son_name]}")
        elif son_name == "":
            print("Вы ничего не ввели!")
        else:
            print(f"В нашем списке нет сына с именем {son_name}")
    
    elif choice == "2":
        print("Добавим нового сына и его отца:")
        new_son = input("Имя сына: ")
        new_son = new_son.title()
        new_father = input("Имя отца: ")
        new_father = new_father.title()
        print("Добавляем пару", new_son, "и", new_father)
        pairs[new_son] = new_father

    elif choice == "3":
        print("Удалим сына и его отца:")
        del_son = input("Имя сына: ")
        del_son = del_son.title()
        print("Удаляем пару", del_son, "и", pairs[del_son])
        del pairs[del_son]

    elif choice == "4":
        grandson = input("Введи имя внука: ")
        grandson = grandson.title()
        if grandson == "":
            print("\nВ следующий раз введите что-нибудь!")
        elif grandson not in pairs:
            print(f"\nНет даже сына именем {grandson}!")
        else:
            son = pairs[grandson]
            if son not in pairs:
                print(f"В нашем списке {grandson} не имеет деда")
            else:
                print(f"Внук - {grandson}, отец - {son}, дед - {pairs[son]}")
    
    elif choice == "5":
        print("\nСписок всех сыновей и их отцов:")
        for son in pairs:
            print(f"\tСын - {son}, его отец - {pairs[son]}")
        
    else:
        print("Нет такого пункта меню:", choice)


input("\nНажмите Enter, чтобы выйти.")



# Задание:
# --------
# Доработайте программу «Кто твой папа?» так, чтобы можно было,
# введя имя человека, узнать, кто его дед.
# Программа должна по-прежнему пользоваться одним словарем
# с парами «сын - отец». Подумайте, как включить в этот словарь
# несколько поколений.
