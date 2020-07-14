"""
As you can see, the code is broken.
Create the missing functions, use default arguments.
Sometimes you have to use 'return' and sometimes you dont.
Start by creating the functions
"""

def is_on_list(DAYS, DAY):
  result = DAY in DAYS
  return result

def get_x(DAYS, NUM):
  result = DAYS[int(NUM)]
  return result

def add_x(DAYS, DAY):
  DAYS = DAYS.append(str(DAY))
  return DAYS

def remove_x(DAYS, DAY):
  DAYS = DAYS.remove(str(DAY))
  return DAYS

# \/\/\/\/\/\/\  DO NOT TOUCH AREA  \/\/\/\/\/\/\ #

days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

print("Is Wed on 'days' list?", is_on_list(days, "Wed"))

print("The fourth item in 'days' is:", get_x(days, 3))

add_x(days, "Sat")
print(days)

remove_x(days, "Mon")
print(days)


# /\/\/\/\/\/\/\ END DO NOT TOUCH AREA /\/\/\/\/\/\/\ #




