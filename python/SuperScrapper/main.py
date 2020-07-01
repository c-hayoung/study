from flask import Flask

app = Flask("BluScrapper")

@app.route("/")
# /로 접속하면 home실행
def home():
  return "Hello! Welcome to mi casa!"

@app.route("/<username>")
# /contact로 접속요청이 발생하면 potato실행
def potato(username):
  return f"Hello, {username}!"

# @ : 데코레이터. 바로 아래에 있는 '함수'를 찾아 꾸며주는 기능.

app.run()
# repl.it환경이기 때문에 host="0.0.0.0"