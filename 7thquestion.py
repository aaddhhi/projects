from datetime import date

current_year = date.today().year
year_of_birth = int(input("Enter your year of birth: "))

age = current_year - year_of_birth

if (age > 60):
    fare = 1020 - (1020 * 0.2)
    print("Congratulations! You are eligible for the senior citizen concession.")
    print(f"Your final traveling charge is Rs {fare:.2f}.")
else:
    print("Sorry, you are not eligible for the senior citizen concession.")
    
