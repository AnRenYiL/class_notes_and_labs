
def frequency_of_numbers
    arr = [1, 2, 3, 4, 4, 4, 2, 3, 3, 3]
    restult = {}
    arr.group_by{|x| x}.each{|k,v| restult[k] = v.length }
    restult
end

def frequency_of_numbers1
    arr = [1, 2, 3, 4, 4, 4, 2, 3, 3, 3]
    arr.each_with_object({}){|i, a| a[i]==nil ? a[i] = 1 : a[i] = a[i] + 1 }
end

print frequency_of_numbers1