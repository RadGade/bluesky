import React from "react";
import { toast } from "react-toastify";
import useInput from "../../hooks/useInput";
import Input from ".././Input";
import Button from "../../styles/Button";
import Form from "../../styles/Form";
import { displayError } from "../../utils"; 
import { auth } from "../../blue/auth";
import { useHistory } from "react-router-dom";

export default ({ changeToSignup }) => {
  const handle = useInput("");
  const history = useHistory();
  const password = useInput("");
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!handle.value || !password.value) {
      return toast.error("You need to fill all the fields");
    }

    await auth(
      {alias : handle.value,
     pass: password.value})
      .then((ack)=>{
        console.log(ack)
        toast.success(`You are logged in, ${handle.value}`);

      })
      .catch((err) => {
        toast.error(err)
      })

    [handle, password].map((field) => field.setValue(""));
  };

  return (
    <Form center onSubmit={handleLogin} >
      <Input text="Handle" value={handle.value} onChange={handle.onChange} />
      <Input
        text="Password"
        type="password"
        value={password.value}
        onChange={password.onChange}
      />

      <Button xl outline type="submit">
       Login
      </Button>
      <span>or</span>
      <Button xl type="button" onClick={changeToSignup}>
        Signup
      </Button>
    </Form>
  );
};
