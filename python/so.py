import requests
from bs4 import BeautifulSoup

URL = f"https://stackoverflow.com/jobs?q=python&sort=i"

# 1. 페이지 가져오기
def get_last_page():
   result = requests.get(URL)
   soup = BeautifulSoup(result.text,"html.parser")

   pages = soup.find("div",{"class":"s-pagination"}).find_all("a")
   print(pages)
   
   
   return []

# 2. request 만들기

# 3. extract jobs


# ---
def get_jobs():
   last_page = get_last_page()
   print(last_page)
   return []