import requests
from bs4 import BeautifulSoup

LIMIT = 50
URL = "https://www.indeed.com/jobs?q=python&limit={LIMIT}"

def get_last_page():
      
   result = requests.get(URL)
   # getting the html
   # print(result.text)

   # --- 페이지가 총 몇 페이지인지 알아내기 위해 작성
   soup = BeautifulSoup(result.text,"html.parser")
   # 추출해낸 html에서 data추출 기능 활성화

   pagination = soup.find("ul",{"class":"pagination-list"})
   # class명이 pagination-list인 ul의 data추출

   links = pagination.find_all("a")
   # pagination 안에서 anchor요소 전부 찾아내기

   pages = []
   #미리 선언

   for link in links[:-1]:
      # pages.append(link.find("span").string)
      pages.append(int(link.string))
      # a안의 string이 유일하다면 바로 string method를 사용해도 된다.
      # 추출한 string 정수(integar)화
   #anchor 안에서 모든 span추출해내기
   # for x in sequence : x는 sequence의 요소를 순차적인 인자로 받아오는 것.

   # pages = pages[:-1]
   # print(pages[-1])
   # 마지막 span을 제외한 나머지 span을 pages에 리스트화
   # [x:y] x번째부터 y번째까지. (0부터 시작, 하지만 -1은 마지막 걸 의미하기 때문에 마지막번째는 바로 직전까지가 됨.)

   max_page = pages[-1]
   # 마지막 페이지를 찾아내 변수로 만든다.

   return max_page


def extract_info(html):
   # title
   title = html.find("h2",{"class":"title"}).find("a")["title"]

   # company
   company = html.find("span",{"class":"company"})
   company_anchor = company.find("a")
   if company_anchor is not None:
      company = str(company_anchor.string)
   else:
      company = str(company.string)
   company = company.strip()
   
   # location
   location = html.find("div",{"class":"recJobLoc"})["data-rc-loc"]

   # job_id(링크연결)
   job_id = html["data-jk"]

   return {'title':title, 'company':company,'location':location,'link':f"https://www.indeed.com/viewjob?jk={job_id}"}



def extract_jobs(last_page):
   jobs = []
   for page in range(last_page):
      print(f"Scrapping indeed page : {page}")

      # pages request 기능
      result = requests.get(f"{URL}&start={page*LIMIT}")

      # extract title
      soup = BeautifulSoup(result.text,"html.parser")
      results = soup.find_all("div",{"class":"jobsearch-SerpJobCard"})
      for result in results:
         job = extract_info(result)
         jobs.append(job)
      # print(result.status_code)
      ## 실행하는지 확인용 console
   return jobs


def get_jobs():
   last_page = get_last_page()
   # jobs = extract_jobs(last_page)
   print(last_page)
   jobs = extract_jobs(5)
   return jobs