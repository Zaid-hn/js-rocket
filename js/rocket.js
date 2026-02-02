var timer = null;
var countdown = 10;

var changestate = function(state) {
    document.body.className = 'body-state'+state;
    countdown = 10;
    document.getElementById('countdownNumber').innerHTML = countdown;
    clearInterval(timer);

    if (state == 2){
        timer = setInterval(function(){
            countdown -= 1 ;
            document.getElementById('countdownNumber').innerHTML = countdown;
            if (countdown <= 0){
                changestate(3);
            };
        }, 650);
    } else if (state == 3){
        setTimeout(function(){
            changestate(4);
        }, 2000);
    }
};
