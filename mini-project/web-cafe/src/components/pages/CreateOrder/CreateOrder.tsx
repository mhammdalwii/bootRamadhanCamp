import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ICart } from "../../../types/order";
import { getMenus } from "../../../services/menu.service";
import styles from "../CreateOrder/CreateOrder.module.css";

const CreateOrder = () => {
  const [menus, setMenus] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [carts, setCarts] = useState<ICart[]>([]);

  useEffect(() => {
    const fetchOrder = async () => {
      const result = await getMenus(searchParams.get("category") as string);
      setMenus(result.data);
    };
    fetchOrder();
  }, [searchParams.get("category")]);

  return (
    <main className={styles.crate}>
      <div className={styles.menu}>
        <h1>Explore Our Best Menu</h1>
        <div className={styles.filter}>{filters.map}</div>
      </div>
    </main>
  );
};

export default CreateOrder;
