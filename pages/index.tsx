import { Header } from '../components/header/Header';

interface props {
  categories: string[];
}

const Home = ({ categories }: props) => {

  return (
    <>
      <Header categories={categories} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products/categories')
  const categories = await res.json();

  return {
    props: {
      categories
    }
  }
}

export default Home;