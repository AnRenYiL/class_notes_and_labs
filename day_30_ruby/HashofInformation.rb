questions = ["What's your first name",
             "What's your last name",
             "What's your city of birth",
             "What's your age"]
result = {}
for i in 0..3
    puts questions[i]
    value = gets.chomp
    key = questions[i][12,questions[i].length-1]
    result[key] = value.capitalize
end
result.each do |key, value|
    puts "Your #{key} is #{value}"
end