# https://ruby-doc.org/core-2.4.1/Array.html

my_array = []
array_1 = Array.new # => []
array_2 = Array.new(2) # => [nil, nil]

a = [1, "Hi", "Hello"]

a[1] # => "Hi"
a[10] # => nil

# To replace value at an index, use bracket notation
# with assignment (i.e. []=)

a[0] = "Hola"

# Shovel operator
# One way to push values in an array is to use the
# shovel operator (<<)

a << "👋"
# Shovel returns the array, making it chainable

a << "Bonjour" << "Good Morning"

# You can also use .push in ruby. It also returns the array.
a.push('Yo').push("What's up")

# Use .include?() to test if a value is inside of an array. Returns
# `true` if it is. This is like .includes in JS.
a.include?("Hello") # => true
a.include?(123) # => false

# To get the size of an array, there are 3 methods:

a.length
a.count
a.size

#  To turn an array of any depth into a one-dimensional array
# use flatten

b = [1,[2,[3,[4,[5,[6]]]]]]
b.flatten
# => [1, 2, 3, 4, 5, 6]
b.flatten(1)
# => [1, 2,[3,[4,[5,[6]]]]]

# Use unshift to mutate and add at the beginning of an array
a.unshift("Salut")
# To remove an item from the beginning of an array, use .shift
a.shift # => "Salut"

a.pop # remove last item from an array
a.pop(2) # remove last 2 items

# To convert a string into an array of words
"a,b,c,,d,e,f".split(",")
#  => ["a", "b", "c", "", "d", "e", "f"]

# Createa string from an array
[1, 2, 3, 4, 5].join(" - ")
# => "1 - 2 - 3 - 4 - 5"

"gvvuv bgibi jjkjnjkn".split(' ')

fizzbuzzArr = []

for number in 1..100
    if number % 3 == 0
        fizzbuzzArr.push "FIZZ"
    elsif number % 5 == 0
        fizzbuzzArr.push "BUZZ"
    elsif number % 3 == 0 && number % 5 == 0
        fizzbuzzArr.push "FIZZBUZZ"
    else
        fizzbuzzArr.push number
    end
end

# print fizzbuzzArr

b = [[1,7,3],[4,4,6],[7,2,9]]

b.each do |x|
    x.each do |i|
        # puts i * i
    end
end

array =  [['john', 'steve', 'jen'],['ate', 'sat on', 'bought'],['an apple', 'the couch', 'a toothbrush']]


array.map do |sub_arr|
    print sub_arr.sample + " "
end
print "\n"
# print result

my_hash = {"BC" => ["Richmond", "Vancouver"], "Alberta" => ["Calgary", "Edmonton"]}

my_hash.each do |key, value|
    puts "#{key}: #{value.join(',')}"
end

