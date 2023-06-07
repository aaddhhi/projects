start_table = int(input("Enter the start table: "))
end_table = int(input("Enter the end table: "))

print("Multiplication tables from", start_table, "to", end_table)
for i in range(1, 11):
    for j in range(start_table, end_table + 1):
        result = (j*i ) 
        print(j, "*",i,"=",result   , end=" ")
    print()
