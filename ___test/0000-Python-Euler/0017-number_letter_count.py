## Счет букв в числительных

# Если записать числа от 1 до 5 английскими словами
# (one, two, three, four, five),
# то используется всего 3 + 3 + 5 + 4 + 4 = 19 букв.

## Сколько букв понадобится для записи всех чисел от 1 до 1000
## (one thousand) включительно?
##
## Примечание:
## Не считайте пробелы и дефисы.
## Например, число 342 (three hundred and forty-two)
## состоит из 23 букв, число 115 (one hundred and fifteen) - из 20 букв.
## Использование "and" при записи чисел соответствует
## правилам британского английского.


NUMS = 1000
NUM_NAMES = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
             6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
             11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen',
             15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen',
             19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty',
             50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty',
             90: 'ninety', 100: 'hundred', 1000: 'thousand'}
summary = 0

for i in range(1, NUMS+1):
    num_str = ''

    # тысячи
    if i // 1000 >= 1:
        digit = int(str(i)[-4])
        num_str += NUM_NAMES[digit] + NUM_NAMES[1000]

    # сотни
    if i // 100 >= 1:
        digit = int(str(i)[-3])
        if digit != 0:
            num_str += NUM_NAMES[digit] + NUM_NAMES[100]

    # 1-99
    if num_str and (i % 100) > 0:
        num_str += 'and'

    # 1-20
    if (i % 100) // 21 < 1 and i % 100 != 0:
        digit = int(i % 100)
        num_str += NUM_NAMES[digit]

    # 21-99
    elif (i % 100) // 100 < 1:
        key_str1 = str(i)[-2]
        key_str2 = str(i)[-1]
        if key_str1 != '0':
            num_str += NUM_NAMES[int(key_str1)*10]
        if key_str2 != '0':
            num_str += NUM_NAMES[int(key_str2)]

    summary += len(num_str)

print("Количество букв в числах от 1 до", NUMS, "=", summary)
