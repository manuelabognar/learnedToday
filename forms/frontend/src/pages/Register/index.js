import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import Input from '../../components/Form/Input'

import api from '../../services/api';

export default function Register() {

  const history = useHistory();

  async function handleSubmit(data, { reset }) {

    const dataTeste = {
      name: data.name, 
      email: data.email,
      cpf: data.cpf,
      cep: data.address.cep, 
      city: data.address.city,
      state: data.address.state,
      neighborhood: data.address.neighborhood, 
      street: data.address.street, 
      number: data.address.number,
      password: data.password,
    };

    console.log(dataTeste);

    try {     
      const response = await api.post('users', dataTeste);

      console.log(response);

      alert('Cadastro efetuado com sucesso');
    
      history.push('/signin');

      //reset();

    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return(
    <div>
      <section className="form-section">
      <h1>Register</h1>

      <div className="form-wrapper">
        <Form onSubmit={handleSubmit}>
      
          <div className="input-block">
            <label>Nome </label>
            <Input name="name"/>
          </div>

          <div className="input-block">
            <label>E-mail</label>
            <Input type="email" name="email"/>
          </div>

          <div className="input-block">
            <label>CPF</label>
            <Input name="cpf" />
          </div>
        
          <Scope path="address">
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
            <Input type="password" name="password"/>
          </div>
        
          <button type="submit" className="btn-color">Cadastrar</button>
        </Form>
      
        <Link to="/">Home</Link>
      </div>
      </section>
    </div>
    
  );
}