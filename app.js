let section = document.querySelectorAll('.section');
let controls = document.querySelectorAll('.controls')
let body = document.querySelector('body')
let control = document.querySelectorAll('.control')

//adding background color on controls on clicking
for(let i=0; i<control.length; i++){
    control[i].addEventListener('click',() =>{
        for(let i=0; i<control.length; i++){
            control[i].classList.remove('active-btn')
        }
        control[i].classList.add('active-btn')
    })
}    

//switching between sections and animations
control.forEach((cntrl) => {
    cntrl.addEventListener('click', () =>{
        const id = cntrl.dataset.id
        section.forEach((sec) =>{
            sec.classList.remove('active')
        })
        control.forEach((cntrl) => {
            cntrl.classList.remove('active')
        })
        const currentSection = document.getElementById(id)
        currentSection.classList.add('active')
        control.forEach((cntrl) => {
            if(cntrl.dataset.id===id){
                cntrl.classList.add('active')
            }
        })
    })
})

//toggle theme

let themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', ()=>{
    body.classList.toggle('light-theme')
})

    
