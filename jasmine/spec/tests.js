
describe('Vehicle and Car Classes', () => {
    let originalConsoleLog;
    let myCar;

    beforeEach(() => {
        // Store the original console.log method
        originalConsoleLog = console.log;
        // Replace console.log with a spy to capture log messages
        spyOn(console, 'log').and.callThrough();

        myCar = new Car('Toyota', 'Camry', 'Silver', 2022, 4, 7500);
    });

    afterEach(() => {
        // Restore the original console.log method after each test
        console.log = originalConsoleLog;
    });

    it('should display vehicle details for Car', () => {
        // Act
        myCar.vehicleDetails();

        // Assert
        expect(console.log).toHaveBeenCalledWith('Make: Toyota');
        expect(console.log).toHaveBeenCalledWith('Model: Camry');
        expect(console.log).toHaveBeenCalledWith('Color: Silver');
        expect(console.log).toHaveBeenCalledWith('Year: 2022');
        expect(console.log).toHaveBeenCalledWith('Number of Doors: 4');
        expect(console.log).toHaveBeenCalledWith('Mileage: 7500 miles');
        expect(console.log).toHaveBeenCalledWith('Condition: New');
    });

    it('should display vehicle details for Vehicle', () => {
        // Arrange
        const vehicle = new Vehicle('Ford', 'F-150', 'Blue', 2023);

        // Act
        vehicle.vehicleDetails();

        // Assert
        expect(console.log).toHaveBeenCalledWith('Make: Ford');
        expect(console.log).toHaveBeenCalledWith('Model: F-150');
        expect(console.log).toHaveBeenCalledWith('Color: Blue');
        expect(console.log).toHaveBeenCalledWith('Year: 2023');
    });
});
