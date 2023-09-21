const sections = document.querySelectorAll('.section');
const sectbtns = document.querySelectorAll('.controller');
const sectbtn = document.querySelectorAll('.control');
const allsections = document.querySelector('.main-content');


function PageTransitions()  {
    
//button click makes the active class
        for(let i=0; i<sectbtn.length; i++) {
            sectbtn[i].addEventListener('click', function() {
                let currentbtn = document.querySelectorAll('.active-btn');
                currentbtn[0].className =  currentbtn[0].className.replace('active-btn',  '');
                this.className += ' active-btn';

            })
        }


//sections Active

allsections.addEventListener('click', (e) =>{
    
    const id = e.target.dataset.id; 

    if(id) {
        //remove selected from other buttons
        sectbtns.forEach((btn) => {
           
            btn.classList.remove('active') 
        })

        e.target.classList.add('active')

        //hide other sections

        sections.forEach((section)=>{

            section.classList.remove('active')
        })

    const element = document.getElementById(id);     
    element.classList.add('active');
     
        }   
    })

//toggle theme

    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();