'''
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.'''

def create_phone_number(n):
    phone = '('
    for i, num in enumerate(n):
        if i <3:
            phone += str(num)
            if i == 2:
               phone += ') ' 
        elif i <= 13:
            phone += str(num)
            if i == 5:
                phone += '-'
        
    return phone
