
import React from "react";
import { toast } from "react-toastify";
import useInput from "../../hooks/useInput";
import Input from ".././Input";
import Button from "../../styles/Button";
import Form from "../../styles/Form";
import { displayError } from "../../utils";


export default ({ changeToSignup }) => {
  const email = useInput("");
  const password = useInput("");


  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.value || !password.value) {
      return toast.error("You need to fill all the fields");
    }

    try {
      console.log("off-limits")
      toast.success(`You are logged in`);
    } catch (err) {
      return displayError(err);
    }

    [email, password].map((field) => field.setValue(""));
  };

  return (
    <Form center >
      <Input
        text="Email"
        type="email"
        value={email.value}
        onChange={email.onChange}
      />
      <Input
        text="Password"
        type="password"
        value={password.value}
        onChange={password.onChange}
      />
{/* xl outline disabled={loading} */}
      <Button  type="submit">
        Login
      </Button>
      <span>or</span>
      <Button xl type="button" onClick={changeToSignup}>
        Signup
      </Button>
    </Form>
  );
};