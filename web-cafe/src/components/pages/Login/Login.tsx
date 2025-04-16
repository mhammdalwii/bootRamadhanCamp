import { FormEvent } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

const Login = () => {
  const handleLogin = async (event: FormEvent) => {
    event?.preventDefault();
    const form = event.target as HTMLFormElement;
    const payload = {
      email: form.email.value,
      password: form.password.value,
    };
    await fetch("https://wpu-cafe.vercel.app/api/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(payload);
  };
  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <Input name="email" id="email" type="email" label="email" />
      <br />
      <Input name="password" id="password" type="password" label="password" />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default Login;
