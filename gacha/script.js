let state = 0;
let cheat = 0;
let rani = 0;
let picloop = null;
let delay = 1000;
document.addEventListener('keydown', function (event) {
  console.log(state)
    if (event.key === 'd') {
      document.body.style = "color: white; background-color: #111111";
      clearInterval(picloop)
    }
    if(state ==0){
      if (event.key === 'l') {
        document.body.style = '';
        clearInterval(picloop)
        picloop = setInterval(randompic,100);
        state = 1;
      }
    } 
    else if (state==1){
      if(event.key === 'l'){
        clearInterval(picloop)
        delay = 1000;
        stoppic();
      }
    }
  });

const randompic = () => {
    rani += Math.floor(Math.random()*(data.length-1)+1);
    n = data.length
    document.getElementById("random").src = "item/"+data[rani%n]["img"]
}

const stoppic = () => {
  if (delay <= 0){
    state = 0;
    document.body.style = "color: white; background-color: #00FF00";
  }else{
    rani += Math.floor(Math.random()*(data.length-1)+1);
    n = data.length
    document.getElementById("random").src = "item/"+data[rani%n]["img"]
    setTimeout(stoppic, 1100-delay)
    delay-=100;
  }
}
