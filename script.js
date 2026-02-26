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
    if (checkbox.checked) {
        document.body.style.backgroundImage = "url('data/background_light.svg')";
    } else {
        document.body.style.backgroundImage = "url('data/background_dark.svg')";
    }
});