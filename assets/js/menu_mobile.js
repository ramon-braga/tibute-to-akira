window.onload = function() {
    document.querySelector('.menu_mobile').addEventListener('click', function() {
        if (document.querySelector('.menu ul').style.display == 'flex') {
            document.querySelector('.menu ul').style.display = 'none';
        } else {
            document.querySelector('.menu ul').style.display = 'flex';
        }
    });
}