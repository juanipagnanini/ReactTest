import { useState } from 'react'
import './App.css'

export function TwitterFollowCard ({children ,userName}) {
    const [isFollowing, setIsFollowing] = useState(false)  
    
    const text = isFollowing ? 'Following' : "Follow"
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'> 
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar' 
                    alt="Avatar" 
                    src={`https://unavatar.io/${userName}`}/>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Unfollow</span>
                </button>
            </aside>
        </article>
    )
}