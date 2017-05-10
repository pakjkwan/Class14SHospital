function articlesOnPage(pageNumber,wrapper,context,component){
			wrapper.empty();
			$.getScript(component,function(){
				wrapper.append(createSearchWindowOnArticles());
				wrapper.append(createArticlesOnPage());
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
	
	};
