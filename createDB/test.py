# -*- coding: cp949 -*-
import datetime
import pymysql
import random
import time

conn = pymysql.connect(host='localhost', user='root', password='password', db='monitor', charset='utf8')
cursor = conn.cursor()



data = [
    ['www.purevpn.com', 'PureVPN'],
    ['purevpn.com', 'PureVPN'],
    ['purevpn.org', 'PureVPN'],
    ['purevpn.h1.proxy.com', 'PureVPN'],
    ['www.ultrasurf.com', 'UltraSurf'],
    ['ultrasurf.com', 'UltraSurf'],
    ['www.ultrasurf.org', 'UltraSurf'],
    ['www.ultrasurf-s1-he.com', 'UltraSurf'],
    #['www.die22.com', '웹변조사이트'],
    #['wmdo.com', '웹변조사이트'],
    #['ggope3dl.org', '웹변조사이트'],
    ['Filenara.com', 'Filenara'],
    ['www.Filenara.com', 'Filenara'],
    ['www.fileguri.com', 'Fileguri'],
    ['fileguri.com', 'Fileguri'],
    ['download.fileguri.com', 'Fileguri'],
    ['fileguri-login.com', 'Fileguri'],
    ['fileguri-auth.com', 'Fileguri']
];




for i in range(50):
    now = datetime.datetime.now()
    ran_index = random.randrange(0,15)      #랜덤한 인덱스 생성
    ran_id = data[ran_index][0]             #랜덤한 인덱스를 통한 호스트 ID
    ran_cate = data[ran_index][1]           #랜덤한 인덱스를 통한 카테고리 ID
    #ran_time =  random.randrange(0,3)/2     #랜덤한 시간
    time.sleep(1)                    #랜덤한 시간마다 sleep
    
    print(str(now) + '\t l ' + ran_cate + '\t l ' + ran_id)
    
    sql = 'insert into traffic(date, category, host) values (\'' + str(now) + '\', \'' + ran_cate +'\', \'' + ran_id +'\');'
    
    cursor.execute(sql)
    conn.commit()
    
conn.close()

