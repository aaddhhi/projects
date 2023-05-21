x=float(input('enter the first side of triangle'))
y=float(input('enter the second side of the triangle'))
z=float(input('enter the third side of the triangle'))
if(x+y>z and x+z>y and z+y>x):
    print('triangle can be formed')
else:
    print('triangle cannot be formed')