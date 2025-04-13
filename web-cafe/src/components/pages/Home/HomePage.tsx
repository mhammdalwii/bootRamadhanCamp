import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useState } from "react";
import styles from "./Home.module.css";

const makanan = [
  {
    name: "Nasi Goreng",
    price: 20000,
  },
  {
    name: "Mie Goreng",
    price: 15000,
  },
  {
    name: "Ayam Penyet",
    price: 25000,
  },
];

const handleClickLogin = () => {
  alert("Login clicked");
};

const HomePage = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  return (
    <main className={darkMode ? styles.dark : styles.light}>
      <h2 onClick={handleClickLogin}>Menu Makanan</h2>
      <Input
        onChange={(e: any) => {
          setSearch(e.target.value);
        }}
        name="search"
        id="search-input"
        label="search"
      />
      {makanan.map((item, index) => (
        <Button onClick={() => (window.location.href = "https://facebook.com")} key={`makanan-${index}`} type="button">
          {item.name}
        </Button>
      ))}
      <br />
      <Button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        {" "}
        {darkMode ? "Light Mode" : "Dark Mode"}
      </Button>
    </main>
  );
};

export default HomePage;
