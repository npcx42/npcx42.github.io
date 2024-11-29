function showTextInConsole() {
  console.log("всё что вы видите на сайте чистая правда. 1488 911");
}

window.addEventListener("load", showTextInConsole);

document.getElementById('close-banner').addEventListener('click', function() {
  document.getElementById('banner').style.visibility = 'hidden';
  document.getElementById('banner').style.opacity = '0';
});
