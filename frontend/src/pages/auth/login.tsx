import { FormEvent, useState } from "react";
import WebContainer from "../../components/layouts/WebContainer";
import Input from "../../components/forms/Input";
import Button from "../../components/forms/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
  };
  return (
    <WebContainer>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-2 container mx-auto">
          <Input
            labelName="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            labelName="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Button type="submit">Login</Button>
          <Link className="text-center text-blue-400" to="/sign-up">
            Don't have an account. Click here
          </Link>
        </div>
      </form>
    </WebContainer>
  );
};

export default Login;
