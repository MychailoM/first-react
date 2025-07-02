import StyledBtn from "./components/StyleBtn";
import ProductCard from "./components/ProductCard";

const product = {
  image: "https://content2.rozetka.com.ua/goods/images/big/359687899.jpg",
  description: "Сухе та вологе прибирання одночасно",
  title: "Робот-пилосос Samsung VR3MB77312K/UK",
  price: "10 999₴",
};

function App() {
  return(
    <div>
      <StyledBtn />
      <ProductCard product={product} />
    </div>
  )
}

export default App;
