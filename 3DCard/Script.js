const card = document.querySelector('.card');
const container = document.querySelector('.container');
const shoeTitle = document.querySelector('.ShoeName');
const shoe = document.querySelector('img');
const sizeBtn = document.querySelector('.sizeBtns');
const Buybtn = document.querySelector('.purchase');

//Event Listeners
    //3d Effect
    container.addEventListener('mousemove',(e)=>{
        const x_axis = (window.innerWidth/2 - e.pageX)/20;
        const y_axis = (window.innerHeight/2 - e.pageY)/20;
        const defaultSizeBtn = document.querySelector('.active');
        card.style.transform = `rotateY(${x_axis}deg) rotateX(${y_axis}deg)`;
        shoeTitle.style.transform = `translateZ(50px)`;
        shoe.style.transform = `translateZ(100px) rotateZ(340deg) rotateY(10deg)`;
        defaultSizeBtn.style.transform = `translateZ(50px)`;
        Buybtn.style.transform = `translateZ(50px)`;
    });

    //Animation In
    container.addEventListener('mouseenter',(e)=>{
        card.style.transition = 'all 0.01s ease';
    });

    //Animation out
    container.addEventListener('mouseleave',(e)=>{
        const defaultSizeBtn = document.querySelector('.active');
        card.style.transition = 'all 1s ease';
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        shoeTitle.style.transform = `translateZ(0px)`;
        shoe.style.transform = `translateZ(0px)`;
        defaultSizeBtn.style.transform = `translateZ(0px)`;
        Buybtn.style.transform = `translateZ(0px)`;
    });

    //3d effect for selected Btn
    sizeBtn.addEventListener('click',(e)=>{
        const selectedBtn = e.target;
        const defaultSizeBtn = document.querySelector('.active');
        if(selectedBtn===defaultSizeBtn)
            return;
        defaultSizeBtn.classList.remove('active');
        defaultSizeBtn.style.transform = 'none';
        selectedBtn.classList.add('active');
        console.log(selectedBtn,defaultSizeBtn); 
    });
