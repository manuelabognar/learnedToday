import React from 'react';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import Input from '../../components/Form/Input'

export default function Register() {

  function handleSubmit(data, { reset }) {
    console.log(data);
    reset();
  }

  return(
    <div>
      <section className="form-section">
      <h1>Register</h1>

      <div className="form-wrapper">
        <Form onSubmit={handleSubmit}>
      
          <div className="input-block">
            <label>Nome </label>
            <Input name="register-name"/>
          </div>

          <div className="input-block">
            <label>E-mail</label>
            <Input type="email" name="register-email"/>
          </div>

          <div className="input-block">
            <label>CPF</label>
            <Input name="register-cpf" />
          </div>
        
          <Scope path="register-address">
            <div className="input-block">
              <label>CEP</label>
              <Input name="cep" />
            </div>

            <div className="input-block">
              <label>Cidade</label>
              <Input name="city" />
            </div>

            <div className="input-block">
              <label>Estado</label>
              <Input name="state" />
            </div>

            <div className="input-block">
              <label>Bairro</label>
              <Input name="neighborhood" />
            </div>

            <div className="input-block">                      
              <label>Rua</label>
              <Input name="street" />
            </div>

            <div className="input-block">
              <label>Número</label>
              <Input name="number" />
            </div>
          </Scope>
        
          <div className="input-block">
            <label>Senha </label>
            <Input type="password" name="register-password"/>
          </div>
        
          <button type="submit" className="btn-color">Cadastrar</button>
        </Form>
      
        <Link to="/">Home</Link>
      </div>
      </section>
    </div>
    
  );
}