  const paranmeter = new URLSearchParams(window.location.search);
  const bmi = paranmeter.get('bmi');
  console.log(`the bmi ${paranmeter}`);
  const size = paranmeter.get('size');

  const bmiResult = document.getElementById('bmi-result');
  const bmiSizeResult = document.getElementById('bmi-content');

  bmiResult.textContent = `Your BMI is : ${bmi}`;
  bmiSizeResult.textContent = `You are : ${size}`;
