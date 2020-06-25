import requests
from bs4 import BeautifulSoup

URL = f"https://stackoverflow.com/jobs?q=python&sort=i"

# 1. 페이지 가져오기
# 2. request 만들기
# 3. extract jobs

def get_last_page():
   # request
   result = requests.get(URL)
   soup = BeautifulSoup(result.text,"html.parser")

   pages = soup.find("div",{"class":"s-pagination"}).find_all("a")   
   last_page = pages[-2].get_text(strip=True)

   return last_page

# 3. extract jobs
def extract_jobs(last_page):
   jobs = []
   for page in range(last_page):
      result = requests.get(f"{URL}&pg={page + 1}")
      # 0부터 시작하기 때문
      soup = BeautifulSoup(result.text,"html.parser")

      # class가 -job인 요소 선택
      results = soup.find_all("div",{"class":"-job"})

      # 요소 중 id 추출
      for result in results:
         job_id = result["data-jobid"]
         print(job_id)
   return jobs

# ---
def get_jobs():
   last_page = get_last_page()
   jobs = extract_jobs(last_page)
   return jobs