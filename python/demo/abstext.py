#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: Administrator
# @Date:   2017-08-01 18:10:03
# @Last Modified by:   Administrator
# @Last Modified time: 2017-08-09 11:15:20

def my_abs(x):
    if not isinstance(x, (int, float)):
        raise TypeError('bad operand type')
    if x >= 0:
        return x
    else:
        return -x