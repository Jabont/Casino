let state = 0;
let cheat = 0;
let rani = 0;
let picloop = null;
let delay = 1000;
let data = [];
normal.forEach(ele => {
  data.push(ele)
});
ssr.forEach(ele => {
  data.push(ele)
});
document.addEventListener('keydown', function (event) {
  console.log(state)
    if (event.key === 'q') {
      cheat=0
      document.getElementById("cheat").textContent = cheat
    }
    if (event.key === 'w') {
      cheat=1
      document.getElementById("cheat").textContent = cheat
    }
    if (event.key === 'e') {
      cheat=2
      document.getElementById("cheat").textContent = cheat
    }
    if (event.key === 'd') {
      document.getElementById("text").textContent = ""
      document.body.style = "color: white; background-color: #111111";
      clearInterval(picloop)
    }
    if(state ==0){
      if (event.key === ' ') {
        document.getElementById("text").textContent = ""
        document.body.style = '';
        clearInterval(picloop)
        picloop = setInterval(randompic,100);
        state = 1;
      }
    } 
    else if (state==1){
      if(event.key === ' '){
        state = 2;
        clearInterval(picloop)
        delay = 1000;
        stoppic();
      }
    }
  });

const randompic = () => {
    rani += Math.floor(Math.random()*(data.length-1)+1);
    n = data.length
    rani%=n;
    document.getElementById("random").src = "item/"+data[rani]["img"]
}

const stoppic = () => {
  if (delay <= 0){
    if(cheat==0){
      rani += Math.floor(Math.random()*(data.length-1)+1);
      n = data.length
      rani%=n;
      console.log("data")
      document.getElementById("random").src = "item/"+data[rani]["img"]
    document.getElementById("text").textContent = data[rani]["text"];
    }
    if(cheat==1){
      rani += Math.floor(Math.random()*(normal.length-1)+1);
      n = normal.length
      rani%=n;
      console.log("normal")
      document.getElementById("random").src = "item/"+normal[rani]["img"]
    document.getElementById("text").textContent = normal[rani]["text"];
    }
    if(cheat==2){
      rani += Math.floor(Math.random()*(ssr.length-1)+1);
      n = ssr.length
      rani%=n;
      console.log("ssr")
      document.getElementById("random").src = "item/"+ssr[rani]["img"]
    document.getElementById("text").textContent = ssr[rani]["text"];
    }
    state = 0;
    document.body.style = "color: white; background-color: #00FF00";
  }else{
    rani += Math.floor(Math.random()*(data.length-1)+1);
    n = data.length
    rani%=n;
    document.getElementById("random").src = "item/"+data[rani]["img"]
    setTimeout(stoppic, 1100-delay)
    delay-=100;
  }
}
