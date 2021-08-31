import React,{useState,useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import dataBase from './firebase';
import { query,collection,onSnapshot } from 'firebase/firestore';
import './TinderCard.css';
function TinderCards() {
    const [people, setPeople] = useState([])
    useEffect(() => {
        const dataQuery = query(collection(dataBase, "people"))
        const unsub=onSnapshot(dataQuery, (querySnapshot) => {
          setPeople( querySnapshot.docs.map(d => d.data()))
        });
        return ()=>(
            unsub()
        )
      }, [])
    
    return (
        <div>
            <h1>
                Hey I am tinderCard
            </h1>
            <div className='tinderCards__tinderContainer'>
            {
                people.map(person=>(
                    <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    >
                        <div
                        className='card'
                        style={{height:'50px',  backgroundImage:`url(${person.url})`}}>
                            <h3>
                            {person.name}
                            </h3>
                        </div>
                    </TinderCard>
                ))
            }
            </div>
        </div>
    )
}

export default TinderCards
