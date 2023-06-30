import {useState} from 'react'
import {AppContainer, LockImage, Title, Button} from './styledComponents'

const Unlock = () => {
  const [status, setStatus] = useState(false)

  const onSetState = () => {
    setStatus(prevStatus => !prevStatus)
  }
  const imgUrl = status
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const imgAlt = status ? 'unlock' : 'lock'
  const btnName = status ? 'Lock' : 'Unlock'
  const title = status ? 'Unlocked' : 'Locked'

  return (
    <AppContainer>
      <LockImage src={imgUrl} alt={imgAlt} />
      <Title>Your Device is {title}</Title>
      <Button type="button" onClick={onSetState}>
        {btnName}
      </Button>
    </AppContainer>
  )
}

export default Unlock
