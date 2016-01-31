document.addEventListener('readystatechange',function(){
	if(document.readyState == "complete"){
		var slides=document.querySelectorAll('.banner1');
		var xiaodian=document.querySelectorAll(".dotnav ul li");
		var curdian=xiaodian[0];
		var W=document.documentElement.offsetWidth;
		window.onresize=function(){
		    W=document.documentElement.offsetWidth;
			for(var i = 0; i< slides.length; i++ ){
						slides[i].style.left=i*W+'px';
					}
		}
		window.onresize();

		var move=(function(){
			var index=1;
			return function(){
				curdian.classList.remove("current");
			    curdian=xiaodian[index];
			    curdian.classList.add("current");
				var off = -(index*W);
				index+=1;
				if(index==3){
					index=0;
				}
				for (var i =0;  i < slides.length; i++) {
					slides[i].style.transform='translateX('+off+'px)';
				}
			}
		})()

		for(var i=0;i<xiaodian.length;i++){
			xiaodian[i].index=i;
			xiaodian[i].onclick=function(){
				curdian.classList.remove("current");
				curdian=this;
				this.classList.add("current");
				var off=-this.index*W;
				for(var j=0;j<slides.length;j++){
		     	slides[j].style.transform="translateX("+off+"px)";
		     	slides[j].style.transform="-webkit-translateX("+off+"px)";
		     }
				clearInterval(t);
			}
		}
		var t=setInterval(move,5000);

	}
},false)