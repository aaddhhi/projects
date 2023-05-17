height=float(input('enter the height'))
radius=float(input('enter the radius'))
pi=3.14
volume=pi * radius * radius * height
Surf_area = ((2*pi*radius)*height) + ((pi*radius**2)*2)
print('the volume is',volume)
print('the surface area is',Surf_area)