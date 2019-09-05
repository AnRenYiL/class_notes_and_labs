def pluck(arr,key)
    result = []
    arr.each {|x| result.push(x[key])}
    print result
end
pluck([{a:1}, {a:2}], :a)  ## returns [1,2]
pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :a) ## returns [nil, 4, 1, nil]
pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :b) ## returns [2,4,nil,nil]