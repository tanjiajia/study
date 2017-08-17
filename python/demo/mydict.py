#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: Administrator
# @Date:   2017-08-16 14:13:29
# @Last Modified by:   Administrator
# @Last Modified time: 2017-08-16 14:36:54




class Dict(dict):

	def __init__(self, **kw):
		super().__init__(**kw)
		# self.arg = arg
	def __getattr__(self, key):
		try:
			return self[key]
		except keyError:
			raise AttributeError(r"'Dict' object has no attribute '%s'" % key)
	def __setattr__(self, key, value):
		self[key] = value
		