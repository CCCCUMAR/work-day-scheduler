
    
    $(document).ready(function(){
        var todayDate = moment().format('dddd, MMM Do YYYY');
    let displayDate = document.getElementById("currentDay").innerHTML = todayDate;
   

    $(".saveBtn").on("click",function(){
        //console.log("the button has been pressed!")
        var userText = $(this).siblings(".description").val()
        var key = $(this).parent().attr("id")
        localStorage.setItem(key , userText);

    })

    $("#hour9 .description").val(localStorage.getItem("hour9"))
    $("#hour10 .description").val(localStorage.getItem("hour10"))
    $("#hour11 .description").val(localStorage.getItem("hour11"))
    $("#hour12 .description").val(localStorage.getItem("hour12"))
    $("#hour13 .description").val(localStorage.getItem("hour13"))
    $("#hour14 .description").val(localStorage.getItem("hour14"))
    $("#hour15 .description").val(localStorage.getItem("hour15"))
    $("#hour16 .description").val(localStorage.getItem("hour16"))
    $("#hour17 .description").val(localStorage.getItem("hour17"))


    
        //console.log(currentTime)
    
    function timeTracker() {
        var currentTime = moment().hours()
        $(".time-block").each(function(){
            var timeBlock = parseInt($(this).attr("id").split("hour")[1])
            //console.log(timeBlock)
            $(this).removeClass("past present future")
            if (timeBlock < currentTime){
                $(this).addClass("past")
                //$(this).removeClass("time-block")
            }
            else if (timeBlock == currentTime){
                $(this).addClass("present")
                //$(this).removeClass("time-block")
            }
            else if (timeBlock > currentTime){
                $(this).addClass("future")
                //$(this).removeClass("time-block")
            }
        })
    }

    timeTracker()
    })


    
    