document.addEventListener('readystatechange',function(){
	if(document.readyState == "complete"){
		var slides=document.querySelectorAll('.banner1');
		var W=document.documentElement.offsetWidth;
		window.onresize=function(){
		    W=document.documentElement.offsetWidth;
			for(var i = 0; i< slides.length; i++ ){
						slides[i].style.left=i*W+'px';
					}
		}
		window.onresize();

		var index=1;
		move=function(){
			var off = -(index*W);
			// console.log(off)
			index+=1;
			if(index==3){
				index=0;
			}
			for (var i =0;  i < slides.length; i++) {
				slides[i].style.transform='translateX('+off+'px)';
			};
		};
		var t=setInterval(move,5000);

	}
},false)