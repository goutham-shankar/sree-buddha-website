from flask import Flask, request, jsonify, render_template_string
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload
from flask_cors import CORS

import os
import mimetypes

app = Flask(__name__)

CORS(app, origins=["http://localhost:3000"])


# Setup (make sure these files exist in your project directory)
SERVICE_ACCOUNT_FILE = 'service_account.json'
SCOPES = ['https://www.googleapis.com/auth/drive']

BTECH_PHOTO_FOLDER_ID = '1CPvqySeT5BadB59OVnia0rWyXcc8xReq'  # Replace with your actual folder ID, or set to None if not using a folder
BTECH_PARENTS_SIGNATURE_FOLDER_ID =  "1XMdexwYJf3c6fYMPCzIygnnQoC_X3Q5J"
BTECH_APPLICANT_SIGNATURE_FOLDER_ID = "1sUyVzL9DNSH0_Opz7FbRMYgVPG8PpaVj"

MTECH_SIGNATURE_FOLDER ="1xHDP7MjshcBGlU7gc3KooOXO8o7rJ-sT"
MTECH_PHOTO_FOLDER  ="1_dYDp0j2bB6SwN42O1vlntO0mg3vFuUI" 


credentials = service_account.Credentials.from_service_account_file(
    SERVICE_ACCOUNT_FILE, scopes=SCOPES
)
drive_service = build('drive', 'v3', credentials=credentials)

UPLOAD_DIR = 'uploads'
os.makedirs(UPLOAD_DIR, exist_ok=True)

# HTML template for file upload
UPLOAD_FORM = """
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Upload to Google Drive</title>
</head>
<body>
  <h1>Upload a File to Google Drive</h1>
  <form action="/upload" method="post" enctype="multipart/form-data">
    <label>Select file:</label>
    <input type="file" name="photo" required>
    <br><br>
    <input type="file" name="parentSignature" required>
    <br><br>
    <input type="file" name="applicantSignature" required>
    <br><br>
    <input type="submit" value="Upload">
  </form>
</body>
</html>
"""

# Route to serve the HTML upload page
@app.route('/', methods=['GET'])
def index():
    return render_template_string(UPLOAD_FORM)

# Helper function to upload file to Google Drive
def upload_to_drive(file_path, filename, FOLDER_ID):
    mime_type, _ = mimetypes.guess_type(file_path)
    file_metadata = {
        'name': filename,
        'parents': [FOLDER_ID] if FOLDER_ID else []
    }
    media = MediaFileUpload(file_path, mimetype=mime_type)
    uploaded_file = drive_service.files().create(
        body=file_metadata,
        media_body=media,
        fields='id, webViewLink'
    ).execute()
    return uploaded_file

# Endpoint to handle file upload
@app.route('/upload', methods=['POST'])
def upload():
    print(request.files)

   

    if 'photo' not in request.files:
        return jsonify({'error': 'No photo'}), 400
    if 'parentSignature' not in request.files:
        return jsonify({'error': 'No parents signature'}), 400
    if 'applicantSignature' not in request.files:
        return jsonify({'error': 'No applicant signature'}), 400

    photo = request.files['photo']
    parentSignature = request.files['parentSignature']
    applicantSignature = request.files['applicantSignature']


    if photo.filename == '' or parentSignature.filename == '' or applicantSignature.filename == '':
        return jsonify({'error': 'Empty filename'}), 400

    photo_path = os.path.join(UPLOAD_DIR, photo.filename)
    photo.save(photo_path)

    parentSignature_path = os.path.join(UPLOAD_DIR, parentSignature.filename)
    parentSignature.save(parentSignature_path)

    applicantSignature_path = os.path.join(UPLOAD_DIR, applicantSignature.filename)
    applicantSignature.save(applicantSignature_path)

    try:
        uploaded_photo = upload_to_drive(photo_path, photo.filename , BTECH_PHOTO_FOLDER_ID)
        upload_parentSignature = upload_to_drive(parentSignature_path, parentSignature.filename, BTECH_PARENTS_SIGNATURE_FOLDER_ID)
        applicantSignature = upload_to_drive(applicantSignature_path, applicantSignature.filename, BTECH_APPLICANT_SIGNATURE_FOLDER_ID)

        print(uploaded_photo , upload_parentSignature , applicantSignature)

        return jsonify({
            'success': True,
            'photo': uploaded_photo['id'],
            'photo_link': uploaded_photo['webViewLink'],
            'parent_signature_id': upload_parentSignature['id'],
            'parent_signature_link': upload_parentSignature['webViewLink'],
            'applicant_signature_id': applicantSignature['id'],
            'applicant_signature_link': applicantSignature['webViewLink']
        })
    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500
    
    finally:
        if os.path.exists(photo_path):
            os.remove(photo_path)
        if os.path.exists(parentSignature_path):
            os.remove(parentSignature_path)
        if os.path.exists(applicantSignature_path):
            os.remove(applicantSignature_path)

# Endpoint to handle file upload
@app.route('/upload_mtech', methods=['POST'])
def upload_mtech():
    print(request.files)

   

    if 'photo' not in request.files:
        return jsonify({'error': 'No photo'}), 400
    if 'signature' not in request.files:
        return jsonify({'error': 'No Signature'}), 400
     

    photo = request.files['photo']
    signature = request.files['signature']


    if photo.filename == '' or signature.filename == '' :
        return jsonify({'error': 'Empty filename'}), 400

    photo_path = os.path.join(UPLOAD_DIR, photo.filename)
    photo.save(photo_path)

    signature_path = os.path.join(UPLOAD_DIR, signature.filename)
    signature.save(signature_path)



    try:
        uploaded_photo = upload_to_drive(photo_path, photo.filename , MTECH_PHOTO_FOLDER)
        upload_signature = upload_to_drive(signature_path, signature.filename, MTECH_SIGNATURE_FOLDER)
        

        print(uploaded_photo , upload_signature )

        return jsonify({
            'success': True,
            'photo': uploaded_photo['id'],
            'photo_link': uploaded_photo['webViewLink'],
            'signature_id': upload_signature['id'],
            'signature_link': upload_signature['webViewLink'],
                    
                    
        }) 
    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500
    
    finally:
        if os.path.exists(photo_path):
            os.remove(photo_path)
        if os.path.exists(signature_path):
            os.remove(signature_path)
              

if __name__ == '__main__':
    app.run(debug=True)
