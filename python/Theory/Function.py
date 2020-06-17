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

# ---


def say_hello_who(name="anonymous"):
  print("hello", name)

say_hello_who()
say_hello_who("Anne")

def plus(a, b):
  print(a + b)

def minus(a, b=0):
  print(a - b)

plus(2,5)
minus(2)
minus(2,5)

# ---


def p_plus(a,b):
  print(a + b)

def r_plus(a,b):
  return a + b
#   print("something here", True)  # 실행되지X

p_result = p_plus(2,3)
r_result = r_plus(2,3)

print(p_result,r_result)  # None 5

# ---

def p_minus(a, b):
	return a - b

result = p_minus(30, 1)

print(result)   # 29

def k_minus(a, b):
	return a - b

result = k_minus(b=30, a=1)

print(result)   # -29

# ---

def say_hello_age(name,age):
  return f"Hello {name} you are {age} years old"  #string에 인자 받아서 사용하기
#   return "Hello" + name + "you are" + age + "years old"  #+로 string과 인자를 연결시켜주는 방법  

# hello = say_hello_age("nico", "12")
hello = say_hello_age(age="12", name="nico")
print(hello)
