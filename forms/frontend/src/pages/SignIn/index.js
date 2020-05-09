import React from 'react';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import Input from '../../components/Form/Input';

export default function SignIn() {
  function handleSubmit(data) {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }

  return (
    <div>
      <section className="form-section">
        <h1>Sign In</h1>

        <div className="form-wrapper">
          <Form onSubmit={handleSubmit}>
            <div className="input-block">
              <label>Email</label>
              <Input name="email" type="email" id="login-email" />
            </div>
            <div className="input-block">
              <label>Password</label>
              <Input name="password" type="password" id="login-password" />
            </div>
            <button type="submit" className="btn-color">Entrar</button>

            <Link type="submit" className="btn-clean" to="/register">Cadastrar</Link>

          </Form>

          <Link type="submit" to="/" >Home</Link>
        </div>
      </section>
    </div>
  );
}