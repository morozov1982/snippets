class Person:
    def __init__(self, name):
        self.name = name
    def sayHi(self):
        print('Привет, майна нама ист', self.name)

p = Person('morozov1982')
p.sayHi()