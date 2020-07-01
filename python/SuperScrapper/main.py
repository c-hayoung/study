from flask import Flask, render_template, request

app = Flask("BluScrapper")

@app.route("/")
# /로 접속하면 home실행
def home():
  return render_template("potato.html")
  # 경로를 안 지정해줘도 template을 어디서 찾아올지 알고 있음.

@app.route("/report")
def report():
  word = request.args.get('word')
  return render_template("report.html",searchingBy=word)

app.run(debug=True)
# repl.it환경이기 때문에 host="0.0.0.0"