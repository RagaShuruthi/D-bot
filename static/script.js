document.getElementById('bmiForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100;

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert('Please enter valid positive numbers for weight and height.');
      return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  let category = '';
  let dietPlan = '';

  if (bmi < 18.5) {
      category = 'Underweight';
      dietPlan = 'High-calorie meals with proteins, healthy fats, and carbohydrates.';
  } else if (bmi >= 18.5 && bmi < 25) {
      category = 'Normal weight';
      dietPlan = 'Maintain a balanced diet with vegetables, fruits, proteins, and whole grains.';
  } else if (bmi >= 25 && bmi < 30) {
      category = 'Overweight';
      dietPlan = 'Focus on low-calorie, nutrient-rich foods and control portion sizes.';
  } else {
      category = 'Obese';
      dietPlan = 'Adopt a calorie-controlled diet with vegetables, lean proteins, and minimal processed foods.';
  }

  const resultDiv = document.getElementById('result');
  resultDiv.style.display = 'block';
  resultDiv.innerHTML = `
    <h3>Your BMI: ${bmi}</h3>
    <p>Category: <strong>${category}</strong></p>
    <p>Diet Plan: ${dietPlan}</p>
  `;
});
