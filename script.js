var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


cheddarsvg = document.getElementById("cheddar")
cheddarsvg.addEventListener("click",function(){
  console.log(cheeses["cheddar"].wines)
})

cheddarsvg.addEventListener("click" , function(){
  window.alert(cheeses["cheddar"].wines);
});

classicbluesvg = document.getElementById("classicblue")
classicbluesvg.addEventListener("click",function(){
  console.log(cheeses["classicblue"].wines)
})

classicbluesvg.addEventListener("click" , function(){
  window.alert(cheeses["classicblue"].wines);
});


epoissesdesvg = document.getElementById("epoissesde")
epoissesdesvg.addEventListener("click",function(){
  console.log(cheeses["epoissesde"].wines)
})

epoissesdesvg.addEventListener("click" , function(){
  window.alert(cheeses["epoissesde"].wines);
});

gruyeresvg = document.getElementById("gruyere")
gruyeresvg.addEventListener("click",function(){
  console.log(cheeses["gruyere"].wines)
})

gruyeresvg.addEventListener("click" , function(){
  window.alert(cheeses["gruyere"].wines);
});

manchegosvg = document.getElementById("manchego")
manchegosvg.addEventListener("click",function(){
  console.log(cheeses["manchego"].wines)
})

manchegosvg.addEventListener("click" , function(){
  window.alert(cheeses["manchego"].wines);
});

parmigianoreggianoSvg = document.getElementById("parmigianoreggiano")
parmigianoreggianoSvg.addEventListener("click",function(){
  console.log(cheeses["parmigianoreggiano"].wines)
})

parmigianoreggianoSvg.addEventListener("click" , function(){
  window.alert(cheeses["parmigianoreggiano"].wines);
});




// function (cheeses.on(click) === true){
// window.alert(getElementById.wines);
// }

// window.alert(cheeses["manchego"].wines);
// window.alert(cheeses["gruyere"].wines);
// window.alert(cheeses["parmigianoreggiano"].wines);
// window.alert(cheeses["epoissesde"].wines);
// window.alert(cheeses["cheddar"].wines);





// if (confirm (cheddarsvg === true)
  // alert("cheeses["cheddar"].wines");




/* parmigianoreggianoSvg = document.getElementById(cheeses.["parmigianoreggiano".name]).style.display = "none";
*/



/*add the names on hover*/



/*cheeses["cheddar"].wines*/
