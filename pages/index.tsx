import { useEffect, useState } from "react";
import { CategoryWrapper, Content, ProductsWrapper, Title } from "../components/category/styled";
import { Product } from "../components/product/Product";
import { Select } from "../components/sorter-select/Select";
import { Spinner } from "../components/spinner/Spinner";
import { I_productType } from "../redux/app/types";
import { sortByPrice, Sorters } from "../utils/sorter";

const Home = () => {

  const [ products, setProducts ] = useState<I_productType[]>([]);
  const [ isLoaded, setIsLoaded ] = useState<boolean>(false);
  const [ sorter, setSorter ] = useState<Sorters>(Sorters.PRICE_ASC);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoaded(false);

      fetch(`https://fakestoreapi.com/products`)
        .then(res => res.json())
        .then(json => setProducts(json))
        .then(() => {
          setIsLoaded(true);
          setSorter(Sorters.PRICE_ASC)
        });
    }

    if (!isLoaded) fetchData();

  }, [isLoaded])

  return (
    <>
      <CategoryWrapper>

        {
          isLoaded ? <h1 style={{textAlign: 'center'}}>All products</h1> : <></>
        }

        {
          isLoaded
            ? <Select options={Object.values(Sorters)} callback={(value: Sorters) => setSorter(value)} />
            : <></>
        }

        <Content isLoaded={isLoaded}>
        {
          isLoaded
            ? (<ProductsWrapper>
                {
                  sortByPrice(products, sorter).map(product => (
                    <Product key={product.title} product={product} categoryShown />
                  ))
                }
              </ProductsWrapper>)
            : <Spinner />
        }
        </Content>

      </CategoryWrapper>
    </>
  )
};

export default Home;