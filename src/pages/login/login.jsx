import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UseAuth } from "../../hook/UseAuth";
import "./login.css";
export const Login = () => {
  let navigate = useNavigate();
  const [token, setToken] = UseAuth();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    let { password, email } = evt.target.elements;
    axios
      .post("https://todo.mquvonchbek.uz/login", {
        email: email.value,
        password: password.value,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status == 200) {
          setToken(res?.data.token);
          navigate("/");
        }

        res?.data.token && navigate("/");
      })
      .catch((error) => {
        alert(error?.message);
        console.log(error);
      });
  };
  return (
    <>
      <div class="login">
  <div>
    <h2 class="">Admin Log in</h2>
  </div>
  <form action="#" method="POST" onSubmit={handleFormSubmit}>
    <div class="">
      <div>
        <label for="email-address" class="sr-only">
          Email address
        </label>
        <input
          class="form-control"
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email address"
        />
      </div>
      <div>
        <label for="password" class="sr-only">
          Password
        </label>
        <input
          class="form-control"
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          placeholder="Password"
        />
      </div>
    </div>
    <div>
      <div class="">
        <a href="/registration">Registration</a>
      </div>
      <button class="btn btn-primary mt-1" type="submit">
        Sign in
      </button>
    </div>
  </form>
</div>

    </>
  );
};
