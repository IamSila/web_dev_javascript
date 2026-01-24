

'''
string =
int
boolean - truth value (true or false)
nonetype - 
'''
name = "Joy"
number = 10
is_red = False
print(type(is_red))


# variable - memory location that stores value
# rules of variable naming
# arithmetic - * / % -
# selective statements
# loops - repetitive statements
# functions - block of code that does a specific task

# print number 1 to 10
def print_numbers(start, end):
    for number in range(start, end, 1):
        print(number, end='')
print_numbers(0, 11)