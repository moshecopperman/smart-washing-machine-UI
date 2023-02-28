document.getElementById("start").onclick = function(){
    let elem_count_back = document.getElementById("count_back");
    let elem_status = document.getElementById("start");
    let elem_degrees = document.getElementById("degrees");
    let elem_type = document.getElementById("type");
    let elem_rpm = document.getElementById("rpm");
    let num = 10;
    let id = setInterval(number, 1000);
    elem_status.innerHTML="In progress";
    elem_degrees.innerHTML="Degrees: 40";
    elem_type.innerHTML="Color";
    elem_rpm.innerHTML="rpm: 1000";
    
    function number(){
        if(num<=0){
            clearInterval(id);
            elem_status.innerHTML = "Finished";
            elem_degrees.style.visibility = "hidden";
            elem_rpm.style.visibility = "hidden";
            elem_type.style.visibility = "hidden";
            id=setInterval(finish,1000);
        }else{
            num--;
            elem_count_back.innerHTML = num;
            elem_degrees.style.visibility = "visible";
            elem_rpm.style.visibility = "visible";
            elem_type.style.visibility = "visible";
        }
    }

    function finish(){
        elem_status.innerHTML = "Start";
        clearInterval(id);
    }
   
}

document.getElementById("color_bar").onmouseenter = function (){
    var i=0;
    var height=0;
    var elem_color = document.getElementById("color_bar");
    //var elem_white = document.getElementById("white_bar");
    //var elem_delicate = document.getElementById("delicate_bar");
    //var elem_other = document.getElementById("other_bar");

    if(i==0){
        i=1;
        var id = setInterval(frame, 500);
        function frame(){
            if(height >= 100){
                clearInterval(id);
                i=0;
            }else{
                height++;
                elem_color.style.height = height + "%";
                elem_color.style.color = "black";
                elem_color.innerHTML = "color " + height + "%";
            }

        }
    }
}

//document.getElementById("color_bar").onmouseover = bar(document.getElementById("color_bar"));
//document.getElementById("white_bar").onmouseover = bar(document.getElementById("white_bar"));
//document.getElementById("delicate_bar").onmouseover = bar(document.getElementById("delicate_bar"));
//document.getElementById("other_bar").onmouseover = bar(document.getElementById("other_bar"));





