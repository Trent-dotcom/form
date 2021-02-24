document.addEventListener("DOMContentLoaded", function () {
    alert('This is a fake form no info will be used or saved')
    document.getElementById('B').onclick = function () { click() };
    function click() {
        event.preventDefault()
        var fName = document.getElementById('firstName').value;
        alert('thanks ' + fName + " none of your info was saved")

    };
});
