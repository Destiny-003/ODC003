
// class App{

//     constructor(){
//      this.setItem("ss","Miryam");
//     }
//      setItem(man, wenam){
       
//      var text1 = document.getElementById("text1");

//      text1.innerHTML += "<h1>" + man + "</h1>";
//      text1.innerHTML += "<p>" + wenam + "</p>";

//      }
    
//   }
//    onload = new App();

//   document.getElementById("color").onchange = function color() {
//        localStorage.setItem("color",document.getElementById("color").value);
//        document.body.style.background = localStorage.getItem("color");
//    }

// if (localStorage.getItem("color")!=null ) {
//     document.body.style.background = localStorage.getItem("color");
//     document.getElementById("color").value = localStorage.getItem("color");
// }

function signin() {
  //  var at = document.getElementById("mail").value.indexOf("@");
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
  //  var fname = document.getElementById("fname").value;
    submitOK = "true";
  
    // if (fname.length > 10) {
    //   alert("The name may have no more than 10 characters");
    //   submitOK = "false";
    // } 
    //   if (fname == "") {
    //     alert("لم تقم بادخال الاسم الاول!")
    //     submitOK = "false";
    // }
  
    // if (isNaN(age) || age < 1 || age > 100) {
    //   alert("يجب ان يكون العمر بين 1 و100 عام");
    //   submitOK = "false";
    // }

    // if (at != "@") {
    //   alert("عنوان البريد الالكتروني غير صحيح!");
    //   submitOK = "false";
    // }

    if (mail != "isa003@gmil.com") {
        alert("عنوان البريد الالكتروني غير صحيح!");
        submitOK = "false";
      }

      // if (pass < 7) {
      //   alert("يجب ادخال 7 حروف على الاقل للرمز السري");
      //   submitOK = "false";
      // }
      if (pass != "1234567") {
        alert("الرمز السري غير صحيح!");
        submitOK = "false";
      }

    if (submitOK == "false") {
      return false;
    }
  }
