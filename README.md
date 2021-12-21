# Tree Map Chart
실시간으로 발생하는 트랜잭션을 분석하여 트리맵 차트로 나타낸다.



![HTML](https://img.shields.io/badge/-html-red)
![Javascript](https://img.shields.io/badge/-Javascript-yellow)
![Python](https://img.shields.io/badge/-Python-9cf)
![node.js](https://img.shields.io/badge/node.js-v16.13-brightgreen)
![npm](https://img.shields.io/badge/npm-v8.1.0-green)
![MySQL](https://img.shields.io/badge/MySQL-v5.7-blue)   

## 참여 인원
|김중권|유병학|
|-----|-----|
|- Express(node) 서버 환경 구축(server.js) <br> - DB연동 및 호출 쿼리 코드 작성(main.js) <br> - 구글 차트 라이브러리 연동 및 데이터 호출 코드 작성(index.ejs) | - MySql 테이블 생성 및 초기화 코드 작성(DateDBsetting.py) <br> - DB접속 및 랜덤한 데이터 생성 코드 작성(createData.py)


## Installation

### MySQL
[Download Link](https://downloads.mysql.com/archives/installer/)


### node.js
[Download Link](https://nodejs.org/en/download/)

### npm

- #### node.js 설치 후 버전 확인
```bash
$ npm -v
$ node -v
```

- #### default 값으로 package.json 생성
```bash
$ npm init -y
```

- #### express, mysql 패키지 설치  
[--save]: package.json 파일에 dependencies 리스트 추가
```bash
$ npm install express --save
$ npm install mysql --save
```

- #### nodemon
소스 수정시 자동으로 서버를 재시작해주는 패키지  
Command Line에서 명령어를 사용할 것이기 때문에 -g 옵션을 붙여서 글로벌로 설치
```bash
$ npm install nodemon -g
```
- #### nodemon 사용법  
서버를 가동하는 코드를 nodemon 명령어 뒤에 입력한다
```bash
$ nodemon server.js
```


## Sample Image
<p align="center">![chart](https://user-images.githubusercontent.com/94525599/146855340-4d5f3ff1-1848-4bbc-b46c-93238d3c03de.gif)</p>   
> 2초마다 지난 5분간의 데이터를 트리맵 차트로 그려주는 예시(gif)   
```sql
 SELECT * FROM [Table Name] WHERE DATE > NOW() - INTERVAL 5 MINUTE
```   
![createData](https://user-images.githubusercontent.com/94525599/146854755-7391267b-2820-4559-a5ec-6ab7f118107a.gif)   
> 0.1초에서 0.9초 사이의 랜덤한 시간에 데이터가 생성됨(gif)   

![image](https://user-images.githubusercontent.com/94525599/146855690-559ecd56-feb2-4744-a5a4-2b304a83c6f4.png)   
> node 서버에서 2초마다 DB 데이터를 호출함(image)

