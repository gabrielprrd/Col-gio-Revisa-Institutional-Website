const functions = require('firebase-functions');
const gcs = require('@google-cloud/storage')();
const os = require('os');
const path = require('path');
const cors = require('cors')({origin: true});
const Busboy = require("busboy");

const projectId = 'Your ID'
let gcs = new Storage ({
    projectId
  });


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onFileChange = functions.storage.object().onFinalize( event => {
    const bucket = event.bucket
    const contentType = event.contentType
    const filePath = event.name
    console.log('file change detected, function execution started!')

    const destBucket = gcs.bucket(bucket);
    const tmpFilePath =  path.join(os.tmpdir(), path.basename(filePath));
    const metadata = { contentType: contentType };

    return destBucket.file(filePath).download;
});

exports.uploadFile = functions.https.onRequest((req, res) => {
    cors(req, res, (request, response) => {
        if (req.method !== 'POST') {
            return response.status(500).json({
                message: 'Not allowed'
            });
        }
        const busboy = new Busboy({headers: request.headers});
        let uploadData = null;

        busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
            const filepath = path.join(os.tmpdir(), filename);
            uploadData = {file: filepath, type: mimetype};
        });

        busboy.on('finish', () => {
            const bucket = gcs.bucket('colegio-revisa.appspot.com')
            bucket.upload(uploadData.file, {
                metadata: {
                    metadata: {
                        contentType: uploadData.type
                    }
                }
            })
        })
        res.status(200).json({
            message: 'it worked!'
        });
    });  
});