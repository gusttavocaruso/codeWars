'''
This time no story, no theory. The examples below show you how to write function'''

def accum(s):
    new_str = str()
    
    for i, st in enumerate(list(s)):
        if i == len(list(s))-1:
            new_str += (st * (i + 1)).title()
        else:
            new_str += (st * (i + 1)).title() + '-'
        
    return new_str
