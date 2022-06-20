# Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

def even_numbers(arr,n):
    ar = list()
    
    for i in arr:
        if i % 2 == 0:
            ar.append(i)
            
    return ar[-n:]
