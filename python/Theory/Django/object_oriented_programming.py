# class : blueprint
class Car():

  def __init__(self,*args,**kwargs):
    # self.property 의 default값 선언
    self.wheels = 4
    self.doors = 4
    self.windows = 4
    self.seats = 4
    # kwargs를 부여해 값을 수정할 수 있다.
    self.color = kwargs.get("color","black")
    self.price = kwargs.get("price","$20")

  def __str__(self):
    return f"Car with {self.wheels} whells {self.color}"

class Convertible(Car):
  # extend class
  def take_off(self):
    return "taking off"

  # override method
  def __str__(self):
    return f"Car with no roofs"

  # extend method
  def __init__(self,**kwargs):
    super().__init__(**kwargs)
    self.time = kwargs.get("time",10)

porche = Convertible(color="green",price="$40")
print(porche.time)

#   # method : class 안의 function (첫번째 argument로 method를 호출하는 instance자신을 가져온다.)
#   def start(self):
#     print(self.color)
#     print("I STARTED")

# method_test = Car()
# method_test.color = "Blue"
# method_test.start()

# # instance : class를 통해 만들어낸 개별 복제품
# porche = Car()
# # instanciation : 설계도를 가져와 instance를 만드는 것.
# porche.color = "Red"

# print(porche) 
# # object 형태로 제시됨.
# print(porche.windows) 
# # 내부 객체를 지정해 출력 가능.
# print(porche.color)
# # 새롭게 지정한 color 출력.

# ferrari = Car()
# ferrari.color = "Yellow"

# mini = Car()
# mini.color = "White"

