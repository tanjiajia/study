#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: Administrator
# @Date:   2017-08-16 14:21:46
# @Last Modified by:   Administrator
# @Last Modified time: 2017-08-16 16:33:56

# 测试用例

def fact(n):
    '''
    >>> fact(1)
    1
    >>> fact(2)
    2
    >>> fact(10)
    3628800
    >>> fact(0)
    Traceback (most recent call last):
        ...
    ValueError
    >>> fact('a')
    Traceback (most recent call last):
        ...
    TypeError: '<' not supported between instances of 'str' and 'int'
    '''

    if n < 1:
        raise ValueError()
    if n == 1:
        return 1
    return n * fact(n - 1)

if __name__ == '__main__':
    import doctest
    doctest.testmod()

print(fact(5))