<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div id="container" class="width_full_size" style="height: 600px">

<form id="registerForm" action="" style="width:40%;margin-top:35px" class="width_full_size margin_center">
<table>
<tr>
       <td class="color_blue">담당의사
       <select name="doctor" >
		      <option value="" selected>의사선택</option>
              <option value="dhong">피부과: 홍길동</option>
              <option value="dahn">내과: 안성기</option>
              <option value="dkim">외과: 김민종</option>
              <option value="dkim2">소아과: 김연아</option>
       </select>
       <select name="nurse" >
              <option value="">간호사선택</option>
              <option value="nkim">김은영</option>
              <option value="nyoon">윤성애</option>
              <option value="nshin">신지원</option>
              <option value="nyou">유정화</option>
        </select>
       </td>
</tr>
<tr>
    <td class="color_blue"> ID
    		<input type="text" name="id" placeholder="ID"/>
         <input type="button" name="check out" value="중복확인"/><br />
    </td>
</tr>

<tr>
     <td class="color_red"> 
     		영문 소문자 하나 이상을 포함한 영문 또는 영문+숫자만 입력해 주세요.
     </td>
</tr>
<tr>
     <td class="color_blue">이 름
     		<input type="text" name="name"/>
            <input type="button" name="check out" value="중복확인"/><br />
     </td>
</tr>
<tr>
     <td class="color_blue"> 이메일
            <input type="text" name="email"/>
     </td>
</tr>
<tr>
     <td class="color_blue">비밀번호
            <input type="text" name="password" />
     </td>
</tr>
<tr>
     <td class="color_blue">비밀번호 확인
            <input type="text" name="confirm" />
     </td>
</tr>
<tr>
       <td class="color_blue">주 소
              <input type="text" name="addr" />
       </td>
</tr>
<tr>
       <td class="color_blue">생년월일
       <select name="birth" >
		      <option value="" selected>생년선택</option>
              <option value="1985">1985</option>
              <option value="1986">1986</option>
              <option value="1987">1987</option>
              <option value="1988">1988</option>
       </select>
       <select name="month" >
              <option value="1">1월</option>
              <option value="2">2월</option>
              <option value="3">3월</option>
              <option value="4">4월</option>
              <option value="5">5월</option>
              <option value="6">6월</option>
              <option value="7">7월</option>
              <option value="8">8월</option>
              <option value="9">9월</option>
              <option value="10">10월</option>
              <option value="11">11월</option>
              <option value="12">12월</option>
              </select>
              <select name="date">
              <option value="1">1일</option>
              <option value="2">2일</option>
              <option value="3">3일</option>
              <option value="4">4일</option>
              <option value="5">5일</option>
              <option value="6">6일</option>
              <option value="7">7일</option>    
              <option value="8">8일</option>
              <option value="9">9일</option>
              <option value="10">10일</option>
              </select>
       </td>
</tr>
<tr>
       <td class="color_blue">전화번호 <br />
              <select name="telecom" >
              <option value="SKT">SKT</option>
              <option value="KTF">KTF</option>
              <option value="LG">LG</option>
              </select>
              <select name="phoneNo1" >
              <option value="SKT">010</option>
              <option value="KTF">019</option>
              <option value="LG">017</option> 
              </select>-
              <input type="text" name="phoneNo2" size="4"/>
              -
              <input type="text" name="phoneNo3" size="4"/>
       </td>
</tr>
<tr>
       <td class="color_blue">
 		직업 (두개이상 선택가능. 단 스텝은 병원관계자만 체크하세요)
       </td>
</tr>
<tr> 
<!-- 
job: 회사원 employee 개발자 developer 스텝 staff 의사 doctor 간호사 nurse 관리자 admin
 -->
       <td>
     	<input type="checkbox" name="job" value="employee"/>회사원
     	<input type="checkbox" name="job" value="develper"/>개발자
     	<input type="checkbox" name="job" value="staff"/>스텝
     	<input type="checkbox" name="job" value="doctor"/>의사
     	<input type="checkbox" name="job" value="nurse"/>간호사
     	<input type="checkbox" name="job" value="admin"/>관리자
       </td>
</tr>
<tr>
       <td class="color_blue">
       성별<input type="radio" name="gender" value="m"/>남 |
       <input type="radio" name="gender" value="f"  /> 여
       </td>
</tr>


</table>
<input type="hidden" name="action" value="register" />
<input type="hidden" name="page" value="main" />
 <input type="button" name="submitBtn" value="전송" style=width:200px; />
</form>
</div>
<script>
$(function(){
	var $registerForm=$('#registerForm');
	var tab=$registerForm.find('table');
	$('input[name=submitBtn]').click(function(){
		$registerForm.attr("action", "${context}/patient.do");
		$registerForm.attr("method", "post");
		$registerForm.submit();
	});
});
</script>








