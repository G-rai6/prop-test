import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="container0">
      <Card
        heading={"white dress"}
        price={"3.99$"}
        rating={4.2}
        url={"./public/white dress.jpeg"}
      />
      <Card
        heading={"Long sleeve denim"}
        price={"1$"}
        rating={4.2}
        url={"./public/denim.jpeg"}
      />
      <Card
        heading={"Hush pupples"}
        price={"12$"}
        rating={4.2}
        url={"./public/hush.jpeg"}
      />
      <Card
        heading={"Athens Skirt"}
        price={"100$"}
        rating={4.2}
        url={"./public/skirt.jpeg"}
      />
    </div>
  );
}

export default App;
