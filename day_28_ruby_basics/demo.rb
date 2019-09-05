# Ruby

# Printing

# To output to the terminal like 'console.log'
# use print
# print doen't add a new line
print('Hello World')

# There's also 'puts'
# Adds a new line like 'console.log'
puts('Hello World')

# And there's p
p("I'm printing with p")
# Prints a value how ruby see it
# Useful fordebugging. Also returns the value passed to p()
# Similar to console.dir

# Bracket syntax for method arguments is optional
# e.g.
print "Hello World"

# This is a comment in Ruby

=begin
    I'm a multiline comment
    ola!
    More stuff
=end

# Most people will
# write multiline Comments
# like this

print "Hello World" # inline comments

# Variables
# Creating variables does not require a keyword
a = 1
b = a + 5
a1 =10

# 1a = 12 # This will get an error

# Ruby convetion for vairable naming is snake_case

first_name = 'Tam'

# if you start a variable name with a capital letter, it's considered a constant.
# Constants in Ruby can be changed but Ruby will give you a warning.
# Convetion is use to use ALL_CAPS when naming constants
MAX_PASSWORD_ATTEMPTS = 3

# Getting user input
print "What is your name"
name = gets
puts 'Hello'+name

puts "What is your first name"
first = gets.chomp
puts "What is your last name"
last = gets.chomp

puts first+last

# .chomp is a string method that removes the last '\n' character.
# Typically used with gets

# In Ruby all objects have a class. To know the 'type' of an object Use the .class method

p 1.class
p "hello".class
p 3.14.class

# Strings
"I'm a string"
'I\'m also a string'

# You can use String interpolation only with double quotes.
# Strings defined with single qupotes are considered literal strings.

# Use "#{<expression>}" inside a string to interpolate a Ruby expression.

"#{1 + 10} is not equal to #{8 + 8}"
name = 'John'
puts "Hello #{name}"

name[0] = 'F'

# Getting user input
print "What is your name"
name = gets
puts 'Hello'+name
puts name.upcase
puts name.downcase
puts name.capitalize

1
100
100_300 # In Ruby, _ are ingnored in numbers


puts "what is your score?"

score = gets.to_i

if score>90
   puts "A" 
elsif score>80
    puts "B" 
elseif score>70
    puts "C"
else
    puts "D"
end

puts 'a' if true

temp = gets.to_i

puts "It's cold" if temp < 10

if temp < 10
    puts "It's cold"
end

puts "It's cold" unless temp >= 10

# x++ won't in ruby
