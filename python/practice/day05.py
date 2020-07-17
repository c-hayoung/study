import os
import requests
from bs4 import BeautifulSoup

os.system("clear")
url = "https://www.iban.com/currency-codes"
table = []

def get_currency(URL):
  result = requests.get(URL)
  soup = BeautifulSoup(result.text,"html.parser")

  table = soup.find("table",{"class":"tablesorter"}).find("tbody").find_all("tr")

  each_table = []

  for i in table:
    country, currency, code, number = i.find_all("td",reculsive=False)    

    if "No universal currency" in currency:
      each_table = each_table
    else:
      each_table.append({"country" : country.text, "currency":currency.text, "code" : code.text, "number":int(number.text)})

  for idx, i in enumerate(each_table, start=0):
    i["index"] = int(idx)

  return each_table

def check_input(table):
  answer = input("#: ")
  try:
    if int(answer) <= len(table):
      print("You chose",table[int(answer)]["country"])
      print("The currency code is",table[int(answer)]["code"])
    else:
      print("Choose a number from the list.")
      check_input(table)
  except:
    print("That wasn't a number.")
    check_input(table)
  return 

def main(URL):
  print("Hello! Please choose select a country by number:")
  table = get_currency(URL)
  for i in table:
    print("#", i["index"], i["country"])  
  # print(table)
  check_input(table)

main(url)