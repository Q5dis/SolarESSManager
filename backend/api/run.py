from flask import Flask, request, jsonify
from flask_cors import CORS
from app.services.relay_service import reset_relay

app = Flask(__name__)
CORS(app)

@app.get("/data")
def getData():
    print("getData",dict(request.args))
    return jsonify(ok=True)
if __name__=="__main__":
    reset_relay()
    app.run(host="0.0.0.0",
            port=5000,
            debug=True,
            use_reloader=False,
            threaded = False)