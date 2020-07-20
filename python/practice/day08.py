import os
import csv
import requests
from bs4 import BeautifulSoup

os.system("clear")
alba_url = "http://www.alba.co.kr"

def extract_brand(url):
  result = requests.get(url)
  soup = BeautifulSoup(result.text,"html.parser")

  goods = soup.find("div",{"id":"MainSuperBrand"}).find("ul",{"class":"goodsBox"}).find_all("a",{"class":"goodsBox-info"})

  brand_list = []
  brand_list_title = []

  for i in goods:
    href = i.attrs['href']
    title = i.find("span",{"class":"company"}).text
    brand_list.append(href)
    brand_list_title.append(title)

  return brand_list

def extract_job(html):
  try:
    location = html.find("td",{"class":"local"}).text
    company = html.find("span",{"class":"company"}).text
    time = html.find("span",{"class":"time"}).text
    pay = html.find("td",{"class":"pay"}).text
    reg_date = html.find("td",{"class":"regDate"}).text

  except:
    pass

  return {"location":location,"company":company,"time":time,"pay":pay,"date":reg_date}


def extract_jobs(URL):
  jobs = []

  result = requests.get(URL)
  soup = BeautifulSoup(result.text,"html.parser")

  infos = soup.find("div",{"id":"NormalInfo"}).find("tbody").find_all("tr",{"class":""})

  try:
    title = soup.find("div",{"class":"brandAppBtn"}).find("a",{"class":"brandBtnType"}).text.strip("ID 공고 신청하기")
    if "/" in title:
      title = title.relpace("/"," ")
    print(title)
  except:
    # continue
    title = "Undefined"
    
  try:
    for info in infos:
      each_job = extract_job(info)
      jobs.append(each_job)
  except:
    jobs = jobs

  return {"brand":title, "jobs":jobs}


def save_to_file(word,jobs):

  file = open(f"{word}.csv", mode="w", encoding="utf-8")
  # http://blog.naver.com/PostView.nhn?blogId=rjs5730&logNo=220980957605&parentCategoryNo=&categoryNo=&viewDate=&isShowPopularPosts=false&from=postView (인코딩 오류참조)

  writer = csv.writer(file)
  writer.writerow(["location","company","time","pay","date"])

  for job in jobs:
    writer.writerow(list(job.values()))
  return

def start():
  all_jobs = []
  brand_list = extract_brand(alba_url)
  for i in brand_list:
    brand_job = extract_jobs(i)
    all_jobs.append(brand_job)

  for job in all_jobs:
    title = job["brand"]
    jobs = job["jobs"]
    save_to_file(title, jobs)

  return

start()

