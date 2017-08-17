# -*- coding: utf-8 -*-
# @Author: Administrator
# @Date:   2017-08-15 16:33:38
# @Last Modified by:   Administrator
# @Last Modified time: 2017-08-15 17:17:00


# from urllib import request

# with request.urlopen('https://api.douban.com/v2/book/2129650') as f:
#     data = f.read()
#     print('Status:', f.status, f.reason)
#     for k, v in f.getheaders():
#         print('%s: %s' % (k, v))
#     print('Data:', data.decode('utf-8'))


# 模拟iPhone 6去请求豆瓣首页
# from urllib import request

# req = request.Request('http://www.douban.com/')
# req.add_header('User-Agent', 'Mozilla/6.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/8.0 Mobile/10A5376e Safari/8536.25')
# with request.urlopen(req) as f:
#     print('Status:', f.status, f.reason)
#     for k, v in f.getheaders():
#         print('%s: %s' % (k, v))
#     print('Data:', f.read().decode('utf-8'))


from urllib import request

if __name__ == "__main__":
    response = request.urlopen("http://www.baidu.com/")
    html = response.read()
    # html = html.decode("utf-8")
    print(html)

# from urllib import request
# import chardet

# if __name__ == "__main__":
#     response = request.urlopen("http://fanyi.baidu.com/")
#     html = response.read()
#     charset = chardet.detect(html)
#     print(charset)