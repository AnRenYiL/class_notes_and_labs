print "Enter the book name:"
str = gets.chomp
bookArr= []
while str != "exit"
    bookArr.push(str.capitalize)
    print "Enter the book name:"
    str = gets.chomp
end
print bookArr
print "\n"