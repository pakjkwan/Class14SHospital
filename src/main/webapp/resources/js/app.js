var app=app || {};
app.context=(function(){
	var wrapper = app.component.wrapper();
	return {
		init:function(){
			alert('aaa');
			app.algorithm.series();
			wrapper.empty();  
			app.component.inputText('inputText').attr('placeholder','이 름').appendTo(app.component.wrapper);
			app.component.aButton('aButton','btn-primary').html('CLICK ME').appendTo(app.component.wrapper).on('click',function(){
				var name=$('#inputText').val();
				app.component.wrapper.empty();
				app.component.divAlert('alert-danger').html('Hello '+name+' !!').appendTo(app.component.wrapper);
			});
			
		}
	};
	
})();
app.component=(function(){
	return {
		body : $('#body'),
		wrapper : function(){
			return $('#wrapper');
		},
		div : function(id){
			return $(id);
		},
		aButton : function(id,type){
			return $('<a href="#" id="'+id+'" class="btn '+type+'" role="button">example</a>');
		},
		bButton : function(){
			return $('<button id="bButton" type="button" class="btn btn-default">example</button>');
		},
		inputText : function(id){
			return $('<input id="'+id+'" type="text" class="form-control" placeholder="example" aria-describedby="basic-addon1">');
		},
		divAlert : function(type){ // alert-danger
			return $('<div class="alert '+type+'" role="alert">example</div>');
		},
		table : function(){
			return '<table id="table" style="width:800px;height:300px;border-collapse: collapse;border: 1px solid black;margin:0 auto">'
			+	'<tr style="border: 1px solid black;">'
			+		'<td id="tableLeft" style="width: 50%;border: 1px solid black;"></td>'
			+		'<td id="tableRight" style="width: 50%;border: 1px solid black;"></td>'
			+	'</tr>'
			+'</table>';
		},
		seriesMenu : function(){
			return '<ul class="list-group">'
			+	'<li id="aSeries" class="list-group-item"><a href="#">등차수열 합</a></li>'
			+	'<li id="swSeries" class="list-group-item"><a href="#">스위치수열 합</a></li>'
			+	'<li id="dSeries" class="list-group-item"><a href="#">계차수열 합</a></li>'
			+	'<li id="factorial" class="list-group-item"><a href="#">팩토리얼</a></li>'
			+	'<li id="fibonacci" class="list-group-item"><a href="#">피보나치수열 합</a></li>'
			+'</ul>';
		},
		oopMenu : function(){
			return 
			'<ul class="list-group">'
			+	'<li id="encap" class="list-group-item"><a href="#">캡슐화</a></li>'
			+	'<li id="inherit" class="list-group-item"><a href="#">상 속</a></li>'
			+	'<li id="poly" class="list-group-item"><a href="#">다형성</a></li>'
			+'</ul>';
		}
		
	};
})();
app.algorithm=(function(){
	var aSeries = function(start,limit,diff){
		var start=start*1,limit=limit*1,diff=diff*1;
		var sum=0;
		var rs="";
		var i=start;
		while(i<=limit){
			rs+=(i+diff>limit)?i+"=":i+"+";
			sum+=i;
			i+=diff;
		}
		return rs+sum;
	};
	var wrapper = app.component.wrapper();
	return {
		aSeries : aSeries,
		series : function(){
			wrapper.empty();
			$('#series').on('click',function(){
				alert('#series...');
				wrapper.empty();
				wrapper.append(
						'<table id="table" style="width:800px;height:300px;border-collapse: collapse;border: 1px solid black;margin:0 auto">'
						+	'<tr style="border: 1px solid black;">'
						+		'<td id="tableLeft" style="width: 50%;border: 1px solid black;"></td>'
						+		'<td id="tableRight" style="width: 50%;border: 1px solid black;"></td>'
						+	'</tr>'
						+'</table>'		
				
				);
				$('#tableLeft').html(app.component.seriesMenu());
				var tableRight=$('#tableRight');
				app.component.inputText('inputText').attr('placeholder','시작값 한계값 공차(공백으로 구분)입력').appendTo(tableRight);
				app.component.aButton('aButton','btn-primary').html('등차수열의 합').appendTo(tableRight)
					.css('margin','10px auto')
					.on('click',function(){
						var inputVal=$('#inputText').val();
						console.log('inputVal:'+inputVal);
						var arr=inputVal.split(' ');
						var start=arr[0];
						var limit=arr[1];
						var diff=arr[2];
						console.log('start:'+start+',limit:'+limit+',diff:'+diff);
						app.component.divAlert('alert-danger').html(app.algorithm.aSeries(start,limit,diff)).appendTo(tableRight);
				});
				$('#aSeries').on(function(){
					app.component.inputText('inputText').attr('placeholder','시작값 한계값(공백으로 구분)입력 ').appendTo(tableRight);
					app.component.aButton('aButton','btn-primary').html('등차수열의 합').appendTo(tableRight)
						.css('margin','10px auto')
						.on('click',function(){
						var i=$('#inputText').val();
						var j=val.split(' ');
						
						var k=arr[0];
						var l=arr[1];
						console.log('k:'+k+',l:'+l);
						app.component.divAlert('alert-danger').html(k+'부터'+l+'까지 등차수열의 합은'+aSeries(k,l)+'입니다.').appendTo(tableRight);
					});
				});
				$('#swSeries').on(function(){
					app.component.inputText('inputText').attr('placeholder','limit').appendTo(tableRight);
					app.component.aButton('aButton','btn-primary').html('스위치수열의 합').appendTo(tableRight)
						.css('margin','10px auto')
						.on('click',function(){
						var limit=$('#inputText').val();
						app.component.divAlert('alert-danger').html('1부터'+limit+'스위치수열의 합은'+aSeries(limit)+'입니다.').appendTo(tableRight);
					});
				});
				$('#dSeries').on(function(){});
				$('#factorial').on(function(){});
				$('#fibonacci').on(function(){});
				
			});
		},
		arr : function(){},
		matrix : function(){},
		math : function(){},
		appl : function(){}
	};
})();
app.oop=(function(){
	return {
		encap : function(){
			$('#encap').on('click',function(){
				app.component.wrapper.empty();
				app.component.wrapper.append(app.component.table());
				$('#tableLeft').html(app.component.oopMenu());
				var tableRight=$('#tableRight');
				app.component.inputText('inputText').attr('placeholder','이름 나이 성별 직업(공백으로 구분)입력').appendTo(tableRight);
				app.component.aButton('aButton','btn-primary').html('스펙보기').appendTo(tableRight)
					.css('margin','10px auto')
					.on('click',function(){
						var inputVal=$('#inputText').val();
						var arr=inputVal.split(' ');
						console.log(inputVal);
						app.person.setName(arr[0]);
						app.person.setAge(arr[1]);
						app.person.setGender(arr[2]);
						app.person.setJob(arr[3]);
						console.log(app.person);
						var spec='<h5>'+app.person.toString()+'</h5>';
						app.component.divAlert('alert-danger').html(spec).appendTo(tableRight);
				});
			});
		},
		inherit : function(){},
		poly : function(){}
	};
})();







/*
  알고리즘 클래스 
*/

function aSequence(i){
	var j=1,k='';
	for(;j<=i;j++){
		k+=j+'+';
	}
	return k;
}
function swSeries(limit){
	var sum=0;
	
	return sum;
}
function dSeries(limit){
	var sum=0;
	
	return sum;
}
function factorial(limit){
	var sum=0;
	
	return sum;
}
function fibonacci(limit){
	var sum=0;
	
	
	return sum;
}
app.person=(function() { 
	var _name,_age,_gender,_job;
	return {
		setName : function(name){this._name=name;},
		setAge : function(age){this._age=age;},
		setGender : function(gender){this._gender=gender;},
		setJob : function(job){this._job=job;},
		getName : function(){return this._name;},
		getAge : function(){return this._age;},
		getGender : function(){return this._gender;},
		getJob : function(){return this._job;},
		toString : function() { 
			 return this._name+','+this._age+','+this._gender+','+this._job; 
		}
	};
	
})();