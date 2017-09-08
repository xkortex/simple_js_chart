import os
import random
APPDIR = 'www'

from flask import Flask, request, redirect, url_for, send_from_directory, json, Response


app = Flask(__name__, static_folder=APPDIR)#, static_url_path='/'+APPDIR)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 3


params = {'temp': 0}

# # # # #

def sendResponse(state, status=200):
  return Response(json.dumps(state), status=status, mimetype='application/json')

# Serves the index.html page
@app.route('/')
def root():
    print(os.getcwd())
    print('app route root: {}'.format(APPDIR))
    return send_from_directory(APPDIR, 'index.html')

@app.route('/js/<path:path>')
def sendJS(path):
  return send_from_directory(APPDIR + '/js/', path)

@app.route('/img/<path:path>')
def sendIMG(path):
  return send_from_directory(APPDIR + '/img/', path)

# Returns temperature
@app.route('/temperature')
def hello_world():
    return sendResponse({ "temp": random.randint(0,100) })

@app.route('/get_temperature')
def get_temperature():
    return sendResponse(params)

@app.route('/set_temperature', methods=['POST'])
def set_temperature():
    content = request.get_json()
    params.update(content)

    print('json [{}]'.format(content))

    return sendResponse({ "success": True })

# # # # #

if __name__ == '__main__':
  app.run(debug=True, host='0.0.0.0')