import React, {useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import { Scope } from '@unform/core';

import Input from '../../components/Form/Input'

export default function UserData() {

  const formRef = useRef(null);
  
  function handleSubmit(data) {
    try {

      //validacao... (no backend!)
      if (data.name === "") {
        formRef.current.setFieldError('name', 'Nome obrigatório');
      }
      if (data.city === "") {
        formRef.current.setFieldError('address.city', 'Cidade obrigatória');
      }
      
      //await API

      //formRef.current.setErrors({});
      console.log(data);
    } catch (err) {
      console.log(err);
      //formRef.current.setErrors(err);
    }
  } 
  
  useEffect(() => {
    setTimeout(() => {
      formRef.current.setData({
        name: 'Manu',
        email: 'manuelabcamara@gmail.com',
        address: {
          cep: '01234-000',
          city: 'São Paulo',
          state: 'SP',
          neighborhood: 'Vila Mariana',
          street: 'Avenida Paulista',
          number: '1000'
        }
      })
    }, 1000);
  }, []);

  return(
    <div>
      <h1>Alterar dados</h1>

      <Form ref={formRef} onSubmit={handleSubmit}>
        
        <label>Nome </label>
        <Input name="name"/>
        
        <Scope path="address">
          <label>CEP</label>
          <Input name="cep" />

          <label>Cidade</label>
          <Input name="city" />

          <label>Estado</label>
          <Input name="state" />

          <label>Bairro</label>
          <Input name="neighborhood" />        

          <label>Rua</label>
          <Input name="street" />

          <label>Número</label>
          <Input name="number" />
        </Scope>
        
        <button type="submit">Atualizar</button>
      </Form>
      
      <Link to="/">Voltar</Link>
    </div>
  );
}