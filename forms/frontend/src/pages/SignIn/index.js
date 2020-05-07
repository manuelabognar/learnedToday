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
      <h1>Sign In</h1>

      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" />
        <Input name="password" type="password" />
        <button type="submit">Sign in</button>
      </Form>

      <Link to="/">Voltar</Link>
    </div>
  );
}