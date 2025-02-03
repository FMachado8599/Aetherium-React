import { createContext, useContext, useState, useEffect } from "react";
import { doc, setDoc, arrayUnion, getDoc, query, where, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config.js";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [userId] = useState("0000001"); // ID fijo del usuario por ahora
  const [builds, setBuilds] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartDoc = doc(db, "carts", userId);
        const cartSnapshot = await getDoc(cartDoc);

        if (cartSnapshot.exists()) {
          const cartData = cartSnapshot.data();
          setBuilds(cartData.builds || []);
        } else {
          // Si el carrito no existe, inicializarlo
          await setDoc(cartDoc, { builds: [] });
          setBuilds([]);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [userId]);

  const addToCart = async (build) => {
    try {
      const cartDoc = doc(db, "carts", userId);

      const buildWithId = {
        id: `build_${Date.now()}`, // ID único para la build
        products: build,
      };

      // Agregar la nueva build al array de builds
      await updateDoc(cartDoc, {
        builds: arrayUnion(buildWithId),
      });

      // Actualizar el estado local
      setBuilds((prevBuilds) => [...prevBuilds, buildWithId]);
    } catch (error) {
      console.error("Error adding build to cart:", error);
    }
  };

  return (
    <CartContext.Provider value={{ builds, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);