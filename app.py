from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index2.html')

@app.route('/admission_guidelines')
def admission_guidelines():
    return render_template('admission_guidelines.html')

@app.route('/admission')
def admission():
    return render_template('admission.html')

@app.route('/alumni')
def alumni():
    return render_template('alumni.html')

@app.route('/careers')
def careers():
    return render_template('careers.html')

@app.route('/academic')
def academic():
    return render_template('academic.html')

@app.route('/facilities')
def facilities():
    return render_template('facilities.html')

@app.route('/extra_activities')
def extra_activities():
    return render_template('extra_activities.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/curriculum')
def curriculum():
    return render_template('curriculum.html')


@app.route('/syllabus')
def syllabus():
    return render_template('syllabus.html')

@app.route('/teacher_talk')
def teacher_talk():
    return render_template('teacher_talk.html')
# Add more routes for your other HTML files here
@app.route('/principal_talk')
def principal_talk():
    return render_template('principal_talk.html')

@app.route('/study_material')
def study_material():
    return render_template('study_material.html')

@app.route('/picture_gallery')
def picture_gallery():
    return render_template('picture_gallery.html')

@app.route('/academic_plan')
def academic_plan():
    return render_template('academic_plan.html')



if __name__ == '__main__':
    app.run(debug=True)
