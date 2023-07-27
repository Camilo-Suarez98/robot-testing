function createRobot([_x, _y], direction) {
  let x = _x
  let y = _y
  let orientation = direction
  let rightOrientation = [ 'North', 'East', 'South', 'West' ]
  let message
  
  (function validator() {
    try {
      const isValid = rightOrientation.includes(orientation)
      if (!isValid) {
        throw new Error('invalid orientation')
      }

      if (x > 10 || y > 10 || x < 0 || y < 0) {
        throw new Error('invalid coordinates')
      }

      message = 'Robot created succesfully'
    } catch (error) {
      message = error.message
    }
  })()

  function getPosition () {
    try {
      if (x > 10 || y > 10 || x < 0 || y < 0) {
        return ('Out of limits')
      }

      return { coordinates: [x, y], orientation }
    } catch (error) {
      message = error.message
    }
  }

  function advance () {
    if (orientation === 'North') {
      y += 1
    } else if (orientation === 'East') {
      x += 1
    } else if (orientation === 'South') {
      y -= 1
    } else if (orientation === 'West') {
      x -= 1
    }
  }

  function turnRight () {
    if (orientation === 'North') {
      orientation = 'East'
    } else if (orientation === 'East') {
      orientation = 'South'
    } else if (orientation === 'South') {
      orientation = 'West'
    } else {
      orientation = 'North'
    }
  }

  function turnLeft ()  {
    if (orientation === 'North') {
      orientation = 'West'
    } else if (orientation === 'East') {
      orientation = 'North'
    } else if (orientation === 'South') {
      orientation = 'East'
    } else if (orientation === 'West') {
      orientation = 'South'
    }
  }

  function instructions (string) {
    for (let i = 0; i < string.length; i ++) {
      if (string[i] === 'R') {
        turnRight()
      } else if (string[i] === 'L') {
        turnLeft()
      } else if (string[i] === 'A') {
        advance()
      }
    }     
  }

  return { 
    message,
    getPosition,
    advance,
    turnRight,
    turnLeft,
    instructions
  }
  
}
  
module.exports = createRobot
