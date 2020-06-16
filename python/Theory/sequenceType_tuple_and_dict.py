
days = ("Mon","Tue","Wed","Thur","Fri")
print(type(days))     #tuple

# ---

nico = {
  "name": "Nico",
  "age": 29,
  "korean": True, 
  "fav_food": ["Kimchi","Sashimi"]
}

print(type(nico))                 #dict
print(nico["name"])               #Nico
nico["handsome"] = True
print(nico)                       #{'name': 'Nico', 'age': 29, 'korean': True, 'fav_food': ['Kimchi', 'Sashimi'], 'handsome': True}

something = ["tntt",True,12,None,False,"lalala"]

print(something)                  #['tntt', True, 12, None, False, 'lalala']
