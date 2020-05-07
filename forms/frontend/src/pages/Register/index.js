import React from 'react';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import Input from '../../components/Form/Input'

export default function Register() {

  function handleSubmit(data) {
    console.log(data);
  }

  return(
    <div>
      <h1>Register</h1>

      <Form onSubmit={handleSubmit}>
        
        <label>Nome </label>
        <Input name="name"/>

        <label>E-mail</label>
        <Input type="email" name="email"/>

        <label>CPF</label>
        <Input name="cpf" />
        
        <Scope path="address">
          <label>CEP</label>
          <Input name="address.cep" />

          <label>Cidade</label>
          <Input name="address.city" />

          <label>Estado</label>
          <Input name="address.state" />

          <label>Bairro</label>
          <Input name="address.neighborhood" />        

          <label>Rua</label>
          <Input name="address.street" />

          <label>Número</label>
          <Input name="address.number" />
        </Scope>
        
        <label>Senha </label>
        <Input type="password" name="password"/>

        <button type="submit">Enviar</button>
      </Form>
      
      <Link to="/">Voltar</Link>
    </div>
  );
}