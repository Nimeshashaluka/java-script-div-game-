function m(event) {


    var key = event.which;
    if (key == 32) {

        setInterval(f, 700);
    }

    // alert(key);





    if (event.which === 65) { ////left

        var d1 = document.getElementById("d1");
        var c = window.getComputedStyle(d1).marginLeft;
        var move = parseInt(c) - 50; // move = move + 10;


        d1.style.marginLeft = move + ("px");




    }



    if (event.which === 68) { ////Rait

        var d1 = document.getElementById("d1");
        var c = window.getComputedStyle(d1).marginLeft;
        var move = parseInt(c) + 50; // move = move + 10;

        d1.style.marginLeft = move + ("px");





    }


    if (event.which === 87) { ////uda

        var d1 = document.getElementById("d1");
        var c = window.getComputedStyle(d1).marginTop;
        var move = parseInt(c) - 50; // move = move + 10;

        d1.style.marginTop = move + ("px");




    }


    if (event.which === 83) { ////yata

        var d1 = document.getElementById("d1");
        var c = window.getComputedStyle(d1).marginTop;
        var move = parseInt(c) + 50; // move = move + 10;

        d1.style.marginTop = move + ("px");




    }




}

var s = 0;

function n(i) {

    var d = document.getElementById(i);
    var c = window.getComputedStyle(d).marginLeft;
    var x = parseInt(c) - 10;

    d.style.marginLeft = x + "px";

    if (x < 0) {
        if (d.style.visibility = "hidden") {
            window.location = "index.html";
            alert("Game Over !");

        }
    }

    s = s + 1;
    document.getElementById("h").innerHTML = s;
}

var q = 0;

function f() {
    var x = Math.floor(Math.random() * 2000) + 500;
    var y = Math.floor(Math.random() * 500);


    var b = document.body;
    var d = document.createElement("div");
    d.className = "d1";
    d.id = "di" + q;

    d.onclick = function() {

        d.style.visibility = "hidden";

    };

    d.style.marginLeft = x + "px";
    d.style.marginTop = y + "px";
    b.appendChild(d);

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // var d = document.getElementById("div");

    d.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

    setInterval(n, 100, "di" + q);

    q = q + 1;
}