# ---
# math modules의 모든 기능을 가져옴
# import math

# print(math.ceil(1.2))
# print(math.fabs(-1.2))

# ---
# math module의 특정기능을 가져옴.
from math import ceil,fsum
from math import fabs as my_abs

print(ceil(1.2))
print(fsum([1, 2, 3, 4, 5, 6, 7]))
print(my_abs(-1.2))

# ---
# 내가 만든 기능 import하기
from calculator import plus as my_plus

print(my_plus(2,5))