const mode = document.getElementById('mode')
mode.addEventListener('click', ()=>{
    const form = document.getElementById('login')
    const git = document.getElementById('git')
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun')

        form.classList.add('dark')
        git.setAttribute('src', "assets/imgs/github-inward.png")

        return;

    }
    mode.classList.remove('fa-sun')
    mode.classList.add('fa-moon')
    form.classList.remove('dark')
    git.setAttribute('src', "assets/imgs/github.png")
})