#!/usr/bin/env python
# -*- coding: utf-8 -*-

# name = input('please enter your name:')
# print('你好,',name)


# 条件判断
# height = 1.75
# weight = 80.5
# bmi = weight/height/height
# if bmi<18.5:
# 	print('过轻')
# elif bmi<25:
# 	print('正常')
# elif bmi<28:
# 	print('过重')
# elif bmi<32:
# 	print('肥胖')
# else :
# 	print('严重肥胖')


# ....................................循环................................................
# L = ['Bart','lisa','adam']
# for name in L:
# 	print('hello,',name)
	

# 
# n1 = 255
# n2 = 897
# print(hex(n1))
# print(hex(n2))

# def my_abs(x):
#     if x >= 0:
#         return x
#     else:
#         return -x
# from abstext import my_abs
# print(my_abs('1'))



# 返回多个值 函数可以同时返回多个值，但其实就是一个tuple。
# 
# import math
# def move(x, y, step, angle=0):
#  	nx = x+step*math.cos(angle)
#  	ny = y-step*math.sin(angle)
#  	return nx, ny
# x, y = move(100, 100, 60, math.pi / 6)
# print(x, y)


# 定义一个函数quadratic(a, b, c)，接收3个参数，返回一元二次方程：的两个解

# import math
# # a = input('please enter a:')
# # b = input('please enter b:')
# # c = input('please enter c:')
# def quadratic(a, b, c):
	
#     if a == 0:
#     	print('a 不能是0')
#     d = b*b-4*a*c
#     # if d<0:
#     # 	print('无解')
#    	# else:
# 	x1 = (-b+math.sqrt(d))/(2*a)
# 	x2 = (-b-math.sqrt(d))/(2*a)
# 	print(x1, x2)

# print(quadratic(2, 3, 1))

# python demo01.py


# import math
# def quadratic(a,b,c):
#     if not isinstance(a,(int,float)) or not isinstance(b,(int,float)) or not isinstance(c,(int,float)):
#         raise TypeError('%s,%s,%s is not a integer or float'%(a,b,c))
#     if a==0:
#         print('The first parameter can NOT be zero')
#         return None
#     delta=math.pow(b,2)-4*a*c
#     if delta>=0:
#        x1=(-b+math.sqrt(delta))/(2*a)
#        x2=(-b-math.sqrt(delta))/(2*a)
#        return x1,x2
#     else:
#         print('This is not a valid quadratic equation!')
#         return None
# print(quadratic(2, 3, 1))


# def enroll(name, gender, age=6, city='beijing'):
# 	print('name:', name)
# 	print('gender:', gender)
# 	print('age:', age)
# 	print('beijing:', beijing)


# python demo01.py

# 可变参数
# def calc(numbers):
# 	sum = 0
# 	for n in numbers:
# 		sum = sum + n*n
# 	print(sum)
# 	return sum

# calc([1, 2, 3])
# calc((1, 3, 5))


# 关键字参数
# def person(name, age, **kw):
#     print('name:', name, 'age:', age, 'other:', kw)
# extra = {'city': 'Beijing', 'job': 'Engineer'}
# print(person('Jack', 24, city=extra['city'], job=extra['job']))


# 递归函数
# def fact(n):
# 	if n==1:
# 		return 1
# 	return n*fact(n-1)
# # print(fact(1))
# print(fact(1000))

# def fact(n):
# 	return fact_iter(n, 1)

# def fact_iter(num, product):
# 	if num == 1:
# 		return product
# 	return fact_iter(num - 1, num*product)

# print(fact_iter(5, 1))
# print(fact_iter(4, 5))
# print(fact_iter(3, 20))
# print(fact_iter(2, 60))
# print(fact_iter(1, 120))

# python demo01.py

# 汉诺塔(递归)
# def move(n,a,b,c):
#     if n==1:
#         print(a,'-->',c)
#     else:
#         move(n-1,a,c,b) #a除最大园盘以外的盘经过c柱移动到b柱
#         move(1,a,b,c) #a底部最大圆盘放到c柱
#         move(n-1,b,a,c)  #b柱上的圆盘经过a柱移动到c柱

# move(2,'A','B','C')

# 切片
# L = ['Michael', 'Sarah', 'Tracy', 'Bob', 'Jack']
# # L[0:3]
# L[1:3]

# L = list(range(100))
# L[:10]
# print(L[:10])
# print(L[::5])



# python demo01.py
# 迭代
# for ch in 'ABC':
    # print(ch)

# from collections import Iterable
# isinstance('abc', Iterable) # str是否可迭代


# 列表生成器
# L1 = ['Hello', 'World', 18, 'Apple', None]
# L2 = [s.lower() for s in L1 if isinstance(s, str)]
# print(L2)

# def fib(max):
#     n, a, b = 0, 0, 1
#     while n < max:
#         # print(b)
#         yield b
#         a, b = b, a + b
#         n = n + 1
#     return 'done'
# # fib(6)
# # for n in fib(6):
# # 	print(n)
# g = fib(6)
# while True:
# 	try:
# 		x = next(g)
# 		print('g:', x)
# 	except StopIteration as e:
# 		print('Generator return value:', e.value)
# 		break


# 杨辉三角
# python demo01.py

# def triangles():
#     l=[1]
#     while True:
#         yield l
#         l=[1]+[l[j]+l[j+1] for j in range(len(l)-1)]+[1]

# n = 0
# for t in triangles():
#     print(t)
#     n = n + 1
#     if n == 6:
#         break


# 迭代器



# 高阶函数
# def add(x, y, f):
#     return f(x) + f(y)
# f = abs
# print(add(-5, 6, abs))



# ........................................map
# def normalize(name):
# 	return name.capitalize()
# 	#return name[:1].upper() + name[1:].lower()

# L1 = ['adam', 'LISA', 'barT']
# L2 = list(map(normalize, L1))

# print(L2)


# from functools import reduce
# def fn(x, y):
#     return x*y

# def prod(L):	
# 	return reduce(fn, L)

# print('3 * 5 * 7 * 9 =', prod([3, 5, 7, 9]))


# def str2float(s):
# 	return float(s)
# print('str2float(\'123.456\') =', str2float('123.456'))

# python demo01.py


# filter
# def is_odd(n):
# 	return n % 2 == 1

# list(filter(is_odd, [1, 2, 3, 5, 6, 9, 10, 15]))


# from functools import reduce
# def char2num(s):
# 	return {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9}[s]

# def str2int(s):
# 	return reduce(lambda x, y:x*10 + y,map(char2num, s))



# 素数
# def _odd_iter():
# 	n = 1
# 	while  True:
# 		n = n + 2
# 		yield n
# def _not_divisible(n):
# 	return lambda x: x % n > 0 


# def primes():
# 	yield 2
# 	it = _odd_iter()
# 	while  True:
# 		n = next(it)
# 		yield n
# 		it = filter(_not_divisible(n), it)

# for n in primes():
# 	if n < 50:
# 		print (n)
# 	else:
# 		break


# 回数
# def is_palindrome(n):
# 	if n > 9:	
# 	    return str(n) == str(n)[::-1]

# output = filter(is_palindrome, range(1,1000))
# print(list(output))



# 排序算法
# L = [('Bob', 75), ('Adam', 92), ('Bart', 66), ('Lisa', 88)]

# def by_name(t):
# 	return t[:][0]

# L2 = sorted(L, key=by_name)
# print(L2)

# def by_score(t):
# 	return t[:][1]

# L3 = sorted(L, key=by_score, reverse=True)
# print(L3)

# python demo01.py



# 返回函数

# 
# def count():
# 	def function():
# 		pass

# 	fs = []
# 	for i in range(1,4):
# 		def f():
# 			return i*i
# 		fs.append(f)
# 	return fs
# f1, f2, f3 = count()

# print(f1())  # 9
# print(f2())  # 9
# print(f3())  # 9



# def count01():
# 	def f(j):
# 		# def g():
# 		# 	return j*j
# 		lambda j: j*j
# 		# return g
# 	fs = []
# 	for  i in range(1,4):
# 		fs.append(f(i)) # f(i)立刻被执行，因此i的当前值被传入f()
# 	return fs
# f1, f2, f3 = count01()
# print(f1())
# print(f2())
# print(f3())

# squares = []
# for x in range(5):
#     squares.append(lambda n=x: n**2)
#     # print(squares[x])  # 0 1 4 9 16
# print(squares[x]()) #16

# python demo01.py


# 装饰器
# import functools
# def log(text):

# 	def decorator(func):
# 		@functools.wraps(func) # 如果没有这一步 __name__会从原来的'now'变成'wrapper'：
# 		def wrapper(*args, **kw):
# 			print('%s func(),' %(text))
# 			return func(*args, **kw)
# 		return wrapper
# 	return decorator

# @log('execute')
# def now():
# 	print('2017-8-8')
# now()
# print(now.__name__)


# 试题
# import functools
# def log(f):
#     @functools.wraps(f)
#     def wrapper(*args,**kw):
#         print('begin call %s() ' % f.__name__)
#         r = f(*args,**kw)
#         print('end call %s() ' % f.__name__)
#         return r
#     return wrapper
# @log
# def test():
#     print('function content')
# test()
# 
# var _hmt = _hmt || [];
# (function() {
#   var hm = document.createElement("script");
#   hm.src = "//hm.baidu.com/hm.js?940ac302dc9436169f5e98f17aca1589";
#   var s = document.getElementsByTagName("script")[0];  
#   s.parentNode.insertBefore(hm, s);
# })();

# import functools

# def log(*args):
#     text = args[0] if isinstance(args[0],str) else ''
#     def decorator(func):
#         @functools.wraps(func)
#         def wrapper(*args, **kw):
#             print('%s before %s():' % (text, func.__name__))
#             result = func(*args, **kw)
#             print('%s after %s():' % (text, func.__name__))
#             return result
#         return wrapper
#     return decorator if isinstance(args[0],str) else decorator(args[0])

# @log('abs')
# # now = log(now) 等同于 @log
# def test():
#     print('function content')
# test()

# python demo01.py

# 偏函数
# print(int('12345', base=8))
# print(int('12345', base=16))

# int('12345')
# import functools
# int2 = functools.partial(int, base=2)

# print(int2('1000000'))

# import functools
# int('12345')
# int2 = functools.partial(int, base=2)
# print(int2('1000000'))


# 模块作用域
# def _private_1(name):
# 	return 'Hello, %s' % name

# def _private_2(name):
# 	return 'Hi, %s' % name

# def greeting(name):
# 	if len(name) > 3:
# 		return _private_1(name)
# 	else:
# 		return _private_2(name)
# print(greeting('li'))


# 面向对象
# std1 = {'name': 'Michael', 'score': 98}
# std2 = {'name': 'Bob', 'score': 82}

# class Student(object):
	
# 	def __init__(self, name, score):
		
# 		self.name = name
# 		self.score = score

# 	def print_score(self):
# 		print('%s: %s' % (self['name'], self['score']))

# bart = Student('Bart Simpson', 59)
# lisa = Student('Lisa Simpson', 87)
# bart.print_score()
# lisa.print_score()


# python demo01.py


# 类和实例
# class Student(object):
	
# 	def __init__(self, name, score):
# 		self.__name = name
# 		self.__score = score

# 	def print_score(self):
# 		print('%s: %s' %(self.__name, self.__score))

# 	def get_name(self):
# 		print('%s' % self.__name)

# 	def get_grade(self):
# 		if self.score >=90:
# 			return 'A'
# 		elif self.score >=60:
# 			return 'B'
# 		else:
# 			return 'C'
# bart = Student('Bart Simpson', 59)
# bart.get_name()
# bart.__name ='new name'

# # print(bart.print_score())
# print(bart.__name)
# lisa = Student('lisa', 87)
# lisa.print_score()






# 继承和多态
# class Animal(object):
	
# 	def run(self):
# 		print('Animal is running...')

# def readImage(fp):
# 		if hasattr(fp, 'read'):
# 			return readDate(fp)
# 		return None

# 给实例绑定对象
# class Student(object):
# 	name = "Student00"
		
# s = Student()
# print(s.name)
# print(Student.name)
# s.name = 'Michael'
# print(s.name)
# print(Student.name)
# del s.name
# print(s.name)


# python demo01.py

# class Student(object):
# 	pass

# s = Student()
# s.name = 'Michael'
# # print(s.name)

# def set_age(self, age):
# 	self.age = age
	
# from types import MethodType

# s.set_age = MethodType(set_age, s)
# s.set_age(25)			
# print(s.age)

# __slots__

# class Student(object):

# 	__slots__ = ('name', 'age')

# s = Student()
# s.name = 'Mich'
# s.age = 25
# # s.score = 99
# # print(s.name, s.age, s.score)

# class GraStudent(Student):
# 	__slots__ = ('score', 'number')
		
# b = GraStudent()
# # b.ages = 25
# b.age = 28
# # b.scores = 99
# # print(b.ages,b.age, b.scores)
# print(b.ages,b.age)

# class Student01(object):
	# def get_score(self):
 #         return self._score

 #    def set_score(self, value):
 #        if not isinstance(value, int):
 #            raise ValueError('score must be an integer!')
 #        if value < 0 or value > 100:
 #            raise ValueError('score must between 0 ~ 100!')
 #        self._score = value
 	
	# @property
	# def score(self):
	#     return self._score
	# @score.setter
	# def score(self, value):
	# 	if not isinstance(value, int):
 #            raise ValueError('score must be an integer!')
 #        if value < 0 or value > 100:
 #            raise ValueError('score must between 0 ~ 100!')
	#     self._score = value

# class Student(object):

#     @property
#     def score(self):
#         return self._score

#     @score.setter
#     def score(self, value):
#         if not isinstance(value, int):
#             raise ValueError('score must be an integer!')
#         if value < 0 or value > 100:
#             raise ValueError('score must between 0 ~ 100!')
#         self._score = value
# s = Student()
# s.score = -60
# print(s.score)
 
# class Student(object):

#     @property
#     def birth(self):
#         return self._birth

#     @birth.setter
#     def birth(self, value):
#         self._birth = value

#     @property
#     def age(self):
#         return 2015 - self._birth



# class Screen(object):

#     @property
#     def width(self):
#         return self._width
#     @width.setter
#     def width(self,value):
#         self._width=value	
	
#     @property
#     def height(self):
#         return self._height
#     @height.setter
#     def height(self,value):
#         self._height=value
	
#     @property
#     def resolution(self):
#         return self._width*self._height

# s = Screen()
# s.width = 1024
# s.height = 768
# print(s.resolution)
# assert s.resolution == 786432, '1024 * 768 = %d ?' % s.resolution

# python demo01.py

# class Father(object):

# 	def func(self):
# 		print('生父')

# class Laowang(object):

# 	def func(self):
# 		print('老王')

# class StepFather(object):

# 	def func(self):
# 		print('继父')
		
# class Mysterious(Laowang, StepFather,Father):
# 	pass
	
# s = Mysterious()
# s.func()	

# class Student(object):
	
# 	def __init__(self, name):
		
# 		self.name = name
# 	def __str__(self):
# 		return 'Student object (name: %s)' % self.name
# 	__repr__ = __str__
# print(Student('machsel'))

# python demo01.py
#

# class Fib(object):
# 	def __getitem__(self, n):
# 		if isinstance(n, int):
# 			a, b = 1, 1
# 			for x in range(n):
# 				a, b = b, a+b
# 			return a
# 		if isinstance(n, slice):
# 			start = n.start
# 			stop = n.stop
# 			if start is None:
# 				start = 0
# 			a, b = 1, 1
# 			L =[]
# 			for x in range(stop):
# 				if x >= start:
# 					L.append(a)
# 				a, b = b, a+b
# 			return L

# f = Fib()
# print(f[0:5])
# print(f[:10])

# python demo01.py
# class Student(object):

# 	def __init__(self):
		
# 		self.name = 'Michael'
# 	def __getattr__(self, attr):
# 		if attr == 'score':
# 			return 99
# 		raise AttributeError('\'Student\' object has no attribute \'%s\'' % attr)
# s = Student()
# print(s.name)
# print(s.score)
 


# class Chain(object):

#     def __init__(self, path=''):
#         self._path = path

#     def __getattr__(self, path):
#         return Chain('%s/%s' % (self._path, path))

#     def __str__(self):
#         return self._path

#     __repr__ = __str__

# print(Chain().status.user.timeline.list)

# from enum import Enum
# Month = Enum('Month', ('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'))

# for name, member in Month.__members__.items():

# 	print(name, '=>', member, ',', member.value)

# python demo01.py







# 错误处理

# try:
#     print('try...')
#     r = 10 / int('2')
#     print('result:', r)
# except ValueError as e:
#     print('ValueError:', e)
# except ZeroDivisionError as e:
#     print('ZeroDivisionError:', e)
# else:
#     print('no error!')
# finally:
#     print('finally...')
# print('END')

# def foo(s):
# 	return 10 / int(s)

# def bar(s):
# 	return foo(s)*2

# def main():
# 	try:
# 		print(bar('1'))
# 	except Exception as e:
# 		print('Error:', e)
# 	finally:
# 		print('finally...')
# print(main())


# def foo(s):
#     return 10 / int(s)

# def bar(s):
#     return foo(s) * 2

# def main():
#     bar('0')

# main()

# import logging

# def foo(s):
#     return 10 / int(s)

# def bar(s):
#     return foo(s) * 2

# def main():
#     try:
#         bar('0')
#     except Exception as e:
#         logging.exception(e)

# main()
# print('END')


# class FooError(ValueError):
#     pass

# def foo(s):
#     n = int(s)
#     if n==0:
#         raise FooError('invalid value: %s' % s)
#     return 10 / n

# foo('0')


# 调试
# import logging
# logging.basicConfig(level=logging.INFO)

# s = '0'
# n = int(s)
# logging.info('n = %d' % n)
# print(10 / n)

# 读写文件
# f = open('./text.txt', 'r')
# fc = f.read()
# print(fc)

# f.close()



# 写文件

# with open('./text.txt', 'w') as f:
#     f.write('hello lily')

# 读文件
# with open('./text.txt', 'r') as f0:
#     print(f0.read())


# from io import StringIO
# f = StringIO()
# f.write('hello')
# f.write(' ')
# f.write('world!')
# print(f.getvalue())

# # from io import StringIO
# f = StringIO('hello!\nHi\nBye!')
# while True:
# 	s = f.readline()
# 	if s =='':
# 		break
# 	print(s.strip())


# 操作文件和目录
# import os
# print(os.path.splitext(os.path.abspath('.')))

# import os
# from datetime import datetime
# import os

# pwd = os.path.abspath('.')

# print('      Size     Last Modified  Name')
# print('------------------------------------------------------------')

# for f in os.listdir(pwd):
#     fsize = os.path.getsize(f)
#     mtime = datetime.fromtimestamp(os.path.getmtime(f)).strftime('%Y-%m-%d %H:%M')
#     flag = '/' if os.path.isdir(f) else ''
#     print('%10d  %s  %s%s' % (fsize, mtime, f, flag))

# 


# import pickle
# d = dict(name='bob', age=20, score=99)
# f = open('dump.txt', 'wb')

# pickle.dump(d, f)
# f.close()
# print(d)
 

# import pickle
# f = open('dump.txt', 'rb')
# d = pickle.load(f)
# f.close()
# print(d)

import json
json_str = '{"age":20, "score":99, "name":"bob","height":188}'
print(json.loads(json_str))

# python demo01.py