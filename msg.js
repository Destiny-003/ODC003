
  

  
  function messenger (){
    var msg = document.getElementById("msg").value;
     var msg2 = document.getElementById("msg2");

    msg2.innerHTML += `<p style= "
    color: snow;
    text-shadow: 1px 1px 2px rgb(56, 34, 9), 0 0 25px rgb(255, 255, 255), 0 0 5px rgb(71, 5, 62);
    border-radius: 33%;
    margin: auto;
    font-family: inherit;
    font-size: 0.99rem;
    line-height: 30px;
    direction: rtl;
    font-style: normal;
    background-color: rgba(46, 11, 11, 0.541);
    display: block; "> ${msg} </p>  <br> ` ;



var clear = document.getElementById("clear-msg").innerText;
document.getElementById("msg").value = clear;


}
function sendKey (event) {
  if (event.code == "Enter") {
   messenger();
  }
  
}

    // var can = document.getElementById("can");
    // can.innerHTML =` <div> ${msg2.innerHTML} </div> `;
    // localStorage.setItem("msg3",can);



    // msg2.onload = function ms() {
    // msg2.innerHTML += localStorage.getItem("msg3");
    
// if (localStorage.getItem("msg2")!=null ) {
//       msg2 = localStorage.getItem("msg3");
//     document.getElementById("msg2") = localStorage.getItem("msg3");
//     }
  // }

//  localStorage.clear();














// let url = location.pathname;
// let index = url.lastIndexOf("/") +1;
// let filename = url.substring(index);
// alert(filename);

// if (filename == "comm.html") {


  // localStorage.setItem("RESULT", msg2)
  
  // onload = ()=>{
  //       messenger(localStorage.getItem("RESULT"));
  //  }

// function messenger (){
//     var msg = document.getElementById("msg").value;

    
    // msg2.innerHTML += `<p style= "
    // color: snow;
    // text-shadow: 1px 1px 2px rgb(56, 34, 9), 0 0 25px rgb(255, 255, 255), 0 0 5px rgb(71, 5, 62);
    // border-radius: 33%;
    // margin: auto;
    // font-family: inherit;
    // font-size: 0.99rem;
    // line-height: 30px;
    // direction: rtl;
    // font-style: normal;
    // background-color: rgba(46, 11, 11, 0.541);
    // display: block; "> ${msg} </p>  <br> ` ;
   


// if (localStorage.getItem("msg")!=null ) {
      // msg2 = localStorage.getItem("msg");
    // document.getElementById("msg").value = localStorage.getItem("msg");


    // for (let i = 0; i < 100; i++) {
    //    localStorage.setItem("result", msg);
    // }
    
    // }


// }

// if (filename == "msg.html") {
//     localStorage.getItem("result");
// }