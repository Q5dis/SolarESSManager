from app import create_app
from app.services.relay_service import reset_relay
import os

app = create_app()

if __name__=="__main__":
    if os.environ.get("WERKZEUG_RUN_MAIN") == "true":
        reset_relay()

    app.run(host="0.0.0.0",
            port=5000,
            debug=True)