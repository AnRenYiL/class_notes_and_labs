# Methods

# Define a method with the 'def' keyword.
# Methods that return a boolean generally end
# with '?'
def by_five?(num)
  # In Ruby, a method implicitly returns
  # the last evaluated expression.
  num % 5 == 0
end

# Call a method
by_five?(5) # => true
by_five? 6 # => false

# You must always call a method with all of its required arguments
# Otherwise: ArgumentError: wrong number of arguments (given 0, expected 1)

# return

def my_method(a, b)
  return a * b
  # As in JavaScript, the lines following
  # a return are ignored
  a + b
end

# Variadic methods

def my_args(first, *args, last)
  # Use the splat (i.e. *) in front of an argyument to take
  # in any number of args into an array, just like gather
  # (i.e. ...) in Javascript. Unlike gather, it can be placed
  # at the beginning, the middle or the end of a list of arguments
  puts "first: #{first}"
  puts "args: #{args}"
  puts "last: #{last}"
end


def product(*nums)
  nums.reduce(1) do |accumulator, num|
    # In reduce, on the first iteration, accumulator is the initial value
    # 1 in this case.  If you do not explicitly specify aninitial value
    # then the first element of the collection is used as the initial value
    # of accumulator.
    accumulator * num
    # In the following iterations, accumulator will be the return
    # of the previous iteration.
  end
end
    
def getMin(*nums)
    nums.reduce do |temp, num|
        temp > num ? num : temp 
    end
end

# Blocks

def my_method
    puts "we are in the method"
    yield
  end
  
  my_method { puts "The block is called"}
  
  def my_method(x)
    # To execute a block that has been passed to a method
    # Use the `yield` keyword. This is like calling the block.
    # yield will return the last expression from the block
    yield_return = yield
    puts "Yielded block returned: #{yield_return}"
    puts "After block"
  end

  def burger
    puts 'top bun'
    yield
    puts 'bottom bun'
  end
  
  burger do
    puts 'lettuce'
    puts 'tomato'
    puts 'veggie patty'
  end
  
  
  def print_twice
    yield
    yield
  end
  print_twice { puts "test" }
  # test
  # test
  # => nil

#  print_twice
# LocalJumpError: no block given (yield)

# If you try to yield without a block you will get a
# no block given error.
# You can check if a block has been passed with the block_given? metjod.

# Example:

def do_something_with_block
  return "No block given" unless block_given?
  yield
end

# each

def each(array)
    for val in array
      yield val
    end
  end
  
  each([1,2,3,4,5]) do |x|
    puts x * 2
  end
  # is equivalent to:
  each([1,2,3,4,5]) { |x| puts x * 2 }

# map
def map(array)
    result = []
    for val in array
        result.push( yield val)
    end
    result
end

map([1,2,3,4,5]) do |x|
   x * 2
end

# Implement filter

def filter(array)
    new_array = []
    for val in array
      if yield(val)
        new_array.push(val)
      end
    end
    new_array
  end
  
  filter [1,2,3,4,5] do |v|
    v % 2 == 0
  end
  #  => [2, 4]

# A proc is an instance of the Proc class,
# which holds a code block to be executed and stored in
# a variable.

my_proc = Proc.new { |x| puts x }

my_proc.call(5)

# There is no dedicated Lambda class. A lambda is
# a special kind of Proc object

my_lambda = lambda { |x| puts x }

#  comparing to a method

def my_method(x)
    puts x
  end
  
  # A proc behaves differentlythen a lambda,
  # specifically when it comes to arguments

a = Proc.new {|x, y| puts "I don't care about arguments" }
a.call
# I don't care about arguments
b = lambda {|x, y| puts "I care about arguments" }
# ArgumentError: wrong number of arguments (given 0, expected 2)
b.call(1,2)

# Procs and lambdas also handle return differently
# A lambda will return normally, like a regular method.
# A Proc on the other hand will return from the method
# enclosing the proc.

def proc_return
  my_proc = Proc.new { return }
  my_proc.call
  puts "this will not be printed"
end

def lambda_return
  my_lambda = -> { return }
  my_lambda.call
  puts "this will be printed"
end

# Methods can take named arguments

# Named arguents are written as key-value pairs of a hash.
# They must be given a default value
def add(first: 0, second: 1)
  # The argument `first` has a default value of 0
  # The argument `second` has a default value of 1
  first + second
end

add
# => 1
add(5, 5)
# ArgumentError: wrong number of arguments (given 2, expected 0)
add(second: 6)
# => 6
hash = {first: 5, second: 10}
add(hash)
# => 15

def some_method(required_1, required_2, options={})
  defaults = {
    option_1: "option 1 default",
    option_2: "option 2 default",
    option_3: "option 3 default"
  }
  options = defaults.merge(options)
  # Do something cool. 
end