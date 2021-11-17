      google.charts.load('current', {'packages':['treemap']});
      arr_list = [
      ['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'],
      ['Application Categories',    null,                 0,            0],
      ['app',                 'Application Categories',   0,            0],
      ['우회접속',             'app',                      0,         0],
      ['PureVPN',             '우회접속',          0,            0],
      ['VyprVPN',             '우회접속',          0,            0],
      ['Hotsport_Shield',     '우회접속',          0,            0],
      ['ProXPN',              '우회접속',          0,            0],
      ['SecurityKiss',        '우회접속',          0,            0],
      ['OpenVPN',             '우회접속',          0,            0],
      ['Tor',                 '우회접속',          0,            0],
      ['Psiphon',             '우회접속',          0,            0],
      ['UltraSurf',           '우회접속',          0,            0],
      ['Zenmate',             '우회접속',          0,            0],
      ['Browsec',             '우회접속',          0,            0],
      ['Spotflux',            '우회접속',          0,            0],
      ['gom',                 '우회접속',          0,            0],
      ['CyberGhost',          '우회접속',          0,            0],
      ['tunnelbear',          '우회접속',          0,            0],
      ['PirateBrowser',       '우회접속',          0,            0],
      ['surfeasy',            '우회접속',          0,            0],
      ['tunnello',            '우회접속',          0,            0],
      ['just_proxy',          '우회접속',          0,            0],
      ['DotVPN',              '우회접속',          0,            0],
      ['skyzip',              '우회접속',          0,            0],
      ['hola',                '우회접속',          0,            0],
      ['OkayFreedom_VPN',     '우회접속',          0,            0],
      ['Freegate',            '우회접속',          0,            0],
      ['VPN_Unlimited',       '우회접속',          0,            0],
      ['ipvanish',            '우회접속',          0,            0],
      ['torguard',            '우회접속',          0,            0],
      ['privatix',            '우회접속',          0,            0],
      ['freemybrowser',       '우회접속',          0,            0],
      ['Ivacy',               '우회접속',          0,            0],
      ['hide-my-ip',          '우회접속',          0,            0],
      ['Tuxler',              '우회접속',          0,            0],
      ['windscribe',          '우회접속',          0,            0],
      ['whoer',               '우회접속',          0,            0],
      ['unblockus',           '우회접속',          0,            0],
      ['vpnmaster',           '우회접속',          0,            0],
      ['sumrando',            '우회접속',          0,            0],
      ['freevpn',             '우회접속',          0,            0],
      ['spyoff',              '우회접속',          0,            0],
      ['ibvpn',               '우회접속',          0,            0],
      ['blockless',           '우회접속',          0,            0],
      ['ipinator',            '우회접속',          0,            0],
      ['anonymousvpn',        '우회접속',          0,            0],
      ['hideipvpn',           '우회접속',          0,            0],
      ['proxyserver',         '우회접속',          0,            0],
      ['hide.me',             '우회접속',          0,            0],
      ['bolehvpn',            '우회접속',          0,            0],
      ['uppersafe',           '우회접속',          0,            0],
      ['mudfish',             '우회접속',          0,            0],
      ['Proxy_for_Chrome',    '우회접속',          0,            0],
      ['anonymoX',            '우회접속',          0,            0],
      ['strongvpn',           '우회접속',          0,            0],
      ['ivpn',                '우회접속',          0,            0],
      ['VPNPRO',              '우회접속',          0,            0],
      ['THEGREENBOW',         '우회접속',          0,            0],
      ['hidemanVPN',          '우회접속',          0,            0],
      ['smartvpn',            '우회접속',          0,            0],
      ['ZPN',                 '우회접속',          0,            0],
      ['vpnreactor',          '우회접속',          0,            0],
      ['vpn.ac',              '우회접속',          0,            0],
      ['hoxx_vpn',            '우회접속',          0,            0],
      ['safervpn',            '우회접속',          0,            0],
      ['jumboproxy',          '우회접속',          0,            0],
      ['청준IP',              '우회접속',          0,            0],
      ['우회접속프로그램_기타', '우회접속',          0,            0],

      ['P2P',                 'app',              0,            0],
      ['Orangefile',          'P2P',             0,            0],
      ['Fileguri',            'P2P',             0,            0],
      ['Filenara',            'P2P',             0,            0],
      ['Dbgo',                'P2P',             0,            0],
      ['당나귀',               'P2P',            0,            0],
      ['엔피',                 'P2P',            0,            0],
      ['크레이지파일',          'P2P',            0,            0],
      ['싼타25',               'P2P',            0,            0],
      ['로또파일',             'P2P',            0,            0],
      ['송사리',               'P2P',            0,            0],
      ['무비알지',             'P2P',            0,            0],
      ['겜플',                 'P2P',            0,            0],
      ['QQdownload',           'P2P',            0,            0],
      ['XunLei',               'P2P',            0,            0],
      ['티카페',               'P2P',            0,            0],
      ['TVZIL',               'P2P',            0,            0],
      ['오라디스크',           'P2P',            0,            0],
      ['konanlink',           'P2P',            0,            0],
      ['플라잉파일',           'P2P',            0,            0],
      ['P2P프로그램_기타',      'P2P',           0,            0]
      ];
      
      function drawChart() {
      	var data = google.visualization.arrayToDataTable(arr_list);
      	tree = new google.visualization.TreeMap(document.getElementById('chart_div'));

      	var options = {
      		minColor: '#b7be7e',
      		midColor: '#f7d374',
      		maxColor: '#c25b5d',
      		showScale: true,
      		generateTooltip: showStaticTooltip,

      		maxDepth: 3,

      		title: 'Title: Application Categories',
      		
      	};

      	tree.draw(data, options);

      	function showStaticTooltip(row, size, value) {
      		return '<div style="background-color: rgba(255, 255, 255, 0.5); padding:10px; border-style:solid;">' +
      		'<span style="font-family:Courier"><b>' + data.getValue(row, 0) + '</b>, ' + data.getValue(row, 1) + ', ' + data.getValue(row, 2) + ', ' + data.getValue(row, 3) + '<br>' + data.getColumnLabel(2) + ' (total value of this cell and its children): ' + size + '<br>' + data.getColumnLabel(3) + ': ' + value + ' </div>';
      	}
      }

      var time = 0;

      function sleep(ms) {
      	return new Promise(resolve=>setTimeout(resolve, ms));
      }

      function rand(min, max){
      	while(true){
      		ran = Math.floor(Math.random() * (max - min)) + min;
      		if(getRisk(ran) != 999)
      			return ran;
      	}
      }

      function getIndex(id){ 
      	for(var i = 1; i < arr_list.length; i++ )
      		if(arr_list[i][0] == id)
      			return i;
      	}

      	function isEmpty(index){
      		return (getSize(index) == 0) ? true : false;
      	}

      	function getSize(index){
      		return arr_list[index][2];
      	}

      	function setSize(index, value){
      		arr_list[index][2] = value;
      	}

      	function getRisk(index){
      		return arr_list[index][3];
      	}

      	function setRisk(index){
      		arr_list[index][3] = Math.floor(Math.random() * 5) + 1;
      	}

      	function reset(){
      		for(var i = 0 ; i < arr_list.length; i++)
      			if(getSize(i) > 0)
      				setSize(i, 0);
      		}

      		playAlert = setInterval(function() {
      			ran_id = arr_list[rand(1, arr_list.length)][0];

      			index = getIndex(ran_id);

      			if(isEmpty(index))
      				setSize(index, 1);
      			else
      				setSize(index, getSize(index)+1);

      			setRisk(index);

      			time = time + 0.2;

      			if(parseInt(time) > 2){
      				google.charts.setOnLoadCallback(drawChart());
      				reset();
      				time = 0;
      			}
      		}, 200);