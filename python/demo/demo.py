#!/usr/bin/env python3
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



# 返回多个值
import math
def move(x, y, step, angle=0):
 	nx = x+step*math.cos(angle)
 	ny = y-step*math.sin(angle)
 	return nx, ny
x, y = move(100, 100, 60, math.pi / 6)
print(x, y)