function loadMenues(file) {
        var rightmenu = document.getElementById("right-menu");
        while(rightmenu.firstChild){
                rightmenu.removeChild(rightmenu.firstChild);
        }
        [].forEach.call(document.getElementById(file).children, function(custompaddingchild) {
                console.log(custompaddingchild);
                const headerelement = custompaddingchild.getElementsByTagName("h1")[0]
                console.log(headerelement.innerHTML);
                const newbutton = document.createElement("div");
                newbutton.setAttribute("class", "menu-item");
                /*newbutton.setAttribute("click", "location.href=#headerpersonalinfo");*/
                console.log(headerelement.id);
                let movehere = function() { location.href="#"+headerelement.id; console.log(headerelement.id); }
                newbutton.onclick = movehere;
                const rightmenu = document.getElementById("right-menu");
                const buttonspanner = document.createElement("span");
                buttoncontent = document.createTextNode(headerelement.innerHTML);
                buttonspanner.appendChild(buttoncontent);
                newbutton.appendChild(buttonspanner);
                rightmenu.appendChild(newbutton);
        });
}
/*window.onload = function(){*/ 
	setVisible("personalinfo");
/*}*/

