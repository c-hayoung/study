import requests
from bs4 import BeautifulSoup

indeed_result = requests.get("https://www.indeed.com/jobs?q=python&limit=50")
# getting the html
# print(indeed_result.text)

# --- 페이지가 총 몇 페이지인지 알아내기 위해 작성
indeed_soup = BeautifulSoup(indeed_result.text,"html.parser")
# 추출해낸 html에서 data추출 기능 활성화

pagination = indeed_soup.find("ul",{"class":"pagination-list"})
# class명이 pagination-list인 ul의 data추출

links = pagination.find_all("a")
# pagination 안에서 anchor요소 전부 찾아내기

pages = []
#미리 선언

for link in links[:-1]:
   # pages.append(link.find("span").string)
   pages.append(int(link.string))
   # a안의 string이 유일하다면 바로 string method를 사용해도 된다.
#anchor 안에서 모든 span추출해내기
# for x in sequence : x는 sequence의 요소를 순차적인 인자로 받아오는 것.

# pages = pages[:-1]
# 마지막 span을 제외한 나머지 span을 pages에 리스트화
# [x:y] x번째부터 y번째까지.
print(pages)