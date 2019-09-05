print "Enter the correct number:"
num = gets.to_i 
if num % 2 == 0
    puts num ** 2
elsif num % 3 == 0
    puts num ** 3
else
    puts num
end
