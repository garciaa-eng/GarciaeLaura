
const slider = document.querySelectorAll('.slider')
const btnAnt = document.getElementById('anterior')
const btnProx = document.getElementById('proximo')

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function ShowSlider() {
    slider[currentSlide].classList.add('on')
}

function proximo() {
    hideSlider()
    if(currentSlide === slider.length -1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    ShowSlider()

}

function anterior() {
    hideSlider()
    if(currentSlide === 0) {
        currentSlide = slider.length-1
    } else {
        currentSlide--
    }
    ShowSlider()

}


btnProx.addEventListener('click' , proximo)
btnAnt.addEventListener('click' , anterior)

const hoverBox = document.getElementById('hoverBox');

hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = '#add8e6';
    hoverBox.style.transform = 'scale(1.1)';
});

hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = '#71cdec';
    hoverBox.style.transform = 'scale(1)';
});

const hoverBox2 = document.getElementById('hoverBox2');

hoverBox2.addEventListener('mouseover', () => {
    hoverBox2.style.backgroundColor = '#add8e6';
    hoverBox2.style.transform = 'scale(1.1)';
});

hoverBox2.addEventListener('mouseout', () => {
    hoverBox2.style.backgroundColor = '#71cdec';
    hoverBox2.style.transform = 'scale(1)';
});

const hoverBox3 = document.getElementById('hoverBox3');

hoverBox3.addEventListener('mouseover', () => {
    hoverBox3.style.backgroundColor = '#add8e6';
    hoverBox3.style.transform = 'scale(1.1)';
});

hoverBox3.addEventListener('mouseout', () => {
    hoverBox3.style.backgroundColor = '#71cdec';
    hoverBox3.style.transform = 'scale(1)';
});

const hoverBox4 = document.getElementById('hoverBox4');

hoverBox4.addEventListener('mouseover', () => {
    hoverBox4.style.backgroundColor = '#add8e6';
    hoverBox4.style.transform = 'scale(1.1)';
});

hoverBox4.addEventListener('mouseout', () => {
    hoverBox4.style.backgroundColor = '#71cdec';
    hoverBox4.style.transform = 'scale(1)';
});


