arr = (1..1_000_000).to_a.push(rand(1_000_000))
for value in arr do
    if arr.index(value) != arr.rindex(value)
        puts value
        break
    end
end

my_hash = {}
for value in arr do
    if my_hash[value]
        puts value
        break
    else
        my_hash[value]=value
    end
end

