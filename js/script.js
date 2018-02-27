var svgContainer = document.getElementById('buildgt-svg');

svgContainer.onload = function() {
    var x = svgContainer.contentDocument
    var s = Snap(x);
    init(s);
}

var s = null;
var time = 0;
var dt = 0.01;
var phoneInterval = 4;
var phoneDuration = 1;

function init(snapSelector) {
    s = snapSelector;

    setInterval(function() {

        var rotorAngle = Math.sin(time / 1.5) * Math.sin(time / 1.5) * 360;
        var leftHandAngle = Math.sin(time) * 5;
        var rightHandAngle = -Math.sin(time / 1.5) * 6;
        var leftHandX = -Math.cos(time * 1.5) * 12 + 12;

        s.select('#rotor-tl').transform('R' + rotorAngle + 'T14,0');

        s.select('#laptop-left-hand').transform('t' + (435 + leftHandX) + ',511R' + leftHandAngle);
        s.select('#laptop-right-hand').transform('t668,484R' + rightHandAngle);

        if (time % phoneInterval < phoneDuration) {
            var phoneRotation = Math.sin(time / phoneDuration * 15 * Math.PI) * 5;
            s.select('#phone').transform('t161,280R' + phoneRotation);
        }

        time += dt;
    }, 10);
}