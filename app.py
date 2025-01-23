from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate_bmi', methods=['POST'])
def calculate_bmi():
    weight = float(request.form['weight'])
    height = float(request.form['height']) / 100  # Convert cm to meters
    bmi = weight / (height ** 2)

    if bmi < 18.5:
        return render_template('underweight.html')
    elif 18.5 <= bmi < 25:
        return render_template('normalweight.html')
    else:
        return render_template('obese.html')

@app.route('/underweight')
def underweight():
    return render_template('underweight.html')

@app.route('/normal_weight')
def normal_weight():
    return render_template('normalweight.html')

@app.route('/overweight')
def overweight():
    return render_template('overweight.html')

@app.route('/obese')
def obese():
    return render_template('obese.html')

if __name__ == "__main__":
    app.run(debug=True)

