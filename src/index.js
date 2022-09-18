const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const vasesDark = document.getElementById('vases-dark');
const vasesLight = document.getElementById('vases-light');

if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    //Show light icon
    themeToggleLightIcon.classList.remove('hidden');
    vasesLight.classList.remove('hidden');
    vasesDark.classList.add('hidden');
  } else {
    //Show dark icon
    themeToggleDarkIcon.classList.remove('hidden');
    vasesDark.classList.remove('hidden');
    vasesLight.classList.add('hidden');
}

//Listen for toggleButton click
themeToggleBtn.addEventListener('click', toggleMode);

function toggleMode(){
    //Toggle Icon
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');
    vasesDark.classList.toggle('hidden');
    vasesLight.classList.toggle('hidden');
    //If is set in localstorage
    if(localStorage.getItem('color-theme')){
        // If light, make dark and save

            if (localStorage.getItem('color-theme') === 'light'){
                document.documentElement.classList.add('dark')
                vasesLight.classList.add('hidden')
                vasesDark.classList.remove('hidden');
                localStorage.setItem('color-theme', 'dark')
            } else {
                document.documentElement.classList.remove('dark');
                vasesDark.classList.add('hidden')
                vasesLight.classList.remove('hidden')
                localStorage.setItem('color-theme', 'light')
            }

    } else {
        // If not in localstorage
        if(document.documentElement.classList.contains('dark')){
            document.documentElement.classList.remove('dark')
            vasesDark.classList.add('hidden')
            localStorage.setItem('color-theme', 'light')
        } else{
            document.documentElement.classList.add('dark')
            vasesLight.classList.add('hidden')
            localStorage.setItem('color-theme', 'dark')
        }
    }

}