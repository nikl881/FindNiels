function flash() {
    var text = document.getElementById('stars');
    text.style.color = (text.style.color=='yellow') ? 'gray':'yellow';
}
var clr = setInterval(flash, 1000);