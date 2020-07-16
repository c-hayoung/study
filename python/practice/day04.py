import os
import requests

urls = []

def close_after_finish():
  check = input("Do you want to restart? y/n ")
  if check == 'y':
    os.system('clear')
    start()
  elif check == 'n':
    print("ok, bye!")
  else:
    print("it is not a valid answer.")
    close_after_finish()
  return 

def write_input():
  print("Welcome to IsItDown.py!")
  input_data = input("Please write a URLs you want to check. (separated by comma)\n")
  input_data = input_data.split(',')
  for i in input_data:
    i = i.lower().strip()
    if '.' not in i:
      print(f"{i} is not a valid URL")
      break
    elif '//' not in i:
      i = 'http://'+i
    urls.append(i)
  return urls

def request_page(URL):
  # request
  try:
    result = requests.get(URL)
    if result.status_code == requests.codes.ok:
      print(f"{URL} is up!")
    else:
      print(f"{URL} is down!")
  except:
    print(f"{URL} is down!")
  return

# run
def start():
  urls.clear()
  write_input()
  for i in urls:
    request_page(i)
  close_after_finish()

start()