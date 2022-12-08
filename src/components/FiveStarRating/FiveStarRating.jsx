import { StarFill, StarHalf, Star as StarEmpty } from 'react-bootstrap-icons'

export function FiveStarRating({ rating }) {
  const starList = []
  const fullStarCount = Math.floor(rating)
  const halfStarCount = rating - fullStarCount >= 0.5 ? 1 : 0
  const emptyStarCount = 5 - fullStarCount - halfStarCount

  for (let i = 0; i < fullStarCount; i++) {
    starList.push(<StarFill key={'star-full' + i} />)
  }
  for (let i = 0; i < halfStarCount; i++) {
    starList.push(<StarHalf key={'star-half' + i} />)
  }
  for (let i = 0; i < emptyStarCount; i++) {
    starList.push(<StarEmpty key={'star-empty' + i} />)
  }

  return <div>{starList}</div>
}
