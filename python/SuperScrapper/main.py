from flask import Flask, render_template, request, redirect, send_file
from scrapper import get_jobs
from exporter import save_to_file

app = Flask("BluScrapper")

db = {}

@app.route("/")
# /로 접속하면 home실행
def home():
  return render_template("potato.html")
  # 경로를 안 지정해줘도 template을 어디서 찾아올지 알고 있음.

@app.route("/report")
def report():
  
  word = request.args.get('word')
  if word:
    word = word.lower()
    fromDB = db.get(word)
    if fromDB:
      jobs = fromDB
    else:
      jobs = get_jobs(word)
      db[word] = jobs
  else:
    return redirect("/")
  return render_template("report.html",searchingBy=word,resultsNumber=len(jobs),jobs=jobs)


@app.route("/export")
def export():
  try:
    word = request.args.get('word')
    if not word:
      raise Exception()
    word = word.lower()
    jobs = db.get(word)
    if not jobs:
      raise Exception()
    save_to_file(jobs)
    return send_file("jobs.csv")
  except:
    return redirect("/")

app.run(debug=True)
# repl.it환경이기 때문에 host="0.0.0.0"