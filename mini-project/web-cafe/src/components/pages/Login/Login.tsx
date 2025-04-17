import { FormEvent } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import styles from "./Login.module.css";
import { login } from "../../../services/auth.service";

const Login = () => {
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const payLoad = {
      email: form.email.value,
      password: form.password.value,
    };
    const result = await login(payLoad);
  };

  return (
    <main className={styles.login}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>
        <form action="" className={styles.form} onSubmit={handleLogin}>
          <Input label="email" name="email" id="email" placeholder="Insert Email" required />
          <Input label="password" name="password" id="password" type="password" placeholder="Insert Password" required />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </main>
  );
};

export default Login;
