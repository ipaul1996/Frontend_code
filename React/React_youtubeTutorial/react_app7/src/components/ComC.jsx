import React, {useContext} from 'react'
import { AppState } from '../App'

const ComC = () => {

  const appData = useContext(AppState);

  return (
    <div>ComC: {appData}</div>
  )
}

export default ComC