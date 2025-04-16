import { Link, useParams } from "react-router-dom";
import useCounterStore from "../../../stores/CounterStore";
import Button from "../../ui/Button";

const Menu = () => {
  const { id } = useParams();
  const { count } = useCounterStore();
  return (
    <div>
      <h1>Menu</h1>
      <p>{id}</p>
      <Link to="/">Home</Link>
      <br />
      {count}
    </div>
  );
};

export default Menu;
