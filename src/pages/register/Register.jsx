import React from 'react';
import './register.scss';

const Register = () => {
  return (
    <div>
      <div className="register">
        <div className="card">
          <div className="left">
            <h1>Nhat Social.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quisquam, architecto reiciendis, nam hic, nihil ipsum voluptatum
              earum repellat nulla beatae eum laudantium quae harum dignissimos
              fugiat incidunt odio quas aut.
            </p>
            <span>Do you have an account?</span>
            <button>Login</button>
          </div>
          <div className="right">
            <h1>Register</h1>
            <form action="">
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="text" placeholder="Name" />
              <button>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
