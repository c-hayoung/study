import requests
from bs4 import BeautifulSoup
from flask import Flask, render_template, request


headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'}


"""
All subreddits have the same url:
i.e : https://reddit.com/r/javascript
You can add more subreddits to the list, just make sure they exist.
To make a request, use this url:
https://www.reddit.com/r/{subreddit}/top/?t=month
This will give you the top posts in per month.
"""

subreddits = [
    "javascript",
    "reactjs",
    "reactnative",
    "programming",
    "css",
    "golang",
    "flutter",
    "rust",
    "django"
]


def request_reddit(subreddit):
  url = f"https://www.reddit.com/r/{subreddit}/top/?t=month"
  result = requests.get(url,headers=headers)
  soup = BeautifulSoup(result.text,"html.parser")

  list = soup.find("div",{"class":"rpBJOHq2PR60pnwJlUyP0"})
  items = []
  for i in list:
    title = i.find("h3",{"class":"_eYtD2XCVieq6emjKBH3m"}).text
    upvote = i.find("div",{"class":"_1rZYMD_4xY3gRcSS3p8ODO"}).text
    if "k" in upvote:
      number = upvote.replace("k","")
      number = round(float(number) * 1000)
    elif "•" in upvote:
      number = 0
    else:
      number = int(upvote)
    link = i.find("div",{"class":"y8HYJ-y_lTUHkQIc1mdCq"}).find("a")
    href = link.attrs["href"]
    each_item = {'title':title,'upvote':upvote,'link':href,'theme':subreddit,'rank':number}
    items.append(each_item)
    # print(title)
    # print(upvote)
    # print(href)
  return items


app = Flask("DayEleven")

@app.route("/")
def home():
  return render_template("home.html",subreddits=subreddits)

@app.route("/read")
def read():
  lists = []
  selected = request.args
  for idx,i in enumerate(selected):
    list = request_reddit(i)
    lists.append(list)
    count = idx
  for i in range(count):
    result = lists[i]+lists[i-1]
  # print(result,count)
  result = sorted(result, key=lambda x: x['rank'], reverse=True)
  return render_template("read.html",selected=selected,result = result)

app.run(host="0.0.0.0")