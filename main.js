let heightInput = document.querySelector('#height-input');
let weightInput = document.querySelector('#weight-input');

let calcButton = document.querySelector('.calc-button');
let calcResult = document.querySelector('.calc-result');

let pressed = false;

function calculateIMC(e) {
    if (!pressed) {
        e.preventDefault();

        let h = Number.parseFloat(heightInput.value);
        let w = Number.parseFloat(weightInput.value);

        let imc = Math.round(10 * w / (h/100)**2) / 10;

        let range = [Math.round(10*18.5*(h/100)**2)/10, Math.round(10*24.9*(h/100)**2)/10];

        let category;

        if (imc < 18.5) {
            category = 'underweight';
        } else if (imc < 25) {
            category = 'normal'
        } else if (imc < 30) {
            category = 'overweight'
        } else {
            category = 'obese'
        }

        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');
        let p6 = document.createElement('p');

        p1.appendChild(document.createTextNode('For the information you entered:'));
        p2.appendChild(document.createTextNode('Height: ' + h + ' centimeters'));
        p3.appendChild(document.createTextNode('Weight: ' + w + ' kilograms'));
        p4.appendChild(document.createTextNode('Your BMI is ' + imc + ' indicating your weight is in the ' + category + ' category for adults of your height.'));
        p5.appendChild(document.createTextNode('For your height, a normal weight range would be from ' + range[0] + ' to ' + range[1] + ' kilograms.'));
        p6.appendChild(document.createTextNode('People who are overweight or obese are at higher risk for chronic conditions such as high blood pressure, diabetes, and high cholesterol.'));

        calcResult.appendChild(p1);
        calcResult.appendChild(p2);
        calcResult.appendChild(p3);
        calcResult.appendChild(p4);
        calcResult.appendChild(p5);
        calcResult.appendChild(p6);

        calcResult.classList.replace('section-hide', 'section-show')

        pressed = true;
    }
}

calcButton.addEventListener('click', calculateIMC)
