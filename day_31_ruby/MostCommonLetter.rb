def most_common_letter(str)
     strArr = str.scan(/[a-zA-Z0-9]/)
     resultArr = strArr.group_by{ |e| e }.sort_by {|obj| obj[1].length} 
     puts resultArr[-1][0]
end

most_common_letter("aaaa@#$%^^&bb&&c")
# most_common_letter("T a d c g d g d d n")
# most_common_letter("1111 monkeys on the wall")