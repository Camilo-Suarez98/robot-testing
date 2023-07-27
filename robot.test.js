const  createRobot = require('./robot.js');

describe('createRobot', () => {
	test('Should return error with message invalid orientation', () => {
		const message = 'invalid orientation'
    const myRobot = createRobot([4, 3], 'Soth')
		expect(myRobot.message).toBe(message)
	});

	test('Should return error with message invalid coordinates', () => {
		const message = 'invalid coordinates'
		const myRobot = createRobot([11, 0], 'East')
		expect(myRobot.message).toBe(message)
	});

	test('Should return Robot created succefully', () => {
		const message = 'Robot created succesfully'
		const myRobot = createRobot([4, 3], 'South')
		expect(myRobot.message).toBe(message)
	});
});

describe('getPosition from robot', () => {
	test('Should return error with message out of limits', () => {
		const message = 'Out of limits'
		const myRobot = createRobot([11, 1], 'North')
		const result = myRobot.getPosition()
		expect(result).toBe(message)
	})

	test('Should return with place succefully', () => {
		const place =  {coordinates: [7, 4], orientation: 'East'}
		const myRobot = createRobot([7, 4], 'East')
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
})

describe('robot advance', () => {
	test('Should advance with coordinates: [5, 2], orientation: West', () => {
		const place =  { coordinates: [4, 2], orientation: 'West' }
		const myRobot = createRobot([5, 2], 'West')
		myRobot.advance()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

	test('Should advance with coordinates: [5, 2], orientation: East', () => {
		const place =  { coordinates: [6, 2], orientation: 'East' }
		const myRobot = createRobot([5, 2], 'East')
		myRobot.advance()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

	test('Should advance with coordinates: [5, 2], orientation: South', () => {
		const place =  { coordinates: [5, 1], orientation: 'South' }
		const myRobot = createRobot([5, 2], 'South')
		myRobot.advance()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

	test('Should advance with coordinates: [5, 2], orientation: North', () => {
		const place =  { coordinates: [5, 3], orientation: 'North' }
		const myRobot = createRobot([5, 2], 'North')
		myRobot.advance()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
})

describe('robot turn to right', () => {
	test('Should advance to right with coordinates: [3, 6], orientation: North', () => {
		const place =  { coordinates: [3, 6], orientation: 'East' }
		const myRobot = createRobot([3, 6], 'North')
		myRobot.turnRight()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

	test('Should advance to right with coordinates: [7, 1], orientation: East', () => {
		const place =  { coordinates: [7, 1], orientation: 'South' }
		const myRobot = createRobot([7, 1], 'East')
		myRobot.turnRight()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

	test('Should advance to right with coordinates: [6, 1], orientation: South', () => {
		const place =  { coordinates: [9, 4], orientation: 'West' }
		const myRobot = createRobot([9, 4], 'South')
		myRobot.turnRight()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

	test('Should advance to right with coordinates: [1, 4], orientation: West', () => {
		const place =  { coordinates: [1, 4], orientation: 'North' }
		const myRobot = createRobot([1, 4], 'West')
		myRobot.turnRight()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
})

describe('robot turn to left', () => {
	test('Should advance to left with coordinates: [4, 7], orientation: South', () => {
		const place =  { coordinates: [4, 7], orientation: 'East' }
		const myRobot = createRobot([4, 7], 'South')
		myRobot.turnLeft()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
   
	test('Should advance to left with coordinates: [1, 5], orientation: East', () => {
		const place =  { coordinates: [1, 5], orientation: 'North' }
		const myRobot = createRobot([1, 5], 'East')
		myRobot.turnLeft()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

	test('Should advance to left with coordinates: [7, 3], orientation: North', () => {
		const place =  { coordinates: [7, 3], orientation: 'West' }
		const myRobot = createRobot([7, 3], 'North')
		myRobot.turnLeft()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

	test('Should advance to left with coordinates: [6, 1], orientation: West', () => {
		const place =  {coordinates: [6, 1], orientation: 'South'}
		const myRobot = createRobot([6, 1], 'West')
		myRobot.turnLeft() 
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
})

describe('Instructions', () => {
	test('Should show message invalid orientation with instruction not valid and with coordinates: [6, 1], orientation: West', () => {
		const message = 'invalid orientation'
		const myRobot = createRobot([6, 1], 'West')
    myRobot.instructions('C')
		const result = myRobot.getPosition()
		expect(result).toBe(message)
	})

	test('Should advance with instruction R and with coordinates: [7, 3], orientation: North', () => {
		const place =  { coordinates: [7, 3], orientation: 'East' }
		const myRobot = createRobot([7, 3], 'North')
		myRobot.instructions('R') 
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

	test('Should advance with instruction R and with coordinates: [6, 1], orientation: East', () => {
		const place =  { coordinates: [6, 1], orientation: 'South' }
		const myRobot = createRobot([6, 1], 'East')
		myRobot.instructions('R') 
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
  
	test('Should advance with instruction R and with coordinates: [3, 9], orientation: South', () => {
		const place =  { coordinates: [3 ,9], orientation: 'West' }
		const myRobot = createRobot([3, 9], 'South')
		myRobot.instructions('R') 
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

	test('Should advance with instruction R and with coordinates: [1, 3], orientation: West', () => {
		const place =  { coordinates: [1, 3], orientation: 'North' }
		const myRobot = createRobot([1, 3], 'West')
		myRobot.instructions('R') 
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

	test('Should advance with instruction L and with coordinates: [3, 8], orientation: North', () => {
		const place =  { coordinates: [3, 8], orientation: 'West' }
		const myRobot = createRobot([3, 8], 'North')
		myRobot.instructions('L') 
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

	test('Should advance with instruction L and with coordinates: [2, 7], orientation: East', () => {
		const place =  { coordinates: [2, 7], orientation: 'North' }
		const myRobot = createRobot([2, 7],'East')
		myRobot.instructions('L') 
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

	test('Should advance with instruction L and with coordinates: [9, 7], orientation: South', () => {
		const place =  { coordinates: [9, 7], orientation: 'East' }
		const myRobot = createRobot([9, 7], 'South')
		myRobot.instructions('L') 
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

	test('Should advance with instruction L and with coordinates: [7, 4], orientation: West', () => {
		const place =  { coordinates: [7, 4], orientation: 'South' }
		const myRobot = createRobot([7, 4], 'West')
		myRobot.instructions('L') 
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

	test('Should advance with instruction A and with coordinates: [2,1], orientation: North', () => {
		const place =  { coordinates: [2,2], orientation: 'North' }
		const myRobot = createRobot([2,1], 'North')
		myRobot.instructions('A')
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

	test('Should advance with instruction A and with coordinates: [3, 2], orientation: East', () => {
		const place =  { coordinates: [4, 2], orientation: 'East' }
		const myRobot = createRobot([3, 2], 'East')
		myRobot.instructions('A')
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

	test('Should advance with instruction A and with coordinates: [9, 4], orientation: South', () => {
		const place =  { coordinates: [9, 3], orientation: 'South' }
		const myRobot = createRobot([9, 4], 'South')
		myRobot.instructions('A')
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

	test('Should advance with instruction A and with coordinates: [9, 2], orientation: West', () => {
		const place =  {coordinates: [8, 2], orientation: 'West'}
		const myRobot = createRobot([9, 2], 'West')
		myRobot.instructions('A')
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
})

describe('robot function complete', () => {
	test('Should function createdRobot with instruction RAALAL and with coordinates: [7, 3], orientation: North', () => {
		const place =  {coordinates: [9, 4], orientation: 'West'}
		const myRobot = createRobot([7, 3], 'North')
		myRobot.instructions('RAALAL')
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
})