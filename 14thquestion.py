start = int(input("Start: "))
end = int(input("End: "))

even_count = 0
odd_count = 0

for num in range(start, end + 1):
    if num % 2 == 0:
        even_count += 1
    else:
        odd_count += 1

print("Even:", even_count)
print("Odd:", odd_count)
