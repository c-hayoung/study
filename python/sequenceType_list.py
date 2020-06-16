days = ["Mon","Tue","Wed","Thur","Fri"]
print(type(days))     #list
print("Mon" in days)  #true
print(days[3])        #Thur(0부터 시작하기 때문)
print(len(days))      #5

print(days)
days.append("Sat")
print(days)
days.reverse()
print(days)