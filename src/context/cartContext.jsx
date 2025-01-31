import React, { createContext, useContext, useState } from "react";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase/config.js";

// Crear el contexto
const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Datos del usuario logueado

    // Función para obtener el usuario actual (puedes usar lógica adicional aquí)
    const fetchUserData = async (userId) => {
        try {
            const userDocRef = doc(db, "users", userId);
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
                setUser({ id: userId, ...userDoc.data() });
            } else {
                console.error("El documento del usuario no existe.");
            }
        } catch (error) {
            console.error("Error al obtener los datos del usuario:", error);
        }
    };

    // Función para agregar un build al carrito
    const addToCart = async (userId, build) => {
        try {
            const userDocRef = doc(db, "users", userId);

            // Obtener datos actuales del usuario
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
                const userData = userDoc.data();

                // Verificar si el campo "cart" existe, de lo contrario crearlo
                if (!userData.cart) {
                    await updateDoc(userDocRef, { cart: [build] });
                } else {
                    await updateDoc(userDocRef, {
                        cart: arrayUnion(build), // Añade el nuevo build al array
                    });
                }

                // Actualizar el estado local del usuario
                fetchUserData(userId);
                console.log("Build agregado al carrito correctamente.");
            } else {
                console.error("El documento del usuario no existe.");
            }
        } catch (error) {
            console.error("Error al agregar el build al carrito:", error);
        }
    };

    // Función para limpiar el carrito del usuario
    const clearCart = async (userId) => {
        try {
            const userDocRef = doc(db, "users", userId);

            // Vaciar el carrito en Firestore
            await updateDoc(userDocRef, { cart: [] });

            // Actualizar el estado local
            fetchUserData(userId);
            console.log("Carrito limpiado correctamente.");
        } catch (error) {
            console.error("Error al limpiar el carrito:", error);
        }
    };

    return (
        <UserContext.Provider
            value={{
                user,
                fetchUserData,
                addToCart,
                clearCart,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useUser = () => {
    return useContext(UserContext);
};