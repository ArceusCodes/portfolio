const toggle = document.getElementById('toggleDark');
const menu = document.getElementById('menuButton');
const body = document.querySelector('body');
const footer = document.getElementById('footer');
const aside = document.getElementById('github');


toggle.addEventListener('click', function changeMode(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'rgb(243, 243, 243)';
        body.style.color = 'rgb(69, 69, 71)';
        body.style.transition = '2s';
        footer.style.background = '#e3e3e5';
        footer.style.color = 'rgb(69, 69, 71)';
        footer.style.transition = '2s';
        aside.style.background = '#e3e3e5';
        aside.style.color = 'rgb(69, 69, 71)';
        aside.style.transition = '2s';
    }
    else{
        body.style.background = 'rgb(20, 22, 33)';
        body.style.color = '#eee';
        body.style.transition = '2s';
        footer.style.background = 'rgb(20, 22, 33)';
        footer.style.color = '#eee';
        footer.style.transition = '2s';
        aside.style.background = 'rgb(20, 22, 33)';
        aside.style.color = '#eee';
        aside.style.transition = '2s';
    }
});