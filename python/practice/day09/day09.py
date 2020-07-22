import requests
from flask import Flask, render_template, request

base_url = "http://hn.algolia.com/api/v1"

# This URL gets the newest stories.
new = f"{base_url}/search_by_date?tags=story"

# This URL gets the most popular stories
popular = f"{base_url}/search?tags=story"


# This function makes the URL to get the detail of a storie by id.
# Heres the documentation: https://hn.algolia.com/api
def make_detail_url(id):
  return f"{base_url}/items/{id}"

def list_info(i):
  title = i['title']
  link = i['url']
  points = i['points']
  author = i['author']
  num_comments = i['num_comments']
  key = i['objectID']
  return {'title':title,'link':link,'points':points,'author':author,'comments':num_comments,'key':key}

def extract_info(result):
  info = []
  for i in result:
    each_i = list_info(i)
    info.append(each_i)
  return info

def each_comment(i):
  user = i['author']
  text = str(i['text']).replace("<p>","").replace("</p>","\n")
  return {'user':user,'text':text}

def detail_comment(comments):
  comment = []
  for i in comments:
    each_c = each_comment(i)
    comment.append(each_c)
  return comment

db = {}
app = Flask("DayNine")

@app.route("/")
def home():
  try:
    result = requests.get(popular).json()['hits']
    word = None
    word = request.args.get("order_by")
    if word == "popular" or word == None:
      order = True
      print("popular")
      result = requests.get(popular).json()['hits']
      fromDB = db.get("popular")
      if fromDB:
        info = fromDB
      else:
        info = extract_info(result)
        db["popular"] = info
    else:
      order = False
      print("new")
      result = requests.get(new).json()['hits']
      fromDB = db.get("new")
      if fromDB:
        info = fromDB
      else:
        info = extract_info(result)
        db["new"] = info
    return render_template("index.html",order=order,info=info)
  except:
    return redirect("/")
  

@app.route("/<id>")
def detail(id):
  url = make_detail_url(id)
  detail = requests.get(url).json()
  try:  
    title = detail['title']
    points = detail['points']
    author = detail['author']
    link = detail['url']
    comments = detail['children']

    comment = detail_comment(comments)
    return render_template("detail.html",title=title,points=points,author=author,link=link,comments=comment)
  except:
    return redirect("/")
  
  
app.run(host="0.0.0.0")