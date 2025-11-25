from app import create_app # app/__init__.py 에서 정의한 팩토리 함수를 임포트

# 1. create_app() 함수를 호출하여 Flask 앱(app)을 생성
# (이 시점에 app/__init__.py 안의 모든 초기화 코드가 실행됨)
PORT = 5001
app = create_app()

# 2. 이 파일(run.py)이 터미널에서 'python run.py'로 직접 실행되었을 때만
#    아래 코드를 실행하라는 의미
if __name__ == '__main__':

    print(f"Starting Flask server on http://0.0.0.0:{PORT}")

    # Flask 서버 실행
    app.run(debug=True, host='0.0.0.0', port=PORT)