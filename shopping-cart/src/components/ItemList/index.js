import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function addItemAction(title) {
  return { type: 'ADD_ITEM', title: title }
}

export default function ItemsList() {
  const allProducts = {
    data: [
      {
        id: '001',
        name: 'Produto Um',
        value: 10.5,
      },
      {
        id: '002',
        name: 'Produto Dois',
        value: 20.00,
      },
      {
        id: '003',
        name: 'Produto Três',
        value: 30,
      },
    ],
  };
  

  const items = useSelector(state => state.data);
  const dispatch = useDispatch();

  function handleAddItem(item) {  
    console.log(item.id);
    // procurar em items, se aquele id já foi adicionado ao carrinho
    
    // se nao, adiicono o item: 
    item.qty = 1;
    dispatch(addItemAction(item));

    // se sim, somo 1 na quantidade do item
    
  }


  return ( 
    <>
      <h3>Todos os produtos</h3>
      <form>
        <ul>
          { allProducts.data.map(item => 
            <li key={item.name}> 
              { item.name }
              <br />
              Valor: { item.value }
              <br />
                <button onClick={() => handleAddItem(item)} type="button">
                Adicionar
              </button>
              <br /> <br /> <br />
            </li>) 
          }
        </ul>
      </form>

      <h3>Adicionados ao carrinho</h3>
      <form>
        <ul>
          { items.map(item => 
            <li key={item.name}> 
              { item.name }
              <br />
              Valor: { item.value }
              <br />
              Qtd: { item.qty }
              <br /> <br /> <br />
            </li>) 
          }
        </ul>
      </form>

    </>
  )
}