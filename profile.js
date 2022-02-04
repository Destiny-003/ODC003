var coll = document.getElementsByClassName("coll");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

 function prob() {
   location.assign ("comm.html")
 }  
    var proimg = document.getElementById("proimg")
   document.getElementById("propic").onchange = function propic() {
       localStorage.setItem("propic",document.getElementById("propic").value);
       proimg = localStorage.getItem("propic");
   }

// if (localStorage.getItem("propic")!=null ) {
//     proimg = localStorage.getItem("propic");
//     document.getElementById("propic").value = proimg;
// }