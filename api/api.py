import time
from flask import Flask

app = Flask(__name__)


@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/issues')
def get_issues():
    return {'issues': [
        {
            'id': 1, 'status': 'Open', 'owner': 'Ravan', 'created': '19/04/2021', 'effort': 5, 'title': 'Error in the console when clicking Add'
        },
        {
            'id': 2, 'status': 'Assigned', 'owner': 'Eddie', 'created': '18/04/2021', 'effort': 3, 'title': 'Missing bottom border on panel'
        }
    ]}
