var module = {
        movePixels : 10, // number of pixels
        delayMs : 50, // number of miliseconds
        dogTimer : null,
        timeout : null,
        timeoutMs : 30000,


dogWalk: function() 
{
          var img = document.getElementsByTagName('img')[0];
          var currentLeft = parseInt(img.style.left);
          img.style.left = (currentLeft + this.movePixels) + 'px';
          // reset image position to start
          if (currentLeft > (window.innerWidth-img.width)) {
            img.style.left = '0px';
          }

},

startDogWalk: function()
{
        this.dogTimer = window.setInterval(this.dogWalk.bind(this), this.delayMs);
        document.getElementById("start-button").disabled = true;
},

stopDogWalk: function()
{
        clearInterval(this.dogTimer);
        document.getElementById("stop-button").disabled = false;
},

fasterDogWalk: function()
{
        this.movePixels = this.movePixels + 10;
        this.dogTimer = window.setInterval(this.dogWalk.bind(this), this.delayMs);
        document.getElementById("speed-button").disabled = true;
},

speedDogWalk: function()
{
        document.getElementById("info").innerHTML = movePixels/delayMs * 1000;
},

resetdogWalk: function() 
{
        this.movePixels = 10 ;
        document.getElementById("info").innerHTML = this.movePixels/this.delayMs * 1000;
        this.dogTimer = window.setInterval(this.dogWalk.bind(this), this.delayMs);
        document.getElementById("speed-button").disabled = true;
},

displayAlert: function() 
{
          alert("Sesiune expirata");
},
      
setAlert: function() 
{
          this.timeout =  window.setTimeout(this.displayAlert,this.timeoutMs);
},
      
resetAlert: function() 
{
          clearTimeout(this.timeout);
          this.setAlert();
},

init: function()
{
    document.getElementById("start-button").addEventListener("click", this.startDogWalk.bind(this));
    document.getElementById("stop-button").addEventListener("click", this.stopDogWalk.bind(this));
    document.getElementById("speed-button").addEventListener("click", this.fasterDogWalk.bind(this));
    document.getElementById("start-button").addEventListener("click", this.speedDogWalk.bind(this));
    document.getElementById("stop-button").addEventListener("click", this.speedDogWalk.bind(this));
    document.getElementById("speed-button").addEventListener("click", this.speedDogWalk.bind(this));
    document.getElementById("reset-button").addEventListener("click", this.resetdogWalk.bind(this));
    document.addEventListener("mousemove",this.resetAlert.bind(this));
    document.addEventListener("keypress",this.resetAlert.bind(this));
    document.addEventListener("click",this.resetAlert.bind(this));
    this.setAlert();
}

}

module.init();