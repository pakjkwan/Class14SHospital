<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div id="container" class="width_full_size" style="height: 200px;position: relative;top: 100px">
<form id="loginForm">
  
<table>
	<tr>
		<td colspan="3"><span style="font-size: 20px;">로그인 또는
		<a href="join.html"style="text-decoration: none;line-height: inherit;">
			<span class="color_orange">회원가입</span>
			</a></span>
		</td>
	</tr>
	<tr>
		<td colspan="3" class="font_bold" style="font-size: 10px;">ID</td>
	</tr>
	<tr>
		<td colspan="3"> 
			<input type="text" name="id" placeholder="ID" class="width_full_size" style="font-size: 10px;padding: 4px;"/> </td>
	</tr>
	<tr>
		<td colspan="3" class="font_bold" style="font-size: 10px;">비밀번호</td>
	</tr>
	<tr>
		<td colspan="3"> <input type="password" name="password" placeholder="비밀번호" class="width_full_size" style="font-size: 10px;padding: 4px;"/> </td>
	</tr>
	<tr>
		<td colspan="2" class="color_orange" style="font-size: 10px;">비밀번호가 기억나지 않으세요?</td>
		<td style="height: 20px;" class="height_full_size bg_color_orange"></td>
	</tr>
	
</table>
  <input type="radio" name="permission" value="patient" checked> 고객
  <input type="radio" name="permission" value="doctor"> 의사
  <input type="radio" name="permission" value="nurse"> 간호사
  <input type="radio" name="permission" value="admin"> 관리자
<input type="hidden" name="action" value="login" />
<input type="hidden" name="page" value="main" />
<input id="loginBtn" type="button" value="로그인" />
</form>
</div>
<%-- <jsp:include page="../common/footer.jsp"/> --%>
<script>
$(function() {
	var $loginForm=$('#loginForm');
	$loginForm.addClass('margin_center').css('width','20%');
	var tab=$loginForm.find('table');
	$loginForm.find('input[value=로그인]').click(function(){
		var permission=$loginForm.find(':radio[name="permission"]:checked').val()
		alert('PERMISSION:'+permission);
		$loginForm.attr("action", "${context.path}/"+permission+"/login");
		$loginForm.attr("method", "post");
		var idVal=tab.find('input[name=id]').val();
		var pwVal=tab.find('input[name=password]').val(); 
		if(idVal==''||pwVal==''){
			alert('값을 먼저 입력해주세요');
		}else{
			alert(' 입력한 ID,PW 값 ID='+idVal+',PW='+pwVal);
			$loginForm.submit();
		}
	});
});
</script>
