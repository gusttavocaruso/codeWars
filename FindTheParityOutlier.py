'''
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.'''

def find_outlier(integers):
    odd, even = list(), list()
    odd_n, even_n = 0, 0
    
    for int in integers:
        if (int % 2 == 0):
            even.append(int)
            even_n += int
        else:
            odd.append(int)
            odd_n += int
        
    return odd_n if len(odd) == 1 else even_n
