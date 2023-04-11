const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');
const colorChange = document.getElementById('colorChange');
const colorChanges = document.getElementById('colorChanges');
const toggleColors = document.getElementById('toggle-colors');

const rootStyle = document.documentElement.style;

toggleTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
    if (toggleIcon.src.includes('moon.svg')) {
        toggleIcon.src='assets/icons/sun.svg'
        toggleText.textContent='Light Mode'
        colorChange.style.color = '#282c34';
        colorChanges.style.color = '#282c34';


    }else{
        toggleIcon.src='assets/icons/moon.svg'
        toggleText.textContent='Dark Mode'
        colorChanges.style.color = 'yellow';
        colorChange.style.color = 'yellow';
    }
});

toggleColors.addEventListener('click', (e)=>{
    rootStyle.setProperty("--primary-color", e.target.dataset.color)
})

