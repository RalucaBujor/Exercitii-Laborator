window.onload = myMain;
function myMain() {
    document.getElementById("start-button").addEventListener("click", startDogWalk);
    document.getElementById("stop-button").addEventListener("click", stopDogWalk);
    document.getElementById("speed-button").addEventListener("click", fasterDogWalk);
    document.getElementById("start-button").addEventListener("click", speedDogWalk);
    document.getElementById("stop-button").addEventListener("click", speedDogWalk);
    document.getElementById("speed-button").addEventListener("click", speedDogWalk);
    document.getElementById("reset-button").addEventListener("click", resetdogWalk);
    document.addEventListener("mousemove",resetAlert);
    document.addEventListener("keypress",resetAlert);
    document.addEventListener("click",resetAlert);
    setAlert();

}
        var movePixels = 10; // number of pixels
        var delayMs = 50; // number of miliseconds
        var dogTimer = null;
        var timeout = null;
        var timeoutMs = 30000;

      
        // Move the image on screen with 10px
        function dogWalk() {
          var img = document.getElementsByTagName('img')[0];
          var currentLeft = parseInt(img.style.left);
          img.style.left = (currentLeft + movePixels) + 'px';
          // reset image position to start
          if (currentLeft > (window.innerWidth-img.width)) {
            img.style.left = '0px';
          }
        }
      
        // Call dogWalk function every 50 ms
        function startDogWalk() {
        dogTimer = window.setInterval(dogWalk, delayMs);
        document.getElementById("start-button").disabled = true;
        }

        function stopDogWalk(){
        clearInterval(dogTimer);
        document.getElementById("stop-button").disabled = false;
        }

        function fasterDogWalk(){
        movePixels = movePixels + 10;
        dogTimer = window.setInterval(dogWalk, delayMs);
        document.getElementById("speed-button").disabled = true;
       }

       function speedDogWalk(){
        document.getElementById("info").innerHTML = movePixels/delayMs * 1000;
       }

       function resetdogWalk() {
        movePixels = 10 ;
        document.getElementById("info").innerHTML = movePixels/delayMs * 1000;
        dogTimer = window.setInterval(dogWalk, delayMs);
        document.getElementById("speed-button").disabled = true;
        }

        function displayAlert() {
          alert("Sesiune expirata");
      }
      
      function setAlert() {
          timeout =  window.setTimeout(displayAlert,timeoutMs);
      }
      
      function resetAlert() {
          clearTimeout(timeout);
          setAlert();
      }

        
      