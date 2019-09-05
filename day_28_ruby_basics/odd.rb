# x = 1
# i = 1
# while x <= 30
#     if i % 2 == 1
#         puts i
#         x += 1
#     end
#     i += 1
# end
# 
# # loop

# x = 1
# loop do
#     puts x
#     x += 1
#     break if x == 13
# end
# 
# # for loop
# # 1...100 to 99
# # 1..100  to 100
# for number in 1..100
#     puts number
# end

for number in 1..100
    puts "FIZZ" if number % 3 == 0
    puts "BUZZ" if number % 5 == 0
    puts "FIZZBUZZ" if number % 3 == 0 && number % 5 == 0
    puts number if number % 3 != 0 && number % 5 != 0
end

for number in 1..100
    if number % 3 == 0
        puts "FIZZ"
    elsif number % 5 == 0
        puts "BUZZ"
    elsif number % 3 == 0 && number % 5 == 0
        puts "FIZZBUZZ"
    else
        puts number
    end
end
