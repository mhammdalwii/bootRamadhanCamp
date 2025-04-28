import { useEffect, useState } from "react";
import { getOrders, updateOrder } from "../../../services/order.service";
import styles from "./ListOrder.module.css";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { IOrder } from "../../../types/order";

const ListOder = () => {
  const [orders, setOrders] = useState([]);
  const [refetchOrder, setRefetchOrder] = useState(true);

  useEffect(() => {
    if (refetchOrder) {
      const fetchOrder = async () => {
        const result = await getOrders();
        setOrders(result.data);
      };
      fetchOrder();
      setRefetchOrder(false);
    }
  }, [refetchOrder]);

  const handleComplateOrder = async (id: string) => {
    await updateOrder(id, { status: "COMPLATED" }).then(() => {
      setRefetchOrder(true);
    });
  };
  return (
    <main className={styles.order}>
      <section className={styles.header}>
        <h1 className={styles.title}>Order List</h1>
        <div className={styles.button}>
          <Link to="/create">
            <Button>Create Order</Button>
          </Link>
          <Button color="secondary">Logout</Button>
        </div>
      </section>
      <section>
        <table border={1} className={styles.table} cellSpacing={0} cellPadding={10}>
          <thead>
            <tr>
              <th>NO</th>
              <th>Costumer Name</th>
              <th>Table</th>
              <th>Total</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order: IOrder, index: number) => (
              <tr key={order.id}>
                <td>{index + 1}</td>
                <td>{order.costumer_name}</td>
                <td>{order.table_number}</td>
                <td>${order.total}</td>
                <td>{order.status}</td>
                <td className={styles.action}>
                  <Link to={`/orders/${order.id}`}>
                    <Button>Detail</Button>
                  </Link>
                  {order.status === "PROCCESING" && <Button onClick={() => handleComplateOrder(order.id)}>Completed</Button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default ListOder;
