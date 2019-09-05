class Dog 
    def initialize(colour, type)
      @colour = colour
      @type = type
      @bones = []
    end
    
    def give(bone)
        if @bones.length > 3
            puts "I have too many bones."
        else
            @bones.push(bone)
        end
    end
    
    def eat_bone
        if @bones.length > 0
            puts "yummy! I ate #{@bones.pop.size} bone"
        else
            puts "You're out of bones :("
        end
    end
    
end

class Bones
    attr_accessor :size
    def initialize(size)
      @size = size
    end

end