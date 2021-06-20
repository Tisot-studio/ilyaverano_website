from flask import Flask, render_template, request
import csv


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')



def write_to_file(data):
    with open('./static/db/emails.csv', 'a', newline='') as database:
        email = data['email']
        csv_writer = csv.writer(database, delimiter=' ', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        csv_writer.writerow([email])

        



@app.route('/submit_form', methods=['POST', 'GET'])
def submit_form():
    if request.method == 'POST':
        data = request.form.to_dict()
        if data['email'] != '':
            write_to_file(data)
            return render_template('submit_form.html')
        else:
            return index()
 
        
        

   