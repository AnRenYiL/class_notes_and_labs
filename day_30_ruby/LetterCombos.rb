print "Enter the string:"
str = gets.chomp
result = []
for number in 0...(str.length-1)
    result.push("#{str[number]}#{str[number+1]}")
end
print result
print "\n"
