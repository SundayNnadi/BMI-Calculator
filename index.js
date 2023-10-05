document.addEventListener(`DOMcontentLoaded`, function () {
const calculateBmiButton = document.querySelector(".form");

calculateBmiButton.addEventListener('submit',function(e){
    e.preventDefault();
    const  height = document.querySelector(".height");
    const  weight = document.querySelector(".weight");
    const newHeight = parseFloat(height.value);
    const newWeight = parseFloat(weight.value);


    const  heightSquare = newHeight*newHeight;

    const  bmi = Number(newWeight/heightSquare).toFixed(2);
    const bmiSize = function(bmi) {
        if(bmi >=25){
            p1.textContent =`Your BMI is ${bmi} and you are over weight`;
        
        }else if(bmi > 29.9){
            p1.textContent =`Your BMI is ${bmi} and you are obese`;
        }else if(bmi <18.5){
            p1.textContent = `Your BMI is ${bmi}, you are underweight`  
    
        }else {
            p1.textContent =`Your BMI is ${bmi}, you have a normal BMI`;
        } 
    }
        window.location.href =`status.html?bmi=${bmi}&size=${bmiSize}`;
    });
});
    // async function getUsers(){
    //     const re = await fetch("http://jsonplaceholder.typicode.com/posts");
    //     const response = await re.json();
    //     console.log(response);
    // }
