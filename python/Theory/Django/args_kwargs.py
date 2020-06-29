def plus(a,b,*args,**kwargs):
  print(args)
  print(kwargs)
  return a+b

plus(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,hello=True,hedllo=True,hecllo=True,heldlo=True,helleo=True)

def infinte_plus(*args):
  result = 0
  for number in args:
    result += number
  print(result)
  return result

infinte_plus(1,1,1,1,1,1,1,1,1,2,1,5,3,1,2,3,1,4,1,5,1,2)
