import React from 'react'
import Card from './Card'
import { StyledCards } from './Cards.styled'
import { CardsData } from '../../../data/CardsData'

const Cards = ({CardsData}) => {
  return (
    <StyledCards>
    {
        CardsData.map((stats, index) => {
          return (
            <Card key={index} {...stats}>  </Card>
          )
      })
    }
    </StyledCards>
  )
}

export default Cards