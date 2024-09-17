//https://github.com/BaseCampCoding/oop-exercise-2-jacoba2024through2025
class Vehicle {
    constructor(make, model, color, year) {
        this.make = make
        this.model = model
        this.color = color
        this.year = year
    }
    vehicleDetails() {
        console.log(`Make: ${this.make}`)
        console.log(`Model: ${this.model}`)
        console.log(`Color: ${this.color}`)
        console.log(`Year: ${this.year}`)
    }

    
}

class Car extends Vehicle {
    constructor(make, model, color, year, doors, mileage) {
        super(make, model, color, year)
        this.doors = doors
        this.mileage = mileage
        
        if (this.mileage < 10000) {
            this.condition = 'New'
        } else {
            this.condition = 'Old'
        }

    }
    vehicleDetails() {
        console.log(`Make: ${this.make}`)
        console.log(`Model: ${this.model}`)
        console.log(`Color: ${this.color}`)
        console.log(`Year: ${this.year}`)
        console.log(`Number of Doors: ${this.doors}`)
        console.log(`Mileage: ${this.mileage} miles`)
        console.log(`Condition: ${this.condition}`)
        
    }
    
}