# Генератор персонажей
# Формируем навыки персонажа по 4 характеристикам:
# Сила, Здоровье, Мудрость и ловкость
# Всего 30 очков навыков

TOTAL_POINTS = 30
used_points = None

strength = 0
health = 0
wisdom = 0
agility = 0

choice = None

while choice != '0':
    print(
    '''
    Нажмите:
    0 - чтобы выйти
    1 - чтобы узнать характеристики персонажа
    2 - чтобы ввести характеристики
    3 - чтобы изменить характеристики
    ''')

    choice = input("Ваш выбор: ")

    if choice == '0':
        print("До свидания!")
    
    elif choice == '1':
        print("\nВаши характеристики:")
        print("сила -", strength, end=" ")
        print("здоровье -", health, end=" ")
        print("мудрость -", wisdom, end=" ")
        print("ловкость -", agility, end=" ")

    elif choice == '2':
        if used_points == None:
            print("Введите желаемые характеристики (помните, у вас 30 очков):")
            
            strength = int(input("Сила: "))
            health = int(input("Здоровье: "))
            wisdom = int(input("Мудрость: "))
            agility = int(input("Ловкость: "))
        
            used_points = strength + health + wisdom + agility
            print("Вы использовали", used_points, "из", TOTAL_POINTS)
            
            while used_points > TOTAL_POINTS:
                print("Вы пытаетесь использовать больше очков, чем вам предоставили.")
                print("Попробуйте ещё разок:")
                strength = int(input("Сила: "))
                health = int(input("Здоровье: "))
                wisdom = int(input("Мудрость: "))
                agility = int(input("Ловкость: "))
                used_points = strength + health + wisdom + agility
            #else:
                #print("Вы использовали", used_points, "из", TOTAL_POINTS)
    elif choice == '3':
        if used_points == None:
            print("Вы ещё не вводили характеристики для своего персонажа")
        else:
            print("Вы использовали", used_points, "из", TOTAL_POINTS)
            print("\nВаши характеристики:")
            print("сила -", strength, end=" ")
            print("здоровье -", health, end=" ")
            print("мудрость -", wisdom, end=" ")
            print("ловкость -", agility, end=" ")

            choice_param = None
            while choice_param != '0' or used_points > TOTAL_POINTS:
                print("\nВаши характеристики:")
                print("сила -", strength, end=" ")
                print("здоровье -", health, end=" ")
                print("мудрость -", wisdom, end=" ")
                print("ловкость -", agility, end=" ")
                
                print(
                '''
                Выберите, что вы хотите поменять:
                0 - выйти
                1 - Сила
                2 - Здоровье
                3 - Мудрость
                4 - Ловкость
                ''')
                
                choice_param = input("Ваш выбор: ")
                
                if choice_param == '0':
                    if used_points <= TOTAL_POINTS:
                        print("Вы завершили изменять характеристики")
                    else:
                        print("Поменяйте ваши характеристики,")
                        print(f"Вы пытаетесь использовать {used_points} из {TOTAL_POINTS}")
                elif choice_param == '1':
                    print(f"Сейчас ваша сила {strength}")
                    strength = int(input("Сила: "))
                elif choice_param == '2':
                    print(f"Сейчас ваше здоровье {health}")
                    health = int(input("Здоровье: "))
                elif choice_param == '3':
                    print(f"Сейчас ваша мудрость {wisdom}")
                    wisdom = int(input("Мудрость: "))
                elif choice_param == '4':
                    print(f"Сейчас ваша ловкость {agility}")
                    agility = int(input("Ловкость: "))
                else:
                    print("Простите, но в этом меню нет пункта", choice_param)
                used_points = strength + health + wisdom + agility

    else:
        print("Простите но в меню нет пункта", choice)
    
    


input("\nНажмите Enter, чтобы выйти.")



# Задание:
# --------
# Напишите программу «Генератор персонажей» для ролевой игры.
# Пользователю должно быть предоставлено 30 пунктов,
# которые можно распределить между четырьмя характеристиками:
# Сила, Здоровье, Мудрость и Ловкость.
# Надо сделать так, чтобы пользователь мог не только брать
# эти пункты из общего «Пула», но и возвращать их туда из характеристик,
# которым он решит присвоить другие значения.
