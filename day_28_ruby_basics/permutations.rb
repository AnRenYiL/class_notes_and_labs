print "the first input: "
first = gets.chomp
print "the second input: "
second = gets.chomp
print "the last input: "
last = gets.chomp

for number1 in 1..3
    a1 = first if number1 == 1
    a1 = second if number1 == 2
    a1 = last if number1 == 3
    for number2 in 1..3
        a2 = a1 + first if number1 == 1
        a2 = a1 + second if number1 == 2
        a2 = a1 + last if number1 == 3
        for number3 in 1..3
            a3 = a2 + first if number3 == 1
            a3 = a2 + second if number3 == 2
            a3 = a2 + last if number3 == 3
            puts a3
        end
    end
end