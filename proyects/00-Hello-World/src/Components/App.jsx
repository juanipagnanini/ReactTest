import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        id: '1',
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true,
    },
    {
        id: '2',
        userName: 'pheralb',
        name: 'Pablo Hernandez',
        isFollowing: false,
    },
    {
        id: '3',
        userName: 'elonmusk',
        name: 'Elon Musk',
        isFollowing: true,
    },
    {
        id: '4',
        userName: 'lionel10ok',
        name: 'Lionel Messi',
        isFollowing: false,
    }
]

export function App () {

    return (
        <section className='App'>
            {
                users.map (user => {
                    const {id, userName, name, isFollowing} = user
                    return (
                    <TwitterFollowCard
                        key={id}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}