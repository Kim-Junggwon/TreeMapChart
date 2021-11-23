import pymysql
import random

conn = pymysql.connect(host='localhost', user='root', password='password', db='monitor', charset='utf8')
cursor = conn.cursor()


sql = 'DROP TABLE TRAFFIC'
cursor.execute(sql)
conn.commit()


sql = '''
CREATE TABLE TRAFFIC(
date DATETIME,
category VARCHAR(50),
host VARCHAR(50)
);'''

cursor.execute(sql)
conn.commit()

conn.close()
