import React from 'react'

const Square = (props) => {
  const { squares, setSquares, player, setPlayer, squareValue, index } = props

  const handleClick = () => {
    if (!squareValue) {
      if (player) {
        squares.splice(index, 1, 'X')
        setSquares(squares)
        setPlayer(!player)
      } else {
        squares.splice(index, 1, 'O')
        setSquares(squares)
        setPlayer(!player)
      }
    }
  }

  return (
    <div className='square' onClick={handleClick} >
      {squareValue === 'O' ? 'O' : squareValue}
    </div>
  )
}

export default Square