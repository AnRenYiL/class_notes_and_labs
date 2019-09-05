array = [[2,3,4], [5,6,7], [6,7,8]]
print array.map{ |sub_arr| 
    sub_arr.map { |val| val ** 2 }
}
print "\n"