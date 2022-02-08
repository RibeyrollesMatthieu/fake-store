import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface I_categoryState {
  id: number;
  title: string;
  category: string;
  description: string;
  imamge: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  }
}

const Category = () => {

  const [ category, setCategory ] = useState<string>('');
  const [ products, setProducts ] = useState<I_categoryState[]>([]);
  const router = useRouter();

  useEffect(() => {
    const routerCategory: string = router.query?.category as string;
    setCategory(routerCategory);

    fetch(`https://fakestoreapi.com/products/category/${routerCategory}`)
      .then(res=>res.json())
      .then(json => setProducts(json))
  }, [router.query])
  

  return (
    <div className="category">
      Category: { category }

      <ul>
        {
          products.map(product => (
            <li key={product.title}>{product.title}</li>
          ))
        }
      </ul>
    </div>
  )
};

export default Category;