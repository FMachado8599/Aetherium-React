import { db } from '../../../../firebase/config.js'
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from 'react';

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
        <ul>
            {user.map((user, index) => (
                <li key={index}>
                    <img src={user.avatar} alt={`Avatar`} />
                    <h1>{user.name}</h1>
                    <p>{user.role}</p>
                    <p>{user.opinion}</p>
                    <p>{user.rating}</p>
                </li>
            ))}
        </ul>
    )
}
export default OpinionsContainer;