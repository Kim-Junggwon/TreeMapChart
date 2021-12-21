import datetime
import pymysql
import random
import time

conn = pymysql.connect(host='localhost', user='root', password='password', db='monitor', charset='utf8')
cursor = conn.cursor()



data = [
    
    ##################################### ��ȸ����
    
    ['www.purevpn.com', 'PureVPN'],
    ['purevpn.com', 'PureVPN'],
    ['purevpn.org', 'PureVPN'],
    ['purevpn.h1.proxy.com', 'PureVPN'],
    
    ['www.ultrasurf.com', 'UltraSurf'],
    ['ultrasurf.com', 'UltraSurf'],
    ['www.ultrasurf.org', 'UltraSurf'],
    ['www.ultrasurf-s1-he.com', 'UltraSurf'],

    ['www.browsec.com', 'Browsec'],
    ['browsec.com', 'Browsec'],
    ['download.browsec.com', 'Browsec'],
    
    ['isdspeed.qq.com', 'QQdownload'],
    ['ct.duba.net', 'QQdownload'],
    ['dlied6.qq.com', 'QQdownload'],
    ['isdspeed.qq.com', 'QQdownload'],
    ['isdspeed.qq.com', 'QQdownload'],
    
    #['www.crazyfile.co.kr', 'ũ����������'],
    #['crazyfile.tomatopang.net', 'ũ����������'],

    #####################################  P2P
    
    ['Filenara.com', 'Filenara'],
    ['www.Filenara.com', 'Filenara'],
    
    ['www.fileguri.com', 'Fileguri'],
    ['fileguri.com', 'Fileguri'],
    ['download.fileguri.com', 'Fileguri'],
    ['fileguri-login.com', 'Fileguri'],
    ['fileguri-auth.com', 'Fileguri'],
    
    ['www.Orangefile.com', 'Orangefile'],
    ['Orangefile.com', 'Orangefile'],
    ['down-Orangefile.com', 'Orangefile'],
    ['Orangefile.org', 'Orangefile'],

    ###################################### ��������
    
    
    ['rsupport.nate.com', 'NateOn_Remote'],

    ['www.radmin.com', 'Radmin'],
    ['radmin.co.kr', 'Radmin'],
    ['radmin.com', 'Radmin'],
    ['download.radmin.com', 'Radmin'],
    
    ['master9.teamviewer.com', 'TeamViewer'],
    ['download.teamviewer.com', 'TeamViewer'],
    ['178.255.153.13', 'TeamViewer'],
    ['cdn01.teamviewer.com', 'TeamViewer'],
    ['meeting.teamviewer.com', 'TeamViewer'],
    ['master1.teamviewer.com', 'TeamViewer'],
    ['master4.teamviewer.com', 'TeamViewer'],
    
    ['logmeincdn.http.internapcdn.net', 'LogMeIn'],
    ['secure.logmeinrescue.com', 'LogMeIn'],
    ['identity.join.me', 'LogMeIn'],
    ['help.join.me', 'LogMeIn'],
    ['store.logmein.com', 'LogMeIn'],
    
    ['www.zook.co.kr', 'Zook'],
    ['zook.co.kr', 'Zook'],
    ['download.zook.co.kr', 'Zook'],
    
    ['startsupport.com', 'Remotecall'],
    ['lge.startsupport.com', 'Remotecall'],
    ['www1.startsupport.com', 'Remotecall'],
    ['update1.startsupport.com', 'Remotecall'],

    ######################################## �̺з�
    
    #['indergroeun.67.com', '�̺з�'],
    #['soundgreat.org', '�̺з�'],
    #['132.45.23.2', '�̺з�'],
    #['redoop.gg', '�̺з�'],
    #['www.dehufh2dm.co.kr', '�̺з�'],
    #['darkttworld.org', '�̺з�']
];


#for i in range(50):
while(1):
    now = datetime.datetime.now()
    ran_index = random.randrange(0,51)               #������ �ε��� ����
    ran_id = data[ran_index][0]                      #������ �ε����� ���� ȣ��Ʈ ID
    ran_cate = data[ran_index][1]                    #������ �ε����� ���� ī�װ� ID
    ran_time =  float(random.randrange(1,10))/10     #������ �ð�
    time.sleep(ran_time)                             #������ �ð����� sleep
    
    print(str(now) + '\t l ' + ran_cate + '\t l ' + ran_id)
    
    #sql = 'insert into traffic(DATE, CATEGORY, HOST) values (\'' + str(now) + '\', \'' + ran_cate +'\', \'' + ran_id +'\');'
    sql = 'insert into traffic(DATE, CATEGORY, HOST) values (now(), \'' + ran_cate +'\', \'' + ran_id +'\');'
    
    cursor.execute(sql)
    conn.commit()
    
conn.close()

