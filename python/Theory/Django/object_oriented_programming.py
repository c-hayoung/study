# class : blueprint
class Car():
  wheels = 4
  doors = 4
  windows = 4
  seats = 4

  # method : class 안의 function (첫번째 argument로 method를 호출하는 instance자신을 가져온다.)
  def start(self):
    print(self.color)
    print("I STARTED")

method_test = Car()
method_test.color = "Blue"
method_test.start()

# instance : class를 통해 만들어낸 개별 복제품
porche = Car()
# instanciation : 설계도를 가져와 instance를 만드는 것.
porche.color = "Red"

print(porche) 
# object 형태로 제시됨.
print(porche.windows) 
# 내부 객체를 지정해 출력 가능.
print(porche.color)
# 새롭게 지정한 color 출력.

ferrari = Car()
ferrari.color = "Yellow"

mini = Car()
mini.color = "White"

