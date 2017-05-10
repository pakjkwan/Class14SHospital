function createHorList(arr,type){
	var list='<div class="btn-group" role="group" aria-label="...">';
	$.each(arr,function(i,j){
		list+='<button id="list-button-"'+i+' type="button" class="btn btn-'+type+'">'+arr[i]+'</button>';
	});
	list+='</div>';
	return list;
}
function createDivAlert(x){ // alert-danger
	return $('<div class="alert '+x+'" role="alert">example</div>');
}
function panelTable(jason,txt,type){
	
    var x = 
		'<div class="panel panel-'+type+'">'
		+'<div class="panel-heading">행렬</div>'
		+'<table id="table">'
		+'<tr style="width:250px">'
		+'<th colspan="5">'+txt+'</th>'
		+'</tr>'
		+'<tbody>';
		$.each(jason, function(i,j){
			x +=
				'<tr>'
				+'<td style="width:20%">'+j.a+'</td>'
				+'<td style="width:20%">'+j.b+'</td>'
				+'<td style="width:20%">'+j.c+'</td>'
				+'<td style="width:20%">'+j.d+'</td>'
				+'<td style="width:20%">'+j.e+'</td>'
				+'</tr>';
		});
		
		x += '</tbody></table>'
    
	return x;
}
function createTable1By2(){
	return '<table id="table" style="width:800px;height:300px;border-collapse: collapse;border: 1px solid black;margin:0 auto">'
	+	'<tr style="border: 1px solid black;">'
	+		'<td id="tableLeft" style="width: 50%;border: 1px solid black;"></td>'
	+		'<td id="tableRight" style="width: 50%;border: 1px solid black;"></td>'
	+	'</tr>'
	+'</table>';
}
function createSeriesMenu(){
return '<ul class="list-group">'
+	'<li id="aSeries" class="list-group-item"><a href="#">등차수열 합</a></li>'
+	'<li id="swSeries" class="list-group-item"><a href="#">스위치수열 합</a></li>'
+	'<li id="dSeries" class="list-group-item"><a href="#">계차수열 합</a></li>'
+	'<li id="factorial" class="list-group-item"><a href="#">팩토리얼수열 합</a></li>'
+	'<li id="fibonacci" class="list-group-item"><a href="#">피보나치수열 합</a></li>'
+'</ul>';
}
function createSortMenu(){
	return [{id:'selectSort',txt:'선택정렬'},
		{id:'bubbleSort',txt:'버블정렬'},
		{id:'insertSort',txt:'삽입정렬'},
		{id:'ranking',txt:'석차구하기'},
		{id:'binSearch',txt:'이분검색'},
		{id:'merge',txt:'병합'},
		{id:'stack',txt:'스택'}];
}
function createMatrixMenu(){
	return [{id:'basic',txt:'기본5X5'},
		{id:'ziazag',txt:'지그재그'},
		{id:'diamond',txt:'다이아몬드'},
		{id:'sandGlass',txt:'모래시계'},
		{id:'snail',txt:'달팽이'},
		{id:'magicSquare',txt:'마방진'}];
}
function createMathMenu(){
	return [{id:'determinePrime',txt:'소수판별'},
		{id:'primeSum',txt:'소수의합'},
		{id:'primeCount',txt:'소수의개수'},
		{id:'lcmGcd',txt:'최대최소공배수'},
		{id:'euclid',txt:'유클리드 호제법'},
		{id:'fatorization',txt:'약수구하기'},
		{id:'primeFactor',txt:'소인수분해'},
		{id:'multiSum',txt:'배수의 합'},
		{id:'approx',txt:'근사값 구하기'}];
}
function createATag(x,y){
	return $('<a href="#" id="'+x+'" class="btn '+y+'" role="button">example</a>');
}
function createButton(x,y){
	return $('<button type="button" id="'+x+'" class="btn '+y+'">example</button>');
}
function createInputText(x,y){ // general use form-control
	return $('<input type="text" id="'+x+'" class="'+y+'" placeholder="example" aria-describedby="basic-addon1">');
}
function createSearchWindowOnArticles(){
	return'<div id="search-window" style="margin: 0 auto;width:300px;margin-bottom:30px;">'
		+'<select id="search-option" name="search-option">'
		+	'<option value="writerId">작성자</option>'
		+   '<option value="articleTitle">제목</option>'
		+'</select>'
		+'<input type="text" id="search-keyword"/>'
		+'<input id="btn-search" type="button" value="검색"/></div>';
		
}
function createAlgorithmArrayTable(){
	return '<div class="row">'
    +'<div class="col-sm-12">'
    +'<div class="panel colourable">'
    +'<div class="panel-heading">'
    +'<span class="panel-title">IDC 2D Map</span>'
    +'</div>'
    +'<div class="panel-body">'
    +    '<div class="init-table">'
    +        '<span>Make Map</span>'
    +        '<input type="text" id="mRow" placeholder="가로 행">'
    +        '<input type="text" id="mCol" placeholder="세로 열">'
    +        '<button type="submit" class="tc-btn btn btn-default">Create</button>'
    +    '</div>'
    +    '<div class="control-box" style="display: none;">'
    +        '<span class="btn mRow-add">가로 행 추가 <i class="fa fa-plus"></i></span>'
    +        '<span class="btn mRow-del">가로 행 제거 <i class="fa fa-minus"></i></span>'
    +        '<span class="btn mCol-add">세로 열 추가 <i class="fa fa-plus"></i></span>'
    +        '<span class="btn mCol-del">세로 열 제거 <i class="fa fa-minus"></i></span>'
    +    '</div>'
    +    '<div class="show-map text-center" style="padding-top: 15px;"><span>Not exist map. first, create map.</span></div>'
    +'</div>'
    +'</div>'
    +'</div>'
    +'</div>';
}
function createAlgorithmSeriesMenu(){
	return '<ul class="list-group">'
	+	'<li id="aSeries" class="list-group-item"><a href="#">등차수열 합</a></li>'
	+	'<li id="swSeries" class="list-group-item"><a href="#">스위치수열 합</a></li>'
	+	'<li id="dSeries" class="list-group-item"><a href="#">계차수열 합</a></li>'
	+	'<li id="factorial" class="list-group-item"><a href="#">팩토리얼수열 합</a></li>'
	+	'<li id="fibonacci" class="list-group-item"><a href="#">피보나치수열 합</a></li>'
	+'</ul>';
}
function createMemberMenu(){
	return '<ul class="list-group">'
	+	'<li id="encap" class="list-group-item"><a href="#">캡슐화</a></li>'
	+	'<li id="inherit" class="list-group-item"><a href="#">상 속</a></li>'
	+	'<li id="poly" class="list-group-item"><a href="#">다형성</a></li>'
	+'</ul>';
}
function createPatientGnb(){
	
	   var gnb = '<div style="position: relative; "><ul id="app-gnb" class="app-gnb" >';
	   var arr = ['home/홈으로','mypage/MY PAGE','treatlist/나의 진료기록','board/게시판','customer/고객참여마당','main/로그아웃'];
	   for(var i=0; i<6; i++){
		   gnb+='<li><a href="'+arr[i].split("/")[0]+'">'+arr[i].split("/")[1]+'</a></li>'   
	   }
	   gnb += '</ul></div>';
		return gnb;
}
function createPatientDetail(){
	var x='<div class="app-patient-detail">'
	+     '<table id="app-table" class="app-table" >'
	+          '<tr style="text-align: left;">'
	+                 '<td colspan="5"><h3> 마이페이지</h3></td>'
	+           '</tr><tr>'
	+                '<td style="width: 100px" rowspan="5"><img  /></td>'
	+                '<td style="width: 100px" >이름</td>'
	+                 '<td id="name" style="width: 150px"></td>'
	+                 '<td style="width: 100px">직업</td>'
	+                 '<td id="job" style="width: 150px"></td></tr>'
	+ 			'<tr><td>생년월일</td>'
	+                 '<td id="jumin"></td>'
	+                 '<td>키</td>'
	+                 '<td>170cm </td></tr> <tr>'
	+                 '<td>성별</td>'
	+                 '<td id="gen"></td>'
	+                 '<td>나이/몸무게</td>'
	+                 '<td id="age">  / 80kg </td>'
	+           '</tr>'
	+           '<tr>'
	+                 '<td>전화번호</td>'
	+                 '<td id="phone"></td>'
	+                 '<td>이메일</td>'
	+                 '<td id="email"></td>'
	+           '</tr>'
	+           '<tr>'
	+                 '<td>주소</td>'
	+                 '<td id="addr"></td>'
	+                 '<td>주치의</td>'
	+                 '<td>'
	+					'<a id="docID" onclick="docDetail()" href="#"> 한석규</a>'
	+                 '</td>'
	+           '</tr>'
	+     '</table>'
	+     '<input type="button" style="margin-top:20px" id="btn-default" class="btn btn-default" value="차트보기"/>'
	+'</div>';
	return x;
}
function createChart(){
	var context=app.session.getContextPath();
	var image=app.session.getImagePath();
	$("<div></div>").attr('id','div-chart').appendTo('#wrapper');
	$('#div-chart').css('width','80%').css('margin-top','50px').addClass('app-margin-center');
	$("<div></div>").attr('id','app-chart-top').appendTo('#div-chart');
	
	var table='<table>'
		+'<tr><td rowspan="5" style="width:100px">환<br/>자<br/>정<br/>보</td><td class="app-chart-table-elem">이름</td><td id="name" colspan="3" class="app-chart-top-table"></td><td class="app-chart-table-elem">나이</td><td class="app-chart-top-table"></td></tr>'
		+'<tr><td class="app-chart-table-elem">생년월일</td><td class="app-chart-top-table"></td><td class="app-chart-col-table">키</td><td class="app-chart-top-table"></td><td class="app-chart-table-elem">직업</td><td class="app-chart-top-table"></td></tr>'       
		+'<tr><td class="app-chart-table-elem">성별</td><td colspan="3" class="app-chart-top-table"></td><td class="app-chart-table-elem">몸무게</td><td class="app-chart-top-table"></td></tr>'
	    +'<tr><td class="app-chart-table-elem">전화번호</td><td colspan="3" class="app-chart-top-table"></td><td class="app-chart-table-elem">혈액형</td><td class="app-chart-top-table"></td></tr>'
	    +'<tr><td class="app-chart-table-elem">주소</td><td colspan="3" class="app-chart-top-table"></td><td class="app-chart-table-elem">주치의</td><td class="app-chart-top-table"></td></tr>'
		+'</table>';			 
	$(table).attr('id','app-chart-top-table').appendTo('#app-chart-top');
	$('#app-chart-top-table').css('width','800px');
	$('#app-chart-top').addClass('app-chart-top').css('text-align','center');
	$("<div></div>").attr('id','app-chart-center').appendTo('#app-chart-top');
	$('#app-chart-center').addClass('app-chart-center');
	var fileUpload=
	'<form id="form" name="form" '
	+	'action="'+context+'/post/chart/image" enctype="multipart/form-data" >'
	+'<input type="file" id="file" name="file" />'
	+'<input type="submit" id="btn-file-upload" value="파일업로드">'
	+'</form>';
	$('#app-chart-center').html(
		'<div class="app-chart-center-center">처방전'+
	        '<br/>'+
	        '<img src="'+image+'/default-profile.jpg" style="width:200px; height:200px;float: left;"/>'+
	    '</div>	'+fileUpload);
	$('#form').css('margin-top','20px');
}
function createArticlesOnPage(){
	return'<table id="articles-on-page" class="table-condensed"><thead>'
		+'<tr>'
		+'<td id="the-number-of-articles" colspan="5">총게시글수: </td>'
		+'</tr>'
		+'<tr>'
		+'<th>번호</th>'
		+'<th>제목</th>'
		+'<th>작성자</th>'
		+'<th>날짜</th>'
		+'<th>조회수</th>'
		+'</tr></thead><tbody></tbody></table>';
		
}
function createPagination(){
	return'<nav id="pagination" aria-label="Page navigation" align="center"><ul class="pagination"></ul></nav></div></div>';
}