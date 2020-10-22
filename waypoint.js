Waypoint;

//selectors
const header = document.getElementById('header');
const headList = document.querySelectorAll('.shortKey ul li');
const white = document.getElementById('white');

var trigger;

if(window.innerWidth >= 690){
    trigger = document.getElementById('carousel-container');
}
else if(window.innerWidth <= 425) {
    trigger = document.getElementById('hamicon-div');
}

window.addEventListener("resize", function(){
    if(window.innerWidth >= 690){
        trigger = document.getElementById('carousel-container');
    }
    else if(window.innerWidth <= 425) {
        trigger = document.getElementById('hamicon-div');
    }
})


var j = 0;
var waypoint = new Waypoint({
    element: trigger,
    handler: function(direction){
        if (j % 2 == 0) {
            header.classList.add("newHeader");
            btn.classList.add("newBtn");
            white.classList.add("primary");
            white.classList.remove("white");
            document.getElementById("hamicon").style.color = "#2f55d4";
            for(let i = 0; i < headList.length; i++)
            {
                headList[i].classList.add("wayLI");
            }
            j++;
        }
        else {
            header.classList.remove("newHeader");
            btn.classList.remove("newBtn");
            white.classList.add("white");
            white.classList.remove("primary");
            document.getElementById("hamicon").style.color = "white";
            for(let i = 0; i < headList.length; i++)
            {
                headList[i].classList.remove("wayLI");
            }
            j++;
        }
    }
})

var Absolute = new Waypoint({
    element: trigger,
    handler: function (direction) {
        if(window.innerWidth <= 425) {
            hamDiv.style.position = "absolute";
            hamDiv.style.backgroundColor = "var(--priColor)";
        }
    }
})

m = 0;
var stickAbsolute = new Waypoint({
    element: trigger,
    handler: function (direction) {
        if(window.innerWidth <= 425) {
            if (m % 2 === 0) {
                hamDiv.style.position = "sticky";
                hamDiv.style.backgroundColor = "var(--dullwhite)";
                document.getElementById("carousel-container").style.top = "-25vh";
                document.getElementById("carousel").style.padding = "20px";
                document.getElementById("carousel").setAttribute("style", "height: 10vh !important; padding : 20px 0; ");
                m++;
            }
            else {
                hamDiv.style.position = "absolute";
                document.getElementById("carousel-container").style.top = "0";
                document.getElementById("carousel").setAttribute("style", "height: 47vh !important; padding : 100px 0; ");
                hamDiv.style.backgroundColor = "var(--priColor)";
                m++;
            }
        }
    }
  })