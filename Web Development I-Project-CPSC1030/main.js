function red(){
                
	document.getElementById("icon").style.color = "#EA202C";
	document.getElementById("nav1").style.background = "#950E17";
	document.getElementById("rooms").style.background = "#950E17";
	document.getElementById("num").style.background = "#950E17";
	document.getElementById("current-room").style.background = "#950E17";
	document.getElementById("members").style.background = "#950E17";
	document.getElementById("change1").style.background = "#950E17";
	document.getElementById("change2").style.background = "#950E17";
	document.getElementById("change3").style.background = "#950E17";
	document.getElementById("menu").style.background = "#950E17";
	document.getElementById("user").style.background = "#950E17";
	document.getElementById("input").style.background = "#950E17";
	document.getElementById("messages").classList.add("red");
	document.getElementById("messages").classList.remove("blue");
	document.getElementById("messages").classList.remove("blue1");
	document.getElementById("messages").classList.remove("green");
	document.getElementById("hi").style.background = "#FCDEE0";
	document.getElementById("first").style.background = "#EA202C";
	document.getElementById("second").style.background = "#EA202C";
	document.getElementById("third").style.background = "#EA202C";
	document.getElementById("four").style.background = "#EA202C";
	document.getElementById("first1").style.background = "#EA202C";
	document.getElementById("first").style.color = "white";
	document.getElementById("second").style.color = "white";
	document.getElementById("third").style.color = "white";
	document.getElementById("four").style.color = "white";
	document.getElementById("first1").style.color = "white";
	document.getElementById("buttonResponsive").style.background = "#EA202C";
	document.getElementById("buttonResponsive1").style.backgroundColor = "#EA202C";
	document.getElementById("buttonResponsive1").style.Color = "black";
	document.getElementById("whats").style.backgroundColor = "#EA202C";
	document.getElementById("whats1").style.backgroundColor = "#EA202C";
	document.getElementById("whats1").style.color = "white";

	setTimeout(function(){
		for (let i = 0; i < document.getElementById("messages").getElementsByTagName("div").length; i++) {
			document.getElementById("messages").getElementsByTagName("div")[i].style.background= "#950E17";
			document.getElementById("messages").getElementsByTagName("div")[i].style.color= "white";	
		}			
		document.getElementById("members").getElementsByClassName("self")[0].style.background= "#950E17";
	}, 100);

}
function blue(){
	document.getElementById("icon").style.color = "#b0befa";
	document.getElementById("nav1").style.background = "#0d34e0";
	document.getElementById("rooms").style.background = "#0d34e0";
	document.getElementById("num").style.background = "#0d34e0";
	document.getElementById("current-room").style.background = "#0d34e0";
	document.getElementById("members").style.background = "#0d34e0";
	document.getElementById("change1").style.background = "#0d34e0";
	document.getElementById("change2").style.background = "#0d34e0";
	document.getElementById("change3").style.background = "#0d34e0";
	document.getElementById("menu").style.background = "#0d34e0";
	document.getElementById("user").style.background = "#0d34e0";
	document.getElementById("input").style.background = "#0d34e0";
	document.getElementById("messages").classList.add("blue");
	document.getElementById("messages").classList.remove("red");
	document.getElementById("messages").classList.remove("blue1");
	document.getElementById("messages").classList.remove("green");
	document.getElementById("hi").style.background = "#ebeefe";
	document.getElementById("first").style.background = "#b0befa";
	document.getElementById("second").style.background = "#b0befa";
	document.getElementById("third").style.background = "#b0befa";
	document.getElementById("four").style.background = "#b0befa";
	document.getElementById("first1").style.background = "#b0befa";
	document.getElementById("first").style.color = "#0d34e0";
	document.getElementById("second").style.color = "#0d34e0";
	document.getElementById("third").style.color = "#0d34e0";
	document.getElementById("four").style.color = "#0d34e0";
	document.getElementById("first1").style.color = "#0d34e0";
	document.getElementById("buttonResponsive").style.background = "#ebeefe";
	document.getElementById("buttonResponsive1").style.backgroundColor = "#ebeefe";
	document.getElementById("buttonResponsive1").style.Color = "black";
	document.getElementById("whats").style.backgroundColor = "#b0befa";
	document.getElementById("whats1").style.backgroundColor = "#b0befa";
	document.getElementById("whats1").style.color = "#0d34e0";
	
	setTimeout(function(){
		for (let i = 0; i < document.getElementById("messages").getElementsByTagName("div").length; i++) {
			document.getElementById("messages").getElementsByTagName("div")[i].style.background= "#b0befa";
			document.getElementById("messages").getElementsByTagName("div")[i].style.color= "#091034";	
		}			
		document.getElementById("members").getElementsByClassName("self")[0].style.background= "#0d34e0";

	}, 100);



}

function green(){
	document.getElementById("icon").style.color = "#66B032";
	document.getElementById("nav1").style.background = "#375F1B";
	document.getElementById("rooms").style.background = "#375F1B";
	document.getElementById("num").style.background = "#375F1B";
	document.getElementById("current-room").style.background = "#375F1B";
	document.getElementById("members").style.background = "#375F1B";
	document.getElementById("change1").style.background = "#375F1B";
	document.getElementById("change2").style.background = "#375F1B";
	document.getElementById("change3").style.background = "#375F1B";
	document.getElementById("menu").style.background = "#375F1B";
	document.getElementById("user").style.background = "#375F1B";
	document.getElementById("input").style.background = "#375F1B";
	document.getElementById("messages").classList.add("green");
	document.getElementById("messages").classList.remove("red");
	document.getElementById("messages").classList.remove("blue1");
	document.getElementById("messages").classList.remove("blue");
	document.getElementById("hi").style.background = "#9BD770";
	document.getElementById("first").style.background = "#66B032";
	document.getElementById("second").style.background = "#66B032";
	document.getElementById("third").style.background = "#66B032";
	document.getElementById("four").style.background = "#66B032";
	document.getElementById("first1").style.background = "#66B032";
	document.getElementById("first").style.color = "white";
	document.getElementById("second").style.color = "white";
	document.getElementById("third").style.color = "white";
	document.getElementById("four").style.color = "white";
	document.getElementById("first1").style.color = "white";
	document.getElementById("buttonResponsive").style.background = "#9BD770";
	document.getElementById("buttonResponsive1").style.backgroundColor = "#9BD770";
	document.getElementById("buttonResponsive1").style.Color = "black";
	document.getElementById("whats").style.backgroundColor = "#9BD770";
	document.getElementById("whats1").style.backgroundColor = "#9BD770";
	document.getElementById("whats1").style.color = "#white";
	
	
	setTimeout(function(){
		for (let i = 0; i < document.getElementById("messages").getElementsByTagName("div").length; i++) {
			document.getElementById("messages").getElementsByTagName("div")[i].style.background= "#375F1B";
			document.getElementById("messages").getElementsByTagName("div")[i].style.color= "white";	
		}	
		document.getElementById("members").getElementsByClassName("self")[0].style.background= "#375F1B";				
	}, 100);
				
				

}
function join1(){
	document.getElementById("icon").style.color = "#b0befa";
	document.getElementById("nav1").style.background = "#0d34e0";
	document.getElementById("rooms").style.background = "#0d34e0";
	document.getElementById("num").style.background = "#0d34e0";
	document.getElementById("current-room").style.background = "#0d34e0";
	document.getElementById("members").style.background = "#0d34e0";
	document.getElementById("change1").style.background = "#0d34e0";
	document.getElementById("change2").style.background = "#0d34e0";
	document.getElementById("change3").style.background = "#0d34e0";
	document.getElementById("menu").style.background = "#0d34e0";
	document.getElementById("user").style.background = "#0d34e0";
	document.getElementById("input").style.background = "#0d34e0";
	document.getElementById("messages").classList.add("blue1");
	document.getElementById("messages").classList.remove("red");
	document.getElementById("messages").classList.remove("blue");
	document.getElementById("messages").classList.remove("green");
	document.getElementById("hi").style.background = "#ebeefe";
	document.getElementById("first").style.background = "#b0befa";
	document.getElementById("second").style.background = "#b0befa";
	document.getElementById("third").style.background = "#b0befa";
	document.getElementById("four").style.background = "#b0befa";
	document.getElementById("first1").style.background = "#b0befa";
	document.getElementById("first").style.color = "#0d34e0";
	document.getElementById("second").style.color = "#0d34e0";
	document.getElementById("third").style.color = "#0d34e0";
	document.getElementById("four").style.color = "#0d34e0";
	document.getElementById("first1").style.color = "#0d34e0";
	document.getElementById("buttonResponsive").style.background = "#ebeefe";
	document.getElementById("buttonResponsive1").style.backgroundColor = "#ebeefe";
	document.getElementById("buttonResponsive1").style.Color = "black";
	document.getElementById("whats").style.backgroundColor = "#b0befa";
	document.getElementById("whats1").style.backgroundColor = "#b0befa";
	document.getElementById("whats1").style.color = "#0d34e0";
	
	setTimeout(function(){
		for (let i = 0; i < document.getElementById("messages").getElementsByTagName("div").length; i++) {
			document.getElementById("messages").getElementsByTagName("div")[i].style.background= "#b0befa";
			document.getElementById("messages").getElementsByTagName("div")[i].style.color= "#091034";	
		}			
		document.getElementById("members").getElementsByClassName("self")[0].style.background= "#0d34e0";
	}, 100);

}
       