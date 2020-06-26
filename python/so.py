import requests
from bs4 import BeautifulSoup

URL = f"https://stackoverflow.com/jobs?q=python&sort=i"

# 1. 페이지 가져오기
# 2. request 만들기
# 3. extract jobs info

def get_last_page():
   # request
   result = requests.get(URL)
   soup = BeautifulSoup(result.text,"html.parser")

   pages = soup.find("div",{"class":"s-pagination"}).find_all("a")   
   last_page = pages[-2].get_text(strip=True)

   return int(last_page)


# 3.
# extract job info
def extract_job(html):
   # job title
   title = html.find("h2",{"class":"fs-body3"}).find("a")["title"]
      # title = html.find("h2").text.strip()

   # job company_name
   # company = html.find("h3",{"class":"fs-body1"})
   # company_name = company.find("span").get_text(strip=True)

   # # job company_location
   # company_location = company.find("span",{"class":"fc-black-500"}).get_text(strip=True)

   # job company
   company,location = html.find("h3",{"class":"fs-body1"}).find_all("span",recursive =False)
   # unpacking, 깊은 하위 요소 추출을 막는 recursive)
   company = company.get_text(strip=True)
   location = location.get_text(strip=True)
   # .strip("-").strip("\r"): -,와 new line을 삭제할 수 있음. \r은 \n으로도 쓸 수 있다.

   # job id
   job_id = html["data-jobid"]

   return {'title':title,'company':company, 'location':location, 'apply_link':f"https://stackoverflow.com/jobs?id={job_id}"}

# extract "jobs"
def extract_jobs(last_page):
   jobs = []
   for page in range(last_page):
      print(f"Scrapping SO page : {page}")

      result = requests.get(f"{URL}&pg={page + 1}")
      # 0부터 시작하기 때문
      soup = BeautifulSoup(result.text,"html.parser")

      # class가 -job인 요소 선택
      results = soup.find_all("div",{"class":"-job"})

      # 요소 중 id 추출
      for result in results:
         each_job = extract_job(result)
         jobs.append(each_job)
   return jobs

# ---
def get_jobs():
   last_page = get_last_page()
   # jobs = extract_jobs(last_page) //양이 너무 많아지니까 5페이지까지만 출력할 예정.
   print(last_page)
   jobs = extract_jobs(5)
   return jobs