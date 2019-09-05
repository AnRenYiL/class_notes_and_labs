class Animals
    attr_accessor :name, :color
    def initialize(name,color)
      @name = name
      @color = color
    end
    def eat
        puts "I'm eating"
    end
    
    def walk
        puts "I'm walking"
    end
    
end

class Dog < Animals
    def eat
        super
        puts "Bones are yummy!"
    end
end

class Cat < Animals
    def eat
        puts "Fish is yummy!"
    end
end