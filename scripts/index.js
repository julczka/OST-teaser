// Set the date we're counting down to
var countDownDate = new Date('Sep 15, 2020 09:37:25').getTime();

// Update the count down every 1 second
function countDown() {
  // Get today's date and time
  var now = new Date().getTime();

  var v = document.getElementById('demo');
  var g = document.getElementsByClassName('off');

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  v.innerHTML = days;
  // + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

  // If the count down is finished, write some text
  if (distance < 0) {
    v.innerHTML = 'Åben!';
    v.classList.add('opened');

    g[0].style.display = 'none';
    g[1].style.display = 'none';
  }

  function turnOff(el) {
    el.style.display = 'none';
  }
}

countDown();
