var app = document.getElementById("dropdown");
function doItems(){
  var content = app.firstChild.nextSibling; // this is dropdown-content, nextsibling because 'application text' is child one
  if(content.getAttribute('class') == "hide"){
    console.log("entered");
    content.className = 'dropdown-content';
  }
  else if(content.getAttribute('class') == "dropdown-content"){
    content.className = 'hide';
  }
}

app.addEventListener('click',doItems,false);