import { createContext, useState, useEffect, useContext } from 'react';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase/config.js';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      try {

        const categoriesSS = await getDocs(collection(db, "categories"));
        const fetchedCategories = categoriesSS.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        const productsSS = await getDocs(collection(db, "products"));
        const fetchedProducts = productsSS.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Actualizar el estado
        setCategories(fetchedCategories);
        setProducts(fetchedProducts);

      } catch (error) {
        console.error("Error fetching collections: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  return (
    <DataContext.Provider value={{ categories, products, loading }}>
        {children}
    </DataContext.Provider>
  );
};

// Hook para usar el contexto
export const useData = () => {
  return useContext(DataContext);
};