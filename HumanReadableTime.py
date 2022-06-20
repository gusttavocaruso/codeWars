'''
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)'''

def make_readable(seconds):
    m, s = divmod(seconds, 60)
    h, m = divmod(m, 60)

    return f'{h:02d}:{m:02d}:{s:02d}'
