<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div >
	<img src="${context}/resources/img/close-button.png" alt="" class="popup-close closeBtn cursor"/>
</div>
<div class="loginDiv txt-c">
	
	<div class="loginTop">
			<h2>
				<p>LOGIN</p>
			</h2>
	</div>
	<div class="loginCenter mt-50">
		<form action="${root}/member/login" method="post" name="frmLogin">
			<fieldset class="login_form">
				<div class="input_row">
					<span class="input_box"> 
					<input type="text" id="userId" name="userId" placeholder="아이디" class="loginInput" maxlength="20">
					</span>
				</div>
				<div class="input_row">
					<span class="input_box"> 
					<input type="password" id="userPw" name="userPw" placeholder="비밀번호" class="loginInput" maxlength="20">
					</span>
				</div>
				<div class="loginBox">
					<a href="#" class="memberbtn h30 w100 pupple" title="로그인"	onClick="javascript:formChk()">
					<b>로그인</b>
					</a>
					
					<p><a href="#" onclick="searchId()"><b>아이디/비밀번호찾기</b></a></p>
				</div>
			</fieldset>
		</form>
		<br /><br /><br />
	</div>
</div>

<script type="text/javascript">
 $(function() {
	 $('.popup-close').click(function(e) {
			e.preventDefault();
			$.magnificPopup.close();
		});
});
	function searchId() {
		window.open("${root}/member/searchId",
		"searchId",
		"scrollbars, toolbar=no, location=no, directories=no,status=no, menubar=yes, resizable=yes, width=400, height=300, top=200, left=400");
	}
	function formChk(){
	    if(document.frmLogin.userId.value==''){
	      alert("아이디를 입력해주세요.");
	      document.frmLogin.userId.focus();
	      event.preventDefault();
	    }else if(document.frmLogin.userPw.value==''){
	      alert("비밀번호를 입력해주세요.");    
	      document.frmLogin.userPw.focus();
	      event.preventDefault();
	    }else{
	       document.frmLogin.submit(); 
	       return true;
	    }
	}
</script>