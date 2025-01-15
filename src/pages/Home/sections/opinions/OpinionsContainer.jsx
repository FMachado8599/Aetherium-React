import { db } from '../../../../firebase/config.js'
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from 'react';
import Rating from './Rating.jsx';

const OpinionsContainer = () =>{

    const [user, setUser] = useState([]);
    
        useEffect(() => {
        const fetchClients = async () => {
            try {
            const userRef = collection(db, "users");
            const userQuery = query(userRef, where("role", "==", "client"));
            const querySnapshot = await getDocs(userQuery);
            const clients = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
    
            setUser(clients);
            } catch (error) {
            console.error("Error fetching users:", error);
            }
        };
        
        fetchClients();
        }, []);

    return (
        <ul className='opinions-list'>
            {user.map((user, index) => (
                <li className='opinion' key={index}>
                    <div className='user-info'>
                        <img src={user.avatar} alt={`Avatar`} />
                        <div>
                            <h4 className='user-name'>{user.name}</h4>
                            <p className='user-ocupation'>{user.ocupation}</p>
                        </div>
                    </div>
                    <p className='user-opinion'>{user.opinion}</p>
                    <Rating value={user.rating}/>
                </li>
            ))}
        </ul>
    )
}
export default OpinionsContainer;