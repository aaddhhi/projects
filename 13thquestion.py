year = int(input("Enter a year: "))

if year % 400 == 0:
    leap_year = True
elif year % 100 == 0:
    leap_year = False
elif year % 4 == 0:
    leap_year = True
else:
    leap_year = False

if leap_year:
    print(year, "is a leap year.")
else:
    print(year, "is not a leap year.")
