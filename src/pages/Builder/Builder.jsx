import { useData } from "../../context/dataContext.jsx";
import { useCart } from "../../context/cartContext.jsx";
import { useState } from "react";

export const Builder = () => {

  const{addToCart} = useCart();

  const { categories, products, loading } = useData();
  const [build, setBuild] = useState(() => JSON.parse(localStorage.getItem("build")) || []);

  if (loading) return <p>Loading...</p>;

  const groupProductsByCategory = (categories, products) => {
    return categories.map(category => ({
      category,
      products: products.filter(
        product => String(product.category_id) === String(category.id)
      ),
    }));
  };
  const groupedData = groupProductsByCategory(categories, products);


  const toggleProductInBuild = (product) => {
    setBuild((prevBuild) => {
      const existingProductIndex = prevBuild.findIndex(p => p.id === product.id);
      let updatedBuild;
      if (existingProductIndex !== -1) {
        updatedBuild = prevBuild.filter((_, index) => index !== existingProductIndex);
      } else {
        updatedBuild = [...prevBuild.filter(p => p.category_id !== product.category_id), product];
      }
      return [...updatedBuild].sort((a, b) => String(a.category_id).localeCompare(String(b.category_id))); // Ordena por categoría
    });
  };

  const buildFinished = categories.every(category => {
    return build.some(product => String(product.category_id) === String(category.id));
  });

  const saveBuildToCart = () => {
    if (buildFinished) {
        addToCart(build);
        alert("Build saved to cart!");
    } else {
        alert("Please select a product from each category before saving.");
    }
};

  return (
      <div>
        <section className="builder">
          <svg className="blob blob-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#9333ea" d="M40.8,-59.6C48.7,-50.3,48.3,-32.9,54.2,-17.1C60.1,-1.2,72.4,13.2,73.6,28.4C74.8,43.5,64.8,59.5,50.7,67.1C36.6,74.6,18.3,73.7,3,69.5C-12.3,65.4,-24.5,58,-32,48.3C-39.4,38.6,-42,26.5,-49.6,13.6C-57.2,0.7,-69.8,-13,-65.1,-19.2C-60.4,-25.3,-38.3,-23.8,-24.6,-31.2C-10.8,-38.6,-5.4,-54.8,5.5,-62.3C16.4,-69.9,32.8,-68.8,40.8,-59.6Z" transform="translate(100 100)" />
          </svg>
          <svg className="blob blob-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#5600a7" d="M40.4,-58.9C52.8,-46.6,63.5,-35.4,70,-21.4C76.4,-7.4,78.4,9.4,72.9,22.8C67.3,36.2,54.1,46.2,40.6,53.9C27.2,61.6,13.6,67,-0.1,67C-13.7,67.1,-27.5,61.9,-43.3,55C-59,48.1,-76.8,39.4,-80.3,26.6C-83.7,13.8,-72.7,-3.1,-65.1,-19.4C-57.4,-35.7,-53,-51.3,-42.7,-64.3C-32.4,-77.2,-16.2,-87.6,-1.1,-86.1C14,-84.6,28,-71.2,40.4,-58.9Z" transform="translate(100 100)" />
          </svg>
          <ul className="showcase">
            {categories.map((category, index) => {
              const product = build.find(p => String(p.category_id) === String(category.id)); // Busca el producto seleccionado
              return (
                <li className={`grid-item item-${ index + 1 }`} key={category.id}>
                  {product ? (
                    <>
                      <p style={{color:"white"}}>{product.name}</p>
                    </>
                  ) : (
                    <img className="placeholder-img" src={`public/assets/icons/builder/${category.name_en}.webp`}/>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="product-selector">
            {groupedData.map(({ category, products }) => (
              <div className="product-category" key={category.id}>
                <h3>{category.name_en}</h3>
                <div>
                  {products.map(product => (
                    <button className="product-item" key={product.id} onClick={() => toggleProductInBuild(product)} style={{
                      backgroundColor: build.some(p => p.id === product.id) ? "rgba(86,0,167,.5" : "rgba(255,255,255,.1",
                  }}>
                      <h4>{product.name}</h4>
                      <p>{product.description_en}</p>
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button className="add-build-cart" onClick={saveBuildToCart} disabled={!buildFinished}>
                Save Build to Cart
            </button>
          </div>
        </section>
      </div>
  );
};