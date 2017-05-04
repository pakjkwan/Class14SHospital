function arithmeticSeries(x,y,z){
	var start=x;
	var limit=y;
	var diff=z;
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
}
function switchSeries(limit){
		//1,-2,3,-4,5,-6
		var sum = 0;
		 var flag=-1;
		 for(i=0;i<=limit;i++){
			sum += flag*i;
			flag = -1*flag;
		 }
		return sum;
}
function differenceSeries(limit){
	//1,2,4,7,11
	var sum = 1,total=0;
	var total = 0;
	for(i=0;i<limit;i++){
		sum += i;
		total += sum ;
	}
	return total;
};
function factorial(limit){
	//1!,1!+2!,1!+2!+3!,1!+2!+3!+4!,1!+2!+3!+4!+5!
	 var sum = 1, total = 0;
	 for(i=1;i<=limit;i++){
		 sum = sum*i;
		 total += sum;
	 }
	 if(limit == 0){total = 0;}else if(limit == 1){total = 1;}
	return total;
};
function fibonacci(limit){
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
function ascSort(arr){
	var i=0,j=0,k=0;
	for(i=0;i<arr.length;i++){
		for(j=i;j<arr.length;j++){
			if(arr[i]>arr[j+1]){
				k = arr[i];
				arr[i] = arr[j+1];
				arr[j+1] = k;
			}
		}
	}
	return arr;
}
function selectSort(x,y,z){
	var i=0,j=0,k=0;
	var arr=randomGen(x,y,z);
	for(i=0;i<arr.length;i++){
		for(j=i;j<arr.length;j++){
			if(arr[i]>arr[j+1]){
				k = arr[i];
				arr[i] = arr[j+1];
				arr[j+1] = k;
			}
		}
	}
	return arr;
}
function bubbleSort(x,y,z){
	var arr=randomGen(x,y,z);
	var i=0,j=0,k=0;
	for(i=0;i<arr.length;i++){
		for(j=0;j<arr.length;j++){
			if(arr[j]>arr[j+1]){
				k=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=k;
			}
		}
	}
	return arr;
}
function insertSort(x,y,z){  
	var arr=randomGen(x,y,z);
	// notComplete
	return arr;
}
function ranking(arr){
	var rank=[1,1,1,1,1,1];
	for(var i=0;i<arr.length;i++){
		for(var k=0;k<arr.length;k++){
			if(arr[i]<arr[k]){
				rank[i]++;
			}
		}
	}
	return rank;
}
function binSearch(x,arr){ // notComplete
	var fnum=(arr.length-1)-(arr.length-2);
	var pnum=arr.length-1;
	var i=x*1;
	for(i=0;i<pnum;i++){
		if(fnum<=pnum){
			var m=Math.floor((fnum+pnum)/2);
			if(x==arr[m]){
				var result=m;
				break;
			}
			if(x<arr[m]){
				fnum=m+1;
			}else{
				pnum=m-1;
			}
	}
	}
	return arr[m];
}
function randomGen(theNumberOfRandoms,biginNumber,endNumber){
	var i=0,k=0;
	var x=[];
	for(;i<theNumberOfRandoms;i++){
		x[i]=Math.floor(Math.random() * endNumber) + biginNumber;
		for(k=i;k>0;k--){
			if(x[i]==x[k-1]){
				i--;
			}
		}
	}
	return x;
}
function fiveByFive(){
	var mtx = new Array(new Array(5), new Array(5),new Array(5), new Array(5),new Array(5));
	var x=[
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
	return x;
}
function primefactor(x){
	
	var prime=2;
	var val=val;
	var y='';
	for(i=0;i<=val;i++){
		if(val%prime!=0){
			prime++;
		}else{
			val/=prime;
			y+=prime+'*';
		}
	}
	return y;
}
function sumOfMultiplesOfTargetFromStartToEnd(p,q,r){
	var x=0,i=0;
	for(i=q;i<=r;i++){
		if(i%p==0){
			x+=i;
		}
	}
	return x;
}

