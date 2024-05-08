import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import Login from "./Login";
import { Card } from "antd";
import Cake from "./Cake";
import { Space, Row, Col } from "antd";
import MyTable from "./MyTable";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Meeting from "./Meeting";
import ForgotPassword from "./ForgotPassword";
import Edit from "./Edit";
import Search from "./Search";
import Categories from "./Categories";
import Cart from "./Cart";

function App() {
  var cakes = [
    { name: "cake1", price: "price1", flavour: "fv1", tag: "Must try" },
    { name: "cake2", price: "price2", flavour: "fv2" },
    { name: "cake3", price: "price3", flavour: "fv3", tag: "Must try" },
    { name: "cake4", price: "price4", flavour: "fv4", tag: "Bestseller" },
  ];

  var people = [
    { name: "sumanth", age: 23 },
    { name: "jeevan", age: 23 },
    { name: "ali", age: 23, role: "dev" },
  ];

  return (
    // <div
    //   className="App"
    //   style={{
    //     display: "flex",
    //     justifyContent: "space-around",
    //   }}
    // >
    //   {cakes.map((element) => (
    //     <Cake data={element} />
    //   ))}
    // </div>
    // <div
    //   style={{
    //     height: 500,
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   {people.map((person) => {
    //     var keys = Object.keys(person);
    //     return (
    //       <Card style={{ height: 100, width: 100 }}>
    //         {keys.map((each) => (
    //           <Row>{person[each]}</Row>
    //         ))}
    //       </Card>
    //     );
    //   })}
    // </div>

    // <div className="App">
    //   <Signup />
    // </div>
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Search />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="forgot" element={<ForgotPassword />}></Route>
          <Route path="table" element={<MyTable />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="edit/:id" element={<Edit />}></Route>
          <Route path="search" element={<Search />}>
            <Route path="categories" element={<Categories />}></Route>
          </Route>
          <Route path="/search/cake" element={<Cake />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
