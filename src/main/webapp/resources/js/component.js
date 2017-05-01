function horList(arr,type){
	var list='<div class="btn-group" role="group" aria-label="...">';
	$.each(arr,function(i,j){
		list+='<button id="list-button-"'+i+' type="button" class="btn btn-'+type+'">'+arr[i]+'</button>';
	});
	list+='</div>';
	return list;
}
function divAlert(type){ // alert-danger
	return $('<div class="alert '+type+'" role="alert">example</div>');
}