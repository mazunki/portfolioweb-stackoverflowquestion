function clearURL() {
	window.history.replaceState({}, "Rolf Vidar Hoksaas CV", location.pathname);
}
function loadContent(file) {
	var request = new XMLHttpRequest();
	request.open("GET", file+".html?_=" + new Date().getTime());
	request.onreadystatechange=function(){
		var loadedcontent = request.responseText;
		document.getElementById(file).innerHTML = loadedcontent;
	}
	request.send();
}

function setVisible(thisdiv){
	var alldivs = document.getElementsByClassName("container");
	[].forEach.call(alldivs, function(uniquediv){
		document.getElementById(uniquediv.id).style.display = "none";
		return;
	});
	document.getElementById(thisdiv).style.display = "block";
	window.scrollTo(0,0);   
	loadMenues(thisdiv);
}
window.onload = function(){
      loadContent("personalinfo");
      loadContent("academicalinfo");
      loadContent("employmentinfo");
}


