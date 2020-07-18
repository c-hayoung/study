import os
import requests
from bs4 import BeautifulSoup
from babel.numbers import format_currency

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

class check():
  def check_input_from(table):
    answer = input("\nWhere are you from? Choose a country by number.\n\n#: ")
    try:
      if int(answer) <= len(table):
        print("You chose",table[int(answer)]["country"])
      else:
        print("Choose a number from the list.")
        check_input(table)
    except:
      print("That wasn't a number.")
      check_input_from(table)
    return table[int(answer)]["code"]

  def check_input_to(table):
    answer = input("\nNow choose another country.\n\n#: ")
    try:
      if int(answer) <= len(table):
        print("You chose",table[int(answer)]["country"])
      else:
        print("Choose a number from the list.")
        check_input(table)
    except:
      print("That wasn't a number.")
      check_input_to(table)
    return table[int(answer)]["code"]

def convert(FROM,TO):  
  transfer_url = f"https://transferwise.com/gb/currency-converter/{FROM}-to-{TO}-rate?amount="
  print("\nhow many", FROM ,"do you want to convert to", TO, "?")

  amount = input()
  url = transfer_url + f"{amount}"

  try:
    result = requests.get(url)
    soup = BeautifulSoup(result.text,"html.parser")

    currency = soup.find("span",{"class":"text-success"}).text
    currency = float(currency)
    convert_result = float(amount) * currency
    print(f"{format_currency(amount,FROM,locale='ko_KR')} is {format_currency(convert_result, TO, locale='ko_KR')}")
  except:
    print("That wasn't a number.")
    convert(FROM,TO)
  return
    
def main(URL):
  print("Welcome to CurrencyConvert PRO 2000\n")
  table = get_currency(URL)
  for i in table:
    print("#", i["index"], i["country"])  
  
  from_country = check.check_input_from(table)
  to_country = check.check_input_to(table)
  convert(from_country, to_country)

main(url)
