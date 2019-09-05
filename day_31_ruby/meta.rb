#  meta programming
# Programming techniques that perform operations
# on the running code itself.

def one
    1
   end
   
   def two
    2
   end
   
   # define_method
   
   # This method allows us to define methods dynamicallly while
   # the program is running.
   
   numbers = {
     1 => "one",
     2 => "two",
     3 => "three",
     4 => "four",
     5 => "five"
   }
   
   numbers.each do |number, number_word|
     # When using define_method, the first argument
     # is the name of the method that is being defined
     # (as a symbol or string)
     # The body of the method is the block that is passed
     # to define_method
     define_method(number_word) do
       number
     end
   end
   