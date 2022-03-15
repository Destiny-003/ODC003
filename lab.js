


setInterval(()=>{
    fetch("http://destinyc.rf.gd/appApi/read.php").then(response => response.json())
    .then(data=>{
        data.reverse();
        let main = document.getElementById("content");
        main.innerHTML = '';
        data.forEach(element => {
        main.innerHTML += "<div class='bg-msg'>" + "<p class='message'>" + "<b style = 'color:blue;text-shadow:1px 1px 1px green'>" + element.user  + ": " + "</b>" + element.messages + "</p>" + "<div>";
    });
    
    });
    },1000);
    
    function clear() {
        let clean = document.getElementById("clean");
        clean.innerHTML ="";
    }
    function inter() {
        let cover =document.getElementById("cover");
        let inter =document.getElementById("inter");
        let move =document.getElementById("move");
            inter.style.display = "block";
            move.style.display = "none";
    }
    
    
