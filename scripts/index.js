// Set the date we're counting down to
var countDownDate = new Date('Sep 15, 2020 10:00:00').getTime();

function countDown() {
  var now = new Date().getTime();

  var v = document.getElementById('demo');
  var g = document.getElementsByClassName('off');
  var a = document.getElementsByClassName('abner');

  var distance = countDownDate - now;
  console.log(distance, 'distance');

  var days = Math.ceil(distance / (1000 * 60 * 60 * 24));
  console.log(days, 'days');

  var check = distance / (1000 * 60 * 60 * 24);
  console.log(check, 'check');

  if (distance <= 0) {
    v.innerHTML = 'Åben!';
    v.classList.add('opened');

    g[0].style.display = 'none';
    g[1].style.display = 'none';
  } else if (check < 1.416 && check > 0.416) {
    {
      v.innerHTML = 'i morgen';
      v.classList.add('opened');
      a[0].innerHTML = 'Åbner';
      g[1].style.display = 'none';
    }
  } else if (check <= 0.416) {
    {
      v.innerHTML = 'kl. 10';
      v.classList.add('opened');
      a[0].innerHTML = 'Åbner';
      g[1].style.display = 'none';
    }
  } else {
    v.innerHTML = days;
  }
}

countDown();
