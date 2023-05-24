x=float(input('enter your salary:'))
y=int(input('enter the year of experience:'))
if(y>=10):
    print('your bonus is :',(x*10)/100)
elif(y>=6 and y<10):
    print('your bonus is :',(x*8)/100)
else:
    print('your bonus is :',(x*5)/100)


