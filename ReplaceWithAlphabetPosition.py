'''
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.'''

def alphabet_position(text):
    alphabet = list('abcdefghijklmnopqrstuvwxyz')
    numb_text = ''
    
    for s in text.lower():
        if s in alphabet:
            numb_text += str((alphabet.index(s) + 1)) + ' '
    
    return numb_text.strip()
