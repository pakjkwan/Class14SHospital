var app=app || {};
app.algorithm=(function(){
	var wrapper,context,algorithm,component;
	var onCreate=function(){
		wrapper=$('#wrapper');
		context=$.context();
		algorithm=$.javascript()+'/algorithm.js';
		component=$.javascript()+'/component.js';
		setContentView();
	};
	var setContentView=function(){
		series();
		sort();
		matrix();
		math();
		appl();
	};
	var series=function(){
		$('#series').on('click',function(){
			$.getScript(component,function(){
				wrapper.empty();
				wrapper.append(createTable1By2());
				var $right=$('#tableRight'), $left=$('#tableLeft');
				$left.html(createSeriesMenu());
				$('#aSeries').on('click',function(){
						$('#tableRight').empty();
						createInputText('input-val','form-control').attr('placeholder','INPUT START LIMIT DIFFERENCE (CATEGORIZED BY SPACE)').appendTo($right);
						createATag('aButton','btn-primary').html('등차수열의 합').appendTo($right)
							.css('margin','10px auto')
							.on('click',function(){
								$.getScript(algorithm, function(){
									var arr=$('#input-val').val().split(' ');
								createDivAlert('alert-danger').html(arithmeticSeries(arr[0],arr[1],arr[2])).appendTo($right);
						});
					});
				});
				$('#swSeries').on('click',function(){
					$right.empty();
					createInputText('limit','form-control').attr('placeholder','INPUT LIMIT(100 -> -50)').appendTo($right);
					createATag('aButton','btn-success').html('스위치수열의 합').appendTo($right)
						.css('margin','10px auto')
						.on('click',function(){
						var limit=$('#limit').val();
						$.getScript(algorithm,function(){
							createDivAlert('alert-success').html('1부터'+limit+'까지 스위치수열의 합은'+switchSeries(limit)+'입니다.').appendTo($right);
						});
					});
				});
				$('#dSeries').on('click',function(){
					$right.empty();
					createInputText('limit','form-control').attr('placeholder','한계값입력(5 -> 25)').appendTo($right);
					createATag('aButton','btn-info').html('계차수열의 합').appendTo($right)
						.css('margin','10px auto')
						.on('click',function(){
						var limit=$('#limit').val();
						$.getScript(algorithm,function(){
							createDivAlert('alert-info').html('1부터'+limit+'계차수열의 합은'+differenceSeries(limit)+'입니다.').appendTo($right);
						});
					});
				});
				$('#factorial').on('click',function(){
					$right.empty();
					createInputText('limit','form-control').attr('placeholder','한계값입력(5 -> 153)').appendTo($right);
					createATag('aButton','btn-warning').html('팩토리얼수열의 합').appendTo($right)
						.css('margin','10px auto')
						.on('click',function(){
						var limit=$('#limit').val();
						$.getScript(algorithm,function(){
							createDivAlert('alert-warning').html('From 1 To '+limit+', Sum of Factorial is '+factorial(limit)).appendTo($right);	
						});
					});
				});
				$('#fibonacci').on('click',function(){
					$right.empty();
					createInputText('inputText','form-control').attr('placeholder','한계값입력((5 -> 12))').appendTo($right);
					createATag('aButton','btn-danger').html('피보나치수열의 합').appendTo($right)
						.css('margin','10px auto')
						.on('click',function(){
						var limit=$('#inputText').val();
						$.getScript(algorithm,function(){
							createDivAlert('alert-danger').html('1부터'+limit+'피보나치수열의 합은'+fibonacci(limit)+'입니다.').appendTo($right);
						});
					});
				});
			
			});
		});
	};
	
	var sort=function(){
		$('#arr').on('click',function(){
			$.getScript(component,function(){
				wrapper.empty();
				wrapper.append(createTable1By2());
				var $right=$('#tableRight'),$left=$('#tableLeft');
				var str='';
				$.each(createSortMenu(),function(i,j){
					str+='<li id="'+j.id+'" class="list-group-item"><a href="#">'+j.txt+'</a></li>';
				});
				$left.html(str);
				$('#selectSort').on('click',function(){
					$.getScript(algorithm,function(){
						$right.html(createHorList(selectSort(6,1,45),'default'));
					});
				});
				$('#bubbleSort').on('click',function(){
					$.getScript(algorithm,function(){
						$right.html(createHorList(bubbleSort(6,1,45),'default'));
					});
				});
				$('#insertSort').on('click',function(){
					$.getScript(algorithm,function(){
						$right.html(createHorList(insertSort(6,1,45),'default'));
					});
				});
				$('#ranking').on('click',function(){
					$.getScript(algorithm,function(){
						var x=randomGen(6,1,45);
						$right.html(createHorList(x,'default'));
						$right.append(createHorList(ranking(x),'default'));
					});
				});
				$('#binSearch').on('click',function(){
					$.getScript(algorithm,function(){
						var arr=ascSort(randomGen(6,1,45));
						$right.html(createHorList(arr,'default'));
						createInputText('inputText','form-control').attr('placeholder','찾을 숫자').appendTo($right);
						createATag('aButton','btn-warning').html('찾기').appendTo($right)
							.css('margin','10px auto')
							.on('click',function(){
								var x=$('#inputText').val();
							//	binSearch(x,arr);
							/*	var fnum=(arr.length-1)-(arr.length-2);
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
								}*/
								createDivAlert('alert-danger').html('index=: 의 숫자는' +binSearch(x,arr)+ '입니다.').appendTo($right);
							});	
					});
				});
				$('#merge').on('click',function(){ // notComplete
					$.getScript(algorithm,function(){
						var num1=randomGen(3,1,50);
						var num2=randomGen(3,51,99);
						var arr1=ascSort(num1);
						var arr2=ascSort(num2);
						var arr=[];
						var i=0;
						var j=0;
						$right.html(createHorList(arr1,'default'));
						$right.append(createHorList(arr2,'default'));
						createATag('aButton','btn-warning').html('병합').appendTo($right)
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
						$right.html(createDivAlert(arr,'default'));
					});
				  });
				});
			});
			
		});
	};
	
	var matrix=function(){
		$('#matrix').on('click',function(){
			$.getScript(component,function(){
				wrapper.empty();
				wrapper.append(createTable1By2());
				var $right=$('#tableRight'),$left=$('#tableLeft');
				
				var str='';
				$.each(createMatrixMenu(),function(i,j){
					str+='<li id="'+j.id+'" class="list-group-item"><a href="#">'+j.txt+'</a></li>';
				});
				$left.html(str);	
				$('#basic').on('click',function(){
					$.getScript(algorithm,function(){
						$right.html(panelTable(fiveByFive(),'Basic','default'));
					});
							
				});
				// IncompleteSource!! add matrix click event
			});
		
		});
		
	};
	var math=function(){
		$('#math').on('click',function(){
			$.getScript(component,function(){
				wrapper.empty();
				wrapper.append(createTable1By2());
				var $right=$('#tableRight'),$left=$('#tableLeft');
				var str='';
				$.each(createMathMenu(),function(i,j){
					str+='<li id="'+j.id+'" class="list-group-item"><a href="#">'+j.txt+'</a></li>';
				});
				$left.html(str);
				$('#determinePrime').on('click',function(){
					alert('determinePrime click');
					createInputText('target','form-control').attr('placeholder','입력 값').appendTo($right);
					createATag('btn','btn-warning').html('약수 구하기').appendTo($right)
						.css('margin','10px auto');
					// IncompleteSource
				});
				$('#primeFactor').on('click',function(){
					createInputText('target','form-control').attr('placeholder','입력 값').appendTo($right);
					createATag('btn','btn-warning').html('소인수 분해').appendTo($right)
						.css('margin','10px auto');
					$('#btn').on('click',function(){
						$.getScript(algorithm,function(){
							var target=$('#target').val()
							var x=primefactor();
							createDivAlert('alert-danger').html(target+'의 소인수 분해 :'+x.substr(0,x.lastIndexOf('*'))).appendTo($right);
						});
					});
				});
				$('#multiSum').on('click',function(){
					$right.empty();
					createInputText('target','form-control').attr('placeholder','Target p=5').appendTo($right);
					createInputText('start','form-control').attr('placeholder','Start q=1').appendTo($right);
					createInputText('end','form-control').attr('placeholder','End r=100').appendTo($right);
					createATag('btn','btn-warning').html('Expected Count is 20, Sum is 1050').appendTo($right)
						.css('margin','10px auto');
					$('#btn').on('click',function(){
						var p=$('#target').val(),q=$('#start').val(),r=$('#end').val();
						$.getScript(algorithm,function(){
							createDivAlert('alert-danger').html('The sum is '+sumOfMultiplesOfTargetFromStartToEnd(p,q,r)).appendTo($right);
							
						});
					});
				});
			});
		});
	};
	var appl=function(){
		$('#appl').on('click',function(){
			alert('appl click');
		});
	};	
	return {onCreate : onCreate};
})();
app.noticeBoard=(function(){
	var wrapper,noticeBoard,component;
	var onCreate=function(){
		wrapper=$('#wrapper');
		context=$.context();
		component=$.javascript()+'/component.js';
		noticeBoard=$.javascript()+'/notice-board.js';
		setContentView();
	};
	var setContentView=function(){
		$('#notice-board').on('click',function(){
			articlesOnPage(1);
		});
	};
	var articlesOnPage=function(pageNumber){
			wrapper.empty();
			$.getScript(component,function(){
				wrapper.append(createSearchWindowOnArticles());
				wrapper.append(createArticlesOnPage());
				$.getScript(noticeBoard,function(){
					var $articlesOnPage=$('table#articles-on-page'),
				 	$thead=$articlesOnPage.find('thead'),
				 	$tbody=$articlesOnPage.find('tbody'),
				 	$theNumberOfArticles=$('#the-number-of-articles'),
					$searchWindowOnArticles=$('#search-window-on-articles');
					$thead.remove();
					$tbody.empty();
					$theNumberOfArticles.empty();
					$.getJSON(context+'/get/articles/'+pageNumber,function(data){
						var articlesOnPage=data.articlesOnPage,
							theNumberOfRows=data.theNumberOfRows,
							theNumberOfPages=data.theNumberOfPages,
							startPage=data.startPage,
							endPage=data.endPage,
							pageNumber=data.pageNumber,
							startRow=data.startRow,
							endRow=data.endRow,
							pageSize=data.pageSize,
							blockSize=data.blockSize,
							rows='',squares='',squareNumber=0;
						$.each(articlesOnPage,function(i,article){
							rows+= '<tr><td>'+(i+1)+'</td>'
						    +'<td>'+article.title+'</td>'
						    +'<td>'+article.writerId+'</td>'
						    +'<td>'+article.regDate+'</td>'
						    +'<td>'+article.readCount+'</td>'
							+'</tr>';
						});
						$tbody.html(rows);
						var pagination=createPagination();
						wrapper.append(pagination);
						$pagination=$('#pagination ul');
						// dddd
						if(pageNumber>blockSize){
							var foo=(pageNumber%blockSize==0)?
									(Math.floor(((pageNumber-blockSize)/blockSize))*blockSize)+1-blockSize:
									(Math.floor(((pageNumber-blockSize)/blockSize))*blockSize)+1;
							squares+='<li><a onclick="app.noticeBoard.articlesOnPage(1)" aria-label="Previous">'
							+'<<'
							+'</a></li>'
							+'<li><a onclick="app.noticeBoard.articlesOnPage('+foo+')" aria-label="Previous">'
							+'<span aria-hidden="true">PREV</span>'
							+'</a></li>';
						}
						for(var i=startPage;i<startPage+pageSize && i<=theNumberOfPages;i++){
								if(i==pageNumber){
									squares+='<li><a href="#"><font>'+i+'</font></a></li>';
								}else{
									squares+='<li><a href="#" onclick="app.noticeBoard.articlesOnPage('+i+')">'+i+'</a></li>';
								}
								squareNumber=i;
						}
						if(squareNumber!=theNumberOfPages){
							var foo=(pageNumber%blockSize==0)?
									(Math.floor(((pageNumber+blockSize)/blockSize))*blockSize)+1-blockSize:
									(Math.floor(((pageNumber+blockSize)/blockSize))*blockSize)+1;
							squares+='<li><a href="#" onclick="app.noticeBoard.articlesOnPage('+theNumberOfPages+')" aria-label="Next">'
							+'<span style="font-size:12px;margin-left:10px" aria-hidden="true">NEXT</span>'
							+'</a></li>'
							+'<li><a href="#" onclick="app.noticeBoard.articlesOnPage('+foo+')" style="font-size:12px" aria-label="Next">'
							+'>>'
							+'</a></li>';
						}
						$pagination.html(squares);
						wrapper.append(pagination);
						$('#container').addClass('app-width-full-size');
						$('#container>div').addClass('app-margin-center').css('width','500px');
						$articlesOnPage.addClass('app-table').addClass('app-margin-center').css('width','500px');
						$pagination.css('"width','500px').css('margin','0 auto')
						.css('margin-top','20px').css('text-align','center');
						$pagination.find('a').css('text-decoration','none');
						$pagination.find('li').css('text-align','center').css('width','38px').css('display','inline');
						$pagination.find('font').css('color','red');
					});
				});
			});
	
	};
	return {onCreate:onCreate,articlesOnPage:articlesOnPage};
})();
app.cookie={
		setCookie:	function (name,value) {
		 	document.cookie = name + "=" + value;
		},
		getCookie: function(name) {
		    var nameEQ = name + "=";
		    var ca = document.cookie.split(';');
		    for(var i=0;i < ca.length;i++) {
		        var c = ca[i];
		        while (c.charAt(0)==' ') c = c.substring(1,c.length);
		        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		    }
		    return null;
		},
		removeCookie: function(name) {
		    createCookie(name,"",-1);
		}
}
app.member=(function(){
	var wrapper,context,algorithm,component;
	var onCreate=function(){
		wrapper=$('#wrapper');
		context=$.context();
		domain=$.javascript()+'/domain.js';
		component=$.javascript()+'/component.js';
		setContentView();
	};
	var setContentView=function(){
		encapsulation();
		inheritance();
	};
	var encapsulation=function(){
		$('#encap').on('click',function(){
			$.getScript(component,function(){
				var wrapper=$('#wrapper');
				wrapper.empty().append(createTable1By2());
				var $right=$('#tableRight'),$left=$('#tableLeft');
				$right.html(createMemberMenu());
				createInputText('target','form-control').attr('placeholder','이름 나이 성별 직업(공백으로 구분)입력').appendTo(tableRight);
				createATag('btn','btn-primary').html('스펙보기').appendTo($right)
					.css('margin','10px auto')
					.on('click',function(){
						
						$.getScript(domain,function(){
							var target=$('#target').val();
							var arr=target.split(' ');
							var doctor=new Person();
							doctor.setId(arr[0]);
							doctor.setPass(arr[1]);
							doctor.setName(arr[2]);
							doctor.setGen(arr[3]);
							console.log(doctor);
							var spec='<h5>'+doctor.toString()+'</h5>';
							createDivAlert('alert-danger').html(spec).appendTo($right);
						});
					
				});
			});
		});
	};
	var inheritance=function(){
		$('#inherit').on('click',function(){
			var wrapper=app.component.getWrapper();
			wrapper.empty()
			.append(createTable1By2());
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
	return {onCreate : onCreate};
})();
app.permission=(function(){
	var wrapper,context,permission,component;
	var onCreate=function(){
		wrapper=$('#wrapper');
		context=$.context();
		permission=$.javascript()+'/permission.js';
		component=$.javascript()+'/component.js';
		setContentView();
	};
	var setContentView=function(){
		execute();
	};
	var execute=function(){
	    $('#login-form-link').on('click',function(e) {
			$("#login-form").delay(100).fadeIn(100);
	 		$("#register-form").fadeOut(100);
			$('#register-form-link').removeClass('active');
			$(this).addClass('active');
			e.preventDefault();
		});
	    login();
		$('#register-form-link').on('click',function(e) {
			$("#register-form").delay(100).fadeIn(100);
	 		$("#login-form").fadeOut(100);
			$('#login-form-link').removeClass('active');
			$(this).addClass('active');
			e.preventDefault();
		});
		
		/*
		radio 체크 할때마다 incommon-info 의 화면이 변동됨
		*/
		
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
	var login = function(){
	    var authId = $.cookie('authId');
	    if(authId != undefined) {
	    	$('#username').val(authId);
	        $("#remember").prop("checked",true);
	    }
	    $('#login-submit').on('click',function(e){
	        if($.trim($("#username").val()) == "") {
	            alert("아이디를 입력하세요");
	            return;
	        } else {
	            if($("#remember").prop("checked")) {
	                $.cookie('authId', $("#username").val());
	            } else {
	                $.removeCookie("authId");
	            }
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
							 $('#wrapper').html(createPatientGnb());
							 $('#wrapper').append(createPatientDetail());
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
								 $('#wrapper').html(createPatientGnb());
								e.preventDefault();
								$.ajax({
									url : context+'/get/chart',
									method : 'POST',
									data : JSON.stringify({id : $.cookie('authId')}),
									dataType : 'json',
									contentType : 'application/json',
									success : function(data){
										if(data.result==='fail'){
											$('<div><h1 id="msg"></h1></div>').attr('id','chart-free').appendTo('#wrapper');
											$('#chart-free').css('width','80%').css('margin-top','50px').addClass('app-margin-center');
											$('#msg').text('등록된 차트가 없습니다');
										}else{
											$('#wrapper').append(createChart());
											$('#name').text(data.patient.name);
											// mission
											$("<div></div>").attr('id','app-chart-bottom').appendTo('#app-chart-center');
											var chartList='<table><thead id="thead">';
											var row = '<tr>';
											var arr=['순서','진료일','진료 NO','담당의사','직책','진료과목','병명','처방내역'];
											for(var i=0;i<8;i++){
												row+='<th style="border:1px solid black">'+arr[i]+'</th>';
											}
											row+='</tr></thead><tbody id="tbody">';
											chartList+=row;
											row='';
											//진료일 진료no 담당의사 직책 진료과목 병명 처방내역	
											$.each(data.list,function(i,chart){
												row+='<tr >'
												+'<td style="border:1px solid black">'+(i+1)+'</td>'
												+'<td style="border:1px solid black">'+chart.treatmentId+'</td>'
												+'<td style="border:1px solid black">'+chart.treatDate+'</td>'
												+'<td style="border:1px solid black">'+chart.doctorName+'</td>'
												+'<td style="border:1px solid black">'+chart.doctorPosition+'</td>'
												+'<td style="border:1px solid black">'+chart.doctorMajor+'</td>'
												+'<td style="border:1px solid black">'+chart.chartContents+'</td>'
												+'<td style="border:1px solid black">'+chart.treatContents+'</td>'
											});
											chartList+=row;
											chartList+='</tbody></table>';
											$('.row').css('border','1px solid black').addClass('app-text-center');
											$(chartList).attr('id','chart-list')
											.css('margin-top','20px').addClass('app-chart-bottom-table')
											.appendTo('#app-chart-bottom');
											var chartId=data.patient.chartId;
											var context=app.session.getContextPath();
											$('#btn-file-upload').on('click',function(e){
												e.preventDefault();
												var url=$('#form').attr('action');
												$.ajax({
													url:context+'/post/chart/id',
													data:JSON.stringify({chartId:chartId}),
													dataType:'json',
													contentType:'application/json',
													method:'POST',
													success:function(data){
														$('#form').ajaxForm({
															url : url,
															dataType : 'text', 
															enctype: "multipart/form-data", 
															
													        beforeSubmit : function() {
													        	alert("로딩화면 ! ");      
													        },
													        success : function(data) {
													            alert("등록완료 ! "+data.result);            
													        }
														}).submit();
													},
													error:function(x,s,m){alert(m);}
												});
											});
										}
									},
									error : function(x,s,m){alert(m);}
								});
							 });
							 
						 }else{
							 alert('조회된 ID 가 존재하지 않습니다.');
						 }
					 },
					 error: function(xhr,status,msg) {
						alert('로그인 실패이유:'+msg);
					}
				});
	        }
			
		});
	    $("#login_button").click(function(){
	        
	    })
	};
	return {
		onCreate:onCreate,
		execute:execute
	};
})();
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
app.util={
		validation : function(x) {
		    return (x != "");
		},
		emailCheck : function(x){
			var r = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
			//입력을 안했으면
			if(x.lenght == 0){return false;}
			//이메일 형식에 맞지않으면
			if (!x.match(r)){return false;}
			return true;
		}
};	
app.context=(function(){
	return {init : function(context){
				$.getScript(context+'/resources/js/domain.js',function(){
				$.extend(new Session(context));
				app.algorithm.onCreate();
				app.member.onCreate();
				app.noticeBoard.onCreate();
				app.permission.onCreate();
				$('#wrapper').load($.context()+'/permission/form');
		})
	}};
})();