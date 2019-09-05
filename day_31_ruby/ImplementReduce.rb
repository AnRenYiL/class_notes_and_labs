def reduce(arr, initial_val)
    arr.each do |x|
        initial_val = yield(initial_val, x)
    end
    initial_val
end
puts reduce([1, 2, 3, 4, 5, 6], 0) { |total, v| total + v } # => 21

puts reduce(["This", "is", "my", "sentence"], "") { |sentence, word| sentence + " " + word } # => "This is my sentence"

puts reduce([6, 5, 9, 2, 1, 10, 3], Float::INFINITY) { |min, v|
  if min > v
    v
  else
    min
  end
}
# => 1