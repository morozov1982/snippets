import sys, warnings
if sys.version_info[0] < 3:
    warnings.warn("Для выполнения этой программы необходима как минимум \
                  версия python 3.0",
                  RuntimeWarning)
else:
    print('Нормальное продолжение')