#Built-in Function 예시
# print()
# type()
# len() 
# int()

age = "18"
print(age)          #18
print(type(age))    #string
n_age = int(age)
print(n_age)        #18
print(type(n_age))  #int

# ---

def say_hello():
  print("hello")
  print("bye")
print("bye")
# 들여쓰기로 구분되기 때문에, 주의할 것.
say_hello()
say_hello()
say_hello()
say_hello()
# function 실행. ()까지 적어줘야 실행.