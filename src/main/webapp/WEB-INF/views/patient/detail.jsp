<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<style>
.pat_detail {text-align: center; margin:0 auto;}
.pat_detail tr td{border: 1px solid #bbbbbb}
</style>
<div id="patDetail"
	class="con_setting" 
	style="position: relative; top: 50px; text-align:center; width:100%">
     <table class="pat_detail" >
           <tr style="text-align: left;">
                 <td colspan="5"><div><img src="${img}/common/defaultimg.jpg" alt="" width="160px"/></div></td>
           </tr>
           <tr>
                 <td style="width: 60px" rowspan="5"><span style="font-size: 20px">내<br />정<br />보</span></td>
                 <td style="width: 100px">이름</td>
                 <td id="patName" style="width: 150px">${sessionScope.user.patName}</td>
                 <td style="width: 100px">직업</td>
                 <td style="width: 150px"></td>
           </tr>
           <tr>
                 <td>생년월일</td>
                 <td>${requestScope.birth}</td>
                 <td>키</td>
                 <td> 180Cm</td>
           </tr>
           <tr>
                 <td>성별</td>
                 <td></td>
                 <td>나이/몸무게</td>
                 <td>  / 80kg </td>
           </tr>
           <tr>
                 <td>전화번호</td>
                 <td></td>
                 <td>혈액형</td>
                 <td> A형 </td>
           </tr>
           <tr>
                 <td>주소</td>
                 <td></td>
                 <td>주치의</td>
                 <td >
					<a onclick="docDetail()" href="#"> 한석규</a>
                 </td>
           </tr>
          
        
          
     </table>
     <button onclick="getPatDetail()">클릭</button>
</div>
<script>
function docDetail(){
	alert('의사ID 클릭');
	location.href="${context}/doctor.do?action=move&page=detail";
}
</script>
           

