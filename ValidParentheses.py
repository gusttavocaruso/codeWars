'''
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.'''

def valid_parentheses(string):
    ss = list()
    
    for s in string:
        if(s == '('):
            ss.append(s)
        elif(s == ')'):
            try:
                ss.pop()
            except:
                return False

    if(len(ss) == 0):
        return True
    else:
        return False
