class FizzBuzz
    attr_accessor :first_number, :second_number
    def initialize(first_number, second_number)
      @first_number = first_number
      @second_number = second_number
    end

    def run
        arr = []
        for value in 1..100 do
            if value % first_number == 0
                arr.push('fizz')
            elsif value % second_number == 0
                arr.push('buzz')
            elsif value % second_number  == 0   
                arr.push('fizzbuzz')
            else
                arr.push(value)
            end
        end
        print arr
    end
    
end