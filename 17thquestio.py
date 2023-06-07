number = int(input("Enter a number: "))

print("Multiplication table for", number)
for i in range(1, 11):
    result = number * i
    print(number, "*", i, "=", result)
