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
        return;
      }
      if (data.address.city === "") {
        formRef.current.setFieldError('address.city', 'Cidade obrigatória');
        return;
      }
      
      //await API

      //formRef.current.setErrors({});
      console.log(data);
      alert("Dados alterados com sucesso");
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
      <section className="form-section">
        <h1>Alterar Dados</h1>

        <div className="form-wrapper">
          <Form ref={formRef} onSubmit={handleSubmit}>  
            
            <div className="input-block">
              <label>Nome </label>
              <Input name="name"/>
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
        
            <button type="submit" className="btn-color">Atualizar</button>
          </Form>
      
          <Link to="/">Home</Link>
        </div>
      </section>
    </div>
  );
}