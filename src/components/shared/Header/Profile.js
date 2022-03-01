import React from 'react'
import { Link } from 'react-router-dom'
import { StyledProfile } from './Profile.styled'

const Profile = (props) => {
  return (
    <Link 
      to={props.redirectTo}
      onClick={() => props.changePageTitle('profile')}
    >
      <StyledProfile>
      <div className="profile-info">
          <p className="profile-name">{props.name}</p>
          <p className="profile-email">{props.email}</p>
        </div>
        <div className='profile-pic'>
          <img src={props.image}  />
        </div>
      </StyledProfile>
    </Link>
  )
}

export default Profile