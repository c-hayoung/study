import requests
from bs4 import BeautifulSoup

indeed_result = requests.get("https://www.indeed.com/jobs?q=python&limit=50")
# getting the html
# print(indeed_result.text)

indeed_soup = BeautifulSoup(indeed_result,"html.parser")
# 추출해낸 html에서 data추출 기능 활성화

pagination = indeed_soup.find("ul",{"class":"pagination-list"})
# class명이 pagination-list인 ul의 data추출

pages = pagination.find_all("a")
# pagination 안에서 anchor요소 전부 찾아내기

spans = []
#미리 선언

for page in pages:
   spans.append(page.find("span"))
#anchor 안에서 모든 span추출해내기

spans = spans[:-1]
# 마지막 span을 제외한 나머지 span을 리스트화
