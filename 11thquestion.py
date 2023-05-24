name = input("Enter the employee's name: ")
age = int(input("Enter the employee's age: "))
gender = input("Enter the employee's gender (M/F): ")
days_worked = int(input("Enter the number of days worked: "))

wages = 0

if age >= 18 and age < 30:
    if gender == "M":
        wages = 700 * days_worked
    elif gender == "F":
        wages = 750 * days_worked
elif age >= 30 and age <= 40:
    if gender == "M" or gender == "F":
        wages = 800 * days_worked

print("Employee Name:", name)
print("Wages: Rs", wages)
