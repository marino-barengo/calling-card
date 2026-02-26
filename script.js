function showMenu() {
    document.getElementById('dropdown').style.opacity = '1';
    document.getElementById('dropdown').style.transform = 'translateY(18px)';
}

function hideMenu() {
    document.getElementById('dropdown').style.opacity = '0';
    document.getElementById('dropdown').style.transform = 'translateY(-50px)';
}

// light mode

const checkbox = document.getElementById('light');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('inverted');
});