def calculate_tip(food_rating, service_rating, ambience_rating, bill_amount):
    if food_rating >= 4 and service_rating >= 4 and ambience_rating >= 4:
        tip_percentage = 0.1
    elif food_rating >= 3 and service_rating >= 3 and ambience_rating >= 3:
        tip_percentage = 0.05
    else:
        tip_percentage = 0.01
    
    tip_amount = bill_amount * tip_percentage
    return tip_amount

# Read the ratings and bill amount from the user
food_rating = int(input("Enter the food rating (1-5): "))
service_rating = int(input("Enter the service rating (1-5): "))
ambience_rating = int(input("Enter the ambience rating (1-5): "))
bill_amount = float(input("Enter the bill amount: "))

# Calculate the tip
tip = calculate_tip(food_rating, service_rating, ambience_rating, bill_amount)

# Display the tip amount
print("The tip amount is:", tip)
