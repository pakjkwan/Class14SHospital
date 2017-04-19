/*
========= app-meta ==========
app-algorithm 
	app-algorithm-series
	app-algorithm-array
	app-algorithm-matrix
	app-algorithm-math
	app-algorithm-application
app-component
	app-component-button
	app-component-input
	app-component-alert
	app-component-list
	app-component-table
app-context
app-oop
	app-oop-encapsulation
	app-oop-inheritance
	app-oop-polymorphism
app-permission
app-person
	app-person-patient
	app-person-doctor
	app-person-nurse
	app-person-admin
app-session
app-treatment
app-ui
app-util
==============================
*/
var app=app || {};
/*
========= app-algorithm ====
@AUTHOR : pakjkwan@gmail.com
@CREATE DATE : 2017-4-1
@UPDATE DATE : 2017-4-1
@DESC : 
==============================
*/
app.algorithm=(function(){
	var wrapper,ctx,img,js,css;
	var init=function(){
		wrapper=app.component.getWrapper();
		ctx=app.session.getContextPath();
		img=app.session.getImagePath();
		js=app.session.getJavascriptPath();
		css=app.session.getStylePath();
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		series();
		arr();
		matrix();
		math();
		appl();
	};
	var setContentView=function(){};
/*app-algorithm-series*/	
	var series=function(){
		$('#series').on('click',function(){
			wrapper.empty();
			wrapper.append(app.ui.algorithmTable());
			$('#tableLeft').html(app.ui.algorithmSeriesMenu());
			var tableRight=$('#tableRight');
			aSeries();
			$('#aSeries').on('click',function(){aSeries();});
			$('#swSeries').on('click',function(){
				tableRight.empty();
				app.component.inputText('inputText').attr('placeholder','한계값입력(100 -> -50)').appendTo(tableRight);
				app.component.aButton('aButton','btn-success').html('스위치수열의 합').appendTo(tableRight)
					.css('margin','10px auto')
					.on('click',function(){
					var limit=$('#inputText').val();
					app.component.divAlert('alert-success').html('1부터'+limit+'까지 스위치수열의 합은'+swSeries(limit)+'입니다.').appendTo(tableRight);
				});
			});
			$('#dSeries').on('click',function(){
				tableRight.empty();
				app.component.inputText('inputText').attr('placeholder','한계값입력(5 -> 25)').appendTo(tableRight);
				app.component.aButton('aButton','btn-info').html('계차수열의 합').appendTo(tableRight)
					.css('margin','10px auto')
					.on('click',function(){
					var limit=$('#inputText').val();
					app.component.divAlert('alert-info').html('1부터'+limit+'계차수열의 합은'+dSeries(limit)+'입니다.').appendTo(tableRight);
				});
			});
			$('#factorial').on('click',function(){
				tableRight.empty();
				app.component.inputText('inputText').attr('placeholder','한계값입력(5 -> 153)').appendTo(tableRight);
				app.component.aButton('aButton','btn-warning').html('팩토리얼수열의 합').appendTo(tableRight)
					.css('margin','10px auto')
					.on('click',function(){
					var limit=$('#inputText').val();
					app.component.divAlert('alert-warning').html('1부터'+limit+'팩토리얼수열의 합은'+factorial(limit)+'입니다.').appendTo(tableRight);
				});
			});
			$('#fibonacci').on('click',function(){
				tableRight.empty();
				app.component.inputText('inputText').attr('placeholder','한계값입력((5 -> 12))').appendTo(tableRight);
				app.component.aButton('aButton','btn-danger').html('피보나치수열의 합').appendTo(tableRight)
					.css('margin','10px auto')
					.on('click',function(){
					var limit=$('#inputText').val();
					app.component.divAlert('alert-danger').html('1부터'+limit+'피보나치수열의 합은'+fibonacci(limit)+'입니다.').appendTo(tableRight);
				});
			});
			
		});
	};
	var aSeries = function(){
		$('#tableRight').empty();
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
				var start=start*1,limit=limit*1,diff=diff*1;
				var sum=0;
				var rs="";
				var i=start;
				while(i<=limit){
					rs+=(i+diff>limit)?i+"=":i+"+";
					sum+=i;
					i+=diff;
				}
				
				app.component.divAlert('alert-danger').html(rs+sum).appendTo(tableRight);
		});
	
	};
	var swSeries = function(limit){
		//1,-2,3,-4,5,-6
		var sum = 0;
		 var flag=-1;
		 for(i=0;i<=limit;i++){
			sum += flag*i;
			flag = -1*flag;
		 }
		return sum;
	};
	var dSeries = function(limit){
		//1,2,4,7,11
		var sum = 1,total=0;
		var total = 0;
		for(i=0;i<limit;i++){
			sum += i;
			total += sum ;
		}
		return total;
	};
	var factorial = function(limit){
		//1!,1!+2!,1!+2!+3!,1!+2!+3!+4!,1!+2!+3!+4!+5!
		 var sum = 1, total = 0;
		 for(i=1;i<=limit;i++){
			 sum = sum*i;
			 total += sum;
		 }
		 if(limit == 0){total = 0;}else if(limit == 1){total = 1;}
		return total;
	};
	var fibonacci = function(limit){
		//1,1,2,3,5,8,13,21,
		 var sum = 2,a = 1,b = 1,c = 0;
		 for(i=3;i<=limit;i++){
			 c=a+b;
			 sum+=c;
			 a=b;
			 b=c;
		 }
		 if(limit == 0){sum = 0;}else if(limit == 1){sum = 1;}else if(limit == 2){sum = 2;} 
		return sum;
	};
/*app-algorithm-array*/	
	var arr=function(){
		$('#arr').on('click',function(){
			wrapper.empty();
			wrapper.append(app.ui.algorithmTable());
			var arr=[{id:'selectSort',txt:'선택정렬'},
				{id:'bubbleSort',txt:'버블정렬'},
				{id:'insertSort',txt:'삽입정렬'},
				{id:'ranking',txt:'석차구하기'},
				{id:'binSearch',txt:'이분검색'},
				{id:'merge',txt:'병합'},
				{id:'stack',txt:'스택'}];
			var str='';
			$.each(arr,function(i,j){
				str+='<li id="'+j.id+'" class="list-group-item"><a href="#">'+j.txt+'</a></li>';
			});
			$('#tableLeft').html(str);
			$('#selectSort').on('click',function(){
				var i=0,j=0,temp=0;
				var arr=randomGen();
				for(i=0;i<arr.length;i++){
					for(j=i;j<arr.length;j++){
						if(arr[i]>arr[j+1]){
							temp = arr[i];
							arr[i] = arr[j+1];
							arr[j+1] = temp;
						}
					}
				}
				
				$('#tableRight').html(app.component.horList(arr,'default'));	
			});
			$('#bubbleSort').on('click',function(){
				
				var arr=randomGen();
				var num=0,i=0,j=0;
				for(i=0;i<arr.length;i++){
					for(j=0;j<arr.length;j++){
						if(arr[j]>arr[j+1]){
							num=arr[j];
							arr[j]=arr[j+1];
							arr[j+1]=num;
						}
					}
				}
				$('#tableRight').html(app.component.horList(arr,'default'));	
			});
			$('#insertSort').on('click',function(){
				var arr=randomGen();
				var i=0,j=0;
				
				
				$('#tableRight').html(app.component.horList(arr,'default'));	
			});
			$('#ranking').on('click',function(){
				var arr=randomGen();
				var rank=[1,1,1,1,1,1];
				for(var i=0;i<arr.length;i++){
					for(var k=0;k<arr.length;k++){
						if(arr[i]<arr[k]){
							rank[i]++;
						}
					}
				}
				$('#tableRight').html(app.component.horList(arr,'default'));
				$('#tableRight').append(app.component.horList(rank,'default'));
			});
			$('#binSearch').on('click',function(){
				var num=randomGen();
				var arr=sort(num);
				$('#tableRight').html(app.component.horList(arr,'default'));
				app.component.inputText('inputText').attr('placeholder','찾을 숫자').appendTo(tableRight);
				app.component.aButton('aButton','btn-warning').html('찾기').appendTo(tableRight)
					.css('margin','10px auto')
					.on('click',function(){
						var val=$('#inputText').val();
						var fnum=(arr.length-1)-(arr.length-2);
						var pnum=arr.length-1;
						var i=val*1;
						for(i=0;i<pnum;i++){
							if(fnum<=pnum){
								var m=Math.floor((fnum+pnum)/2);
								if(v==arr[m]){
									var result=m;
									break;
								}
								if(v<arr[m]){
									fnum=m+1;
								}else{
									pnum=m-1;
								}
						}
						}
						app.component.divAlert('alert-danger').html('index=: '+result + '의 숫자는' +arr[m]+ '입니다.').appendTo(tableRight);
					});					
				
			});
			$('#merge').on('click',function(){
				var num1=randomGen();
				var num2=randomGen();
				var arr1=sort(randomGen());
				var arr2=sort(randomGen());
				var arr=[];
				var i=0;
				var j=0;
				$('#tableRight').html(app.component.horList(arr1,'default'));
				$('#tableRight').append(app.component.horList(arr2,'default'));
				app.component.aButton('aButton','btn-warning').html('병합').appendTo(tableRight)
					.css('margin','10px auto')
					.on('click',function(){
				for(k=0;k<12;k++){
					if(arr1[i]<arr2[j]){
						arr[k]=arr1[i];
						i++;
					}else if(arr1[i]==arr2[2]){
						arr[k]=arr1[i];
						i++;
					}else{
						arr[k]=arr2[j];
						j++;
					}
				}
				$('#tableRight').append(app.component.horList(arr,'default'));
			  });
			});
		});
	};
	var randomGen=function(){
		var i=0,k=0;
		var arr=[];
		for(;i<6;i++){
			arr[i]=Math.floor(Math.random() * 45) + 1;
			for(k=i;k>0;k--){
				if(arr[i]==arr[k-1]){
					i--;
				}
			}
		}
		return arr;
	};
	var sort=function(arr){
		var i=0,j=0,temp=0;
		var arr=randomGen();
		for(i=0;i<arr.length;i++){
			for(j=i;j<arr.length;j++){
				if(arr[i]>arr[j+1]){
					temp = arr[i];
					arr[i] = arr[j+1];
					arr[j+1] = temp;
				}
			}
		}
		return arr;
	}
/* app-algorithm-matrix */	
	var matrix=function(){
		$('#matrix').on('click',function(){
			var wrapper=app.component.getWrapper();
			wrapper.empty();
			wrapper.append(app.ui.algorithmTable());
			var arr=[{id:'basic',txt:'기본5X5'},
				{id:'ziazag',txt:'지그재그'},
				{id:'diamond',txt:'다이아몬드'},
				{id:'sandGlass',txt:'모래시계'},
				{id:'snail',txt:'달팽이'},
				{id:'magicSquare',txt:'마방진'}];
			var str='';
			$.each(arr,function(i,j){
				str+='<li id="'+j.id+'" class="list-group-item"><a href="#">'+j.txt+'</a></li>';
			});
			$('#tableLeft').html(str);	
			basic();
		});
		
	};
	var basic=function(){
		$('#basic').on('click',function(){
			var mtx = new Array(new Array(5), new Array(5),new Array(5), new Array(5),new Array(5));
			var jason=[
		        {
		            a : 1,
		            b : 2,
		            c : 3,
		            d : 4,
		            e : 5
		        },
		        {
		        	a : 6,
		            b : 7,
		            c : 8,
		            d : 9,
		            e : 10
		        },
		        {
		        	a : 11,
		            b : 12,
		            c : 13,
		            d : 14,
		            e : 15
		        },
		        {
		        	a : 16,
		            b : 17,
		            c : 18,
		            d : 19,
		            e : 20
		        },
		        {
		        	a : 21,
		            b : 22,
		            c : 23,
		            d : 24,
		            e : 25
		        }
		    ];
			$('#tableRight').html(app.component.panelTable(jason,'Basic','default'));
		});
		
	};
/* app-algorithm-math */	
	var math=function(){
		var wrapper=app.component.getWrapper();
		$('#math').on('click',function(){
			wrapper.empty();
			wrapper.append(app.ui.algorithmTable());
			var arr=[{id:'determinePrime',txt:'소수판별'},
				{id:'primeSum',txt:'소수의합'},
				{id:'primeCount',txt:'소수의개수'},
				{id:'lcmGcd',txt:'최대최소공배수'},
				{id:'euclid',txt:'유클리드 호제법'},
				{id:'fatorization',txt:'약수구하기'},
				{id:'primeFactor',txt:'소인수분해'},
				{id:'multiSum',txt:'배수의 합'},
				{id:'approx',txt:'근사값 구하기'}];
			var str='';
			$.each(arr,function(i,j){
				str+='<li id="'+j.id+'" class="list-group-item"><a href="#">'+j.txt+'</a></li>';
			});
			$('#tableLeft').html(str);
			determinePrime();
			primefactor();
			multiSum();
		});
		
	};
	var determinePrime=function(){
		$('#determinePrime').on('click',function(){
			alert('determinePrime click');
		});
	};
	var primefactor=function(){
		$('#primeFactor').on('click',function(){
			alert('소인수 분해!!!');
			app.component.inputText('inputText').attr('placeholder','입력 값').appendTo(tableRight);
			app.component.aButton('aButton','btn-warning').html('소인수 분해').appendTo(tableRight)
				.css('margin','10px auto')
				.on('click',function(){
					var val=$('#inputText').val();
					var prime=2;
					var val=val;
					var result='';
					for(i=0;i<=val;i++){
						if(val%prime!=0){
							prime++;
						}else{
							val/=prime;
							result+=prime+'*';
						}
					}
					app.component.divAlert('alert-danger').html(val+'의 소인수 분해 :'+result.substr(0,result.lastIndexOf('*'))).appendTo(tableRight);
				});
		});
	};
	var multiSum=function(){
		$('#multiSum').on('click',function(){
			alert('소인수 분해!!!');
			app.component.inputText('inputText').attr('placeholder','입력 값').appendTo(tableRight);
			app.component.inputText('limit').attr('placeholder','한계 값').appendTo(tableRight);
			app.component.aButton('aButton','btn-warning').html('배수의 합').appendTo(tableRight)
				.css('margin','10px auto')
				.on('click',function(){
					var val=$('#inputText').val()*1;
					var limit=$('#limit').val()*1;
					var sum=0;
					for(i=0;i<=limit;i++){
						if(i%val==0){
							sum+=i;
						}
						
					}
					app.component.divAlert('alert-danger').html(val+'의 배수의 합은:'+sum).appendTo(tableRight);
				});
			app.component.divAlert.empty();
		});

	}
/* app-algorithm-application */	
	var appl=function(){
		$('#appl').on('click',function(){
			alert('appl click');
		});
	};	
	return {
		init : init,
		series : series,
		aSeries : aSeries,
		swSeries : swSeries,
		dSeries : dSeries,
		factorial : factorial,
		fibonacci : fibonacci,
		arr : arr,
		randomGen : randomGen,
		sort:sort,
		matrix : matrix,
		basic : basic,
		math : math,
		determinePrime : determinePrime,
		primefactor:primefactor,
		appl : appl
	};
})();
/*
========= app-component ====
@AUTHOR : pakjkwan@gmail.com
@CREATE DATE : 2017-4-1
@UPDATE DATE : 2017-4-1
@DESC : 
==============================
*/
app.component=(function(){
	var _body,_wrapper;
	var setBody=function(body){this._body=body;}
	var getBody=function(){return this._body;}
	var setWrapper=function(wrapper){this._wrapper=wrapper;}
	var getWrapper=function(){return this._wrapper;}
	var init=function(){onCreate();};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){
		app.component.setWrapper($('#wrapper'));
		app.component.setBody($('body'));
	};
	return {
		init : init,
		getWrapper : getWrapper,
		setWrapper : setWrapper,
		getBody : getBody,
		setBody : setBody,
		div : function(id){
			return $(id);
		},
/*app-component-button*/
		aButton : function(id,type){
			return $('<a href="#" id="'+id+'" class="btn '+type+'" role="button">example</a>');
		},
		bButton : function(){
			return $('<button id="bButton" type="button" class="btn btn-default">example</button>');
		},
/*app-component-input*/		
		inputText : function(id){
			return $('<input id="'+id+'" type="text" class="form-control" placeholder="example" aria-describedby="basic-addon1">');
		},
/*app-component-alert*/			
		divAlert : function(type){ // alert-danger
			return $('<div class="alert '+type+'" role="alert">example</div>');
		},
/*app-component-list*/			
		horList : function(arr,type){
			var list='<div class="btn-group" role="group" aria-label="...">';
			$.each(arr,function(i,j){
				list+='<button id="list-button-"'+i+' type="button" class="btn btn-'+type+'">'+arr[i]+'</button>';
			});
			list+='</div>';
			return list;
		},
/*app-component-table*/			
		panelTable : function(jason,txt,type){
			
		    var table = 
				'<div class="panel panel-'+type+'">'
				+'<div class="panel-heading">행렬</div>'
				+'<table id="table">'
				+'<tr style="width:250px">'
				+'<th colspan="5">'+txt+'</th>'
				+'</tr>'
				+'<tbody>';
				$.each(jason, function(i,j){
					table +=
						'<tr>'
						+'<td style="width:20%">'+j.a+'</td>'
						+'<td style="width:20%">'+j.b+'</td>'
						+'<td style="width:20%">'+j.c+'</td>'
						+'<td style="width:20%">'+j.d+'</td>'
						+'<td style="width:20%">'+j.e+'</td>'
						+'</tr>';
				});
				
				table += '</tbody></table>'
		    
			return table;
		}
		
	};
})();
/*
========= app-context ====
@AUTHOR : pakjkwan@gmail.com
@CREATE DATE : 2017-4-1
@UPDATE DATE : 2017-4-1
@DESC : 
==============================
*/
app.context=(function(){
	var init=function(context){
		app.session.init(context);
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		app.component.init();
		app.algorithm.init();
		app.oop.init();
		app.person.init();
		
	};
	var setContentView=function(){
	};
	
	return {
		init : init,
		setContentView : setContentView,
		onCreate : onCreate
		
	};
	
})();
/*
========= app-oop ====
@AUTHOR : pakjkwan@gmail.com
@CREATE DATE : 2017-4-1
@UPDATE DATE : 2017-4-1
@DESC : 
==============================
*/
app.oop=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		encap();
		inherit();
	};
	var setContentView=function(){};
/*app-oop-encapsulation*/	
	var encap=function(){
		$('#encap').on('click',function(){
			var wrapper=app.component.getWrapper();
			wrapper.empty()
			.append(app.ui.algorithmTable());
			$('#tableLeft').html(app.ui.oopMenu());
			var tableRight=$('#tableRight');
			app.component.inputText('inputText').attr('placeholder','이름 나이 성별 직업(공백으로 구분)입력').appendTo(tableRight);
			app.component.aButton('aButton','btn-primary').html('스펙보기').appendTo(tableRight)
				.css('margin','10px auto')
				.on('click',function(){
					var inputVal=$('#inputText').val();
					var arr=inputVal.split(' ');
					console.log(inputVal);
					var doctor=new app.Person();
					doctor.setId(arr[0]);
					doctor.setPass(arr[1]);
					doctor.setName(arr[2]);
					doctor.setGen(arr[3]);
					console.log(doctor);
					var spec='<h5>'+doctor.toString()+'</h5>';
					app.component.divAlert('alert-danger').html(spec).appendTo(tableRight);
			});
		});
	};
/*app-oop-inheritance*/		
	var inherit=function(){
		$('#inherit').on('click',function(){
			var wrapper=app.component.getWrapper();
			wrapper.empty()
			.append(app.ui.algorithmTable());
			$('#tableLeft').html(app.oop.OOP_MENU);
			var tableRight=$('#tableRight');
			app.component.inputText('inputText').attr('placeholder','이름 나이 성별 직업(공백으로 구분)입력').appendTo(tableRight);
			app.component.aButton('aButton','btn-primary').html('스펙보기').appendTo(tableRight)
				.css('margin','10px auto')
				.on('click',function(){
					var inputVal=$('#inputText').val();
					var arr=inputVal.split(' ');
					console.log(inputVal);
					var doctor=new app.Person();
					doctor.setId(arr[0]);
					doctor.setPass(arr[1]);
					doctor.setName(arr[2]);
					doctor.setGen(arr[3]);
			
					var spec='<h5>'+doctor.toString()+'</h5>';
					app.component.divAlert('alert-primary').html(spec).appendTo(tableRight);
			});
		});
	};
/*app-oop-polymorphism*/			
	return {
		init : init,
		encap : encap,
		inherit : inherit,
		poly : function(){}
	};
})();
/*
========= app-permission ====
@AUTHOR : pakjkwan@gmail.com
@CREATE DATE : 2017-4-1
@UPDATE DATE : 2017-4-1
@DESC : 
==============================
*/
app.permission=(function(){
	var execute=function(){
		var context=app.session.getContextPath();
		console.log('app.login context :'+context);
		
		$('#login-submit').on('click',function(e){
			e.preventDefault();
			$.ajax({
				 url: context+"/login",
				 method: "POST",
				 data: JSON.stringify({ 
					 	id : $('#username').val(),
					 	pass : $('#password').val()
					 }),
				 dataType: "json",
				 contentType: 'application/json',
				 success: function(data){
					 if(data.result==='success'){
						 $('#boot-nav').remove();
						 $('#wrapper').html(app.ui.patientGnb());
						 $('#wrapper').append(app.ui.patientDetail());
						 $('#name').text(data.patient.name);
						 $('#gen').text(data.patient.gen);
						 $('#phone').text(data.patient.phone);
						 $('#email').text(data.patient.email);
						 $('#job').text(data.patient.job);
						 $('#addr').text(data.patient.addr);
						 $('#docID').text(data.patient.docID);
						 var jumin=data.patient.jumin;
						 console.log('jumin:'+jumin);
						 var birth='';
						 var age='';
						 $('#birth').text(birth);
						 $('#age').text(age);
						 /*"id","pass","name","","phone","email","job","jumin","addr","docID","nurID"*/
						 $('#btn-default').on('click',function(e){
							 $('#wrapper').html(app.ui.patientGnb());
							 $('#wrapper').append(app.ui.chart());
							 
							/*e.preventDefault();
							$.ajax({
								url : '',
								method : 'POST',
								data : JSON.stringify({}),
								dataType : 'json',
								contentType : 'application/json',
								success : function(data){},
								error : function(x,s,m){alert(m);}
							});
							 */
							 
							 
						 });
						 
					 }else{
						 alert('조회된 ID 가 존재하지 않습니다.');
					 }
				 },
				 error: function(xhr,status,msg) {
					alert('로그인 실패이유:'+msg);
				}
			});
		});
	    $('#login-form-link').on('click',function(e) {
			$("#login-form").delay(100).fadeIn(100);
	 		$("#register-form").fadeOut(100);
			$('#register-form-link').removeClass('active');
			$(this).addClass('active');
			e.preventDefault();
		});
		$('#register-form-link').on('click',function(e) {
			$("#register-form").delay(100).fadeIn(100);
	 		$("#login-form").fadeOut(100);
			$('#login-form-link').removeClass('active');
			$(this).addClass('active');
			e.preventDefault();
		});
		
		/*
		radio 체크 할때마다 incommon-info 의 화면이 변동됨
		 * */
		
		$('#register-patient').on('click',function(e){
			e.preventDefault();
			var _id=$('#id').val();
			var _pass=$('#pass').val();
			var _name=$('#name').val();
			var _phone=$('#phone').val();
			if(app.util.validation(_id)
				&& app.util.validation(_pass)
				&& app.util.validation(_name)
				&& app.util.validation(_phone)){
				var json={
					'id' : _id,
					'name' : _name,
					'pass' : _pass,
					'phone' : _phone,
					'email' : $('#email').val()
				};
							
					$.ajax({
						url : context+'/post/patient',
						method : 'POST',
						data : JSON.stringify(json),
						 dataType: "json",
						 contentType: 'application/json',
						success : function(data){
							alert('회원가입 성공 .. 로그인 바랍니다');
							location.reload();
						},
						error : function(xhr,status,msg){alert('환자등록 시'+msg);}
					});
			}else{
				alert('반드시 입력될 값이 비워져 있습니다');
			};
		});
		$('#register-doctor').on('click',function(e){
			e.preventDefault();
		});
		$('#register-nurse').on('click',function(e){
			e.preventDefault();
		});
		$('#register-admin').on('click',function(e){
			e.preventDefault();
		});
	};
	return {execute:execute};
})();
/*
========= app-person ====
@AUTHOR : pakjkwan@gmail.com
@CREATE DATE : 2017-4-1
@UPDATE DATE : 2017-4-1
@DESC : 
==============================
*/
app.info=function() { 
	var _id,_pass,_name,_gen,_phone,_email;
	return {
		setId : function(id){this._id=id;},getName : function(){return this._id;},
		setPass : function(pass){this._pass=pass;},getPass : function(){return this._pass;},
		setName : function(name){this._name=name;},getName : function(){return this._name;},
		setGen : function(gen){this._gen=gen;},getGen : function(){return this._gen;},
		setPhone : function(phone){this._phone=phone;},getPhone : function(){this._phone;},
		setEmail : function(email){this._email=email;},setEmail : function(){this._email;},
		toString : function() { 
			 return this._id+','+this._pass+','+this._name+','+this._gen+','+this._phone+','+this._email; 
		}
	};
};

app.Info2=(function(){
    var Constructor = function(id,pass,name,gen,phone,email){
        this.id = id || 0;
    };

    Constructor.prototype = {
        value: null,
        add: function(numToAdd) {
            this.value += numToAdd;
        }
    };

    return Constructor;
})();
/*app-person*/
app.person=(function(){
	var init=function(){
		wrapper=app.component.getWrapper();
		ctx=app.session.getContextPath();
		img=app.session.getImagePath();
		js=app.session.getJavascriptPath();
		css=app.session.getStylePath();
		$('#wrapper').load(ctx+'/permission/form');
	};
	return {
		init : init
/*app-person-patient*/		
	};
})();
/*
========= app-session ====
@AUTHOR : pakjkwan@gmail.com
@CREATE DATE : 2017-4-1
@UPDATE DATE : 2017-4-1
@DESC : 
==============================
*/
app.session=(function(){
	var init=function(context){
		sessionStorage.setItem('context',context);
		sessionStorage.setItem('js',context+'/resources/js');
		sessionStorage.setItem('css',context+'/resources/css');
		sessionStorage.setItem('img',context+'/resources/img');
	};
	var getContextPath=function(){return sessionStorage.getItem('context');};
	var getJavascriptPath=function(){return sessionStorage.getItem('js');};
	var getStylePath=function(){return sessionStorage.getItem('css');};
	var getImagePath=function(){return sessionStorage.getItem('img');};
	return {
		init : init,
		getContextPath : getContextPath,
		getJavascriptPath : getJavascriptPath,
		getStylePath : getStylePath,
		getImagePath : getImagePath
	};
})();

/*
========= app-ui ====
@AUTHOR : pakjkwan@gmail.com
@CREATE DATE : 2017-4-1
@UPDATE DATE : 2017-4-1
@DESC : 
==============================
*/
app.ui={
		
/*app-ui-algorithm*/
		algorithmArrayTable : function(){
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
		},
		algorithmTable : function(){
			return '<table id="table" style="width:800px;height:300px;border-collapse: collapse;border: 1px solid black;margin:0 auto">'
			+	'<tr style="border: 1px solid black;">'
			+		'<td id="tableLeft" style="width: 50%;border: 1px solid black;"></td>'
			+		'<td id="tableRight" style="width: 50%;border: 1px solid black;"></td>'
			+	'</tr>'
			+'</table>';
		},
		algorithmSeriesMenu : function(){
			return '<ul class="list-group">'
			+	'<li id="aSeries" class="list-group-item"><a href="#">등차수열 합</a></li>'
			+	'<li id="swSeries" class="list-group-item"><a href="#">스위치수열 합</a></li>'
			+	'<li id="dSeries" class="list-group-item"><a href="#">계차수열 합</a></li>'
			+	'<li id="factorial" class="list-group-item"><a href="#">팩토리얼수열 합</a></li>'
			+	'<li id="fibonacci" class="list-group-item"><a href="#">피보나치수열 합</a></li>'
			+'</ul>';
		},
/*app-ui-oop*/		
		oopMenu : function(){
			return '<ul class="list-group">'
			+	'<li id="encap" class="list-group-item"><a href="#">캡슐화</a></li>'
			+	'<li id="inherit" class="list-group-item"><a href="#">상 속</a></li>'
			+	'<li id="poly" class="list-group-item"><a href="#">다형성</a></li>'
			+'</ul>';
		},
/*app-ui-patient*/		
		patientGnb : function(){
			
		    	   var gnb = '<div style="position: relative; "><ul id="app-gnb" class="app-gnb" >';
		    	   var arr = ['home/홈으로','mypage/MY PAGE','treatlist/나의 진료기록','board/게시판','customer/고객참여마당','main/로그아웃'];
		    	   for(var i=0; i<6; i++){
		    		   gnb+='<li><a href="'+arr[i].split("/")[0]+'">'+arr[i].split("/")[1]+'</a></li>'   
		    	   }
				   gnb += '</ul></div>';
			return gnb;
		},
		patientDetail : function(){
			var image = app.session.getImagePath();
			var detail=
			'<div class="app-patient-detail">'
			+     '<table id="app-table" class="app-table" >'
			+          '<tr style="text-align: left;">'
			+                 '<td colspan="5"><h3> 마이페이지</h3></td>'
			+           '</tr><tr>'
			+                '<td style="width: 100px" rowspan="5"><img src="'+image+'/default-profile.jpg" alt="" /></td>'
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
			+'</div>'
			return detail;
		},

		chart : function(){
			var image = app.session.getImagePath();
			$("<div></div>").attr('id','div-chart').appendTo('#wrapper');
			$('#div-chart').css('width','80%').css('margin-top','50px').addClass('app-margin-center');
			$("<div></div>").attr('id','app-chart-top').appendTo('#div-chart');
			
			var table=
				'<table>'
				+'<tr><td rowspan="5" style="width:100px">환<br/>자<br/>정<br/>보</td><td class="app-chart-bottom-elem">이름</td><td colspan="3" class="app-chart-top-table"></td><td class="app-chart-bottom-elem">직업</td><td class="app-chart-top-table"></td></tr>'
				+'<tr><td class="app-chart-bottom-elem">생년월일</td><td class="app-chart-top-table"></td><td class="app-chart-col-table">키</td><td class="app-chart-top-table"></td><td class="app-chart-bottom-elem">직업</td><td class="app-chart-top-table"></td></tr>'       
				+'<tr><td class="app-chart-bottom-elem">성별</td><td colspan="3" class="app-chart-top-table"></td><td class="app-chart-bottom-elem">몸무게</td><td class="app-chart-top-table"></td></tr>'
			    +'<tr><td class="app-chart-bottom-elem">전화번호</td><td colspan="3" class="app-chart-top-table"></td><td class="app-chart-bottom-elem">혈액형</td><td class="app-chart-top-table"></td></tr>'
			    +'<tr><td class="app-chart-bottom-elem">주소</td><td colspan="3" class="app-chart-top-table"></td><td class="app-chart-bottom-elem">주치의</td><td class="app-chart-top-table"></td></tr>'
				+'</table>';			 
			$(table).attr('id','app-chart-top-table').appendTo('#app-chart-top');
			$('#app-chart-top-table').css('width','800px');
			/*var row = $('<tr />', {})
		        .appendTo("#app-chart-top-table");
		    $('<td />', {
		        'text': 'column1'
		    }).appendTo(row);
	
		    $('<td />', {
		        'text': 'column2',
		        'style': 'min-width:100px;'
		    }).appendTo(row);*/
			$('#app-chart-top').addClass('app-chart-top').css('text-align','center');
		//	$('#app-chart-top').html(table);
			$("<div></div>").attr('id','app-chart-center').appendTo('#app-chart-top');
			$('#app-chart-center').addClass('app-chart-center');
			$('#app-chart-center').html(
				'<div class="app-chart-center-center">처방전'+
			        '<br/>'+
			        '<img src="'+image+'/default-profile.jpg" style="width:200px; height:200px;"/>'+
			    '</div>	');
			$("<div></div>").attr('id','app-chart-bottom').appendTo('#app-chart-center');
			$('<table><thead id="thead"></thead><tbody id="tbody"></tbody></table>').attr('id','app-chart-bottom-table').appendTo('#app-chart-bottom');
			var row = '<tr>';
			var arr=['순서','진료일','진료 NO','담당의사','직책','진료과목','병명','처방내역'];
			for(var i=0;i<8;i++){
				row+='<th>'+arr[i]+'</th>';
			}
			row+='</tr>';
			$('#thead').html(row);
			var row = '<tr>';
			for(var i=0;i<8;i++){
				row+='<td>'+'example'+'</td>';
			}
			row+='</tr>';
			$('#tbody').html(row);
			$('#thead th').addClass('app-chart-bottom-elem').addClass('app-text-center');
			$('#tbody td').addClass('app-chart-bottom-elem').addClass('app-text-center');
			$('#app-chart-bottom-table').css('margin-top','20px').addClass('app-chart-bottom-table');
		    /*
			<div class="app-chart-bottom" style="text-align:center"> 

			    <table style="border-collapse: collapse;">

				<tr>

					<td class="app-chart-bottom-table">순서</td>

			        <td class="app-chart-bottom-table">진료일</td>

			        <td class="app-chart-bottom-table">진료 NO</td>

			        <td class="app-chart-bottom-table">담당의사</td>

			        <td class="app-chart-bottom-table">직책</td>

			        <td class="app-chart-bottom-table">진료과목</td>

			        <td class="app-chart-bottom-table">병명</td>

			        <td class="app-chart-bottom-table">처방내역</td>

			        

			        

				</tr>

				<tr>

					<td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

				</tr>

				<tr>

					<td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

				</tr>

				<tr>

					<td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

				</tr>

				<tr>

					<td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

				</tr>

				<tr>

					<td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

			        <td class="app-chart-bottom-table"></td>

				</tr>

			</table>

			</div>*/

		
		}
};
/*
========= app-util ====
@AUTHOR : pakjkwan@gmail.com
@CREATE DATE : 2017-4-1
@UPDATE DATE : 2017-4-1
@DESC : 
==============================
*/

app.util={
		validation : function(x) {
		    return (x != "");
		},
		emailCheck : function emailcheck(strValue){
			var regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
			//입력을 안했으면
			if(strValue.lenght == 0){return false;}
			//이메일 형식에 맞지않으면
			if (!strValue.match(regExp)){return false;}
			return true;
		}
};	
	
