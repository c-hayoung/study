import csv

def save_to_file(jobs):
   file = open("jobs.csv",mode="w",encoding="UTF-8")
   # http://blog.naver.com/PostView.nhn?blogId=rjs5730&logNo=220980957605&parentCategoryNo=&categoryNo=&viewDate=&isShowPopularPosts=false&from=postView (인코딩 오류참조)

   writer = csv.writer(file)
   writer.writerow(["Title","Company","Location","Link"])

   for job in jobs:
      writer.writerow(list(job.values()))
   return