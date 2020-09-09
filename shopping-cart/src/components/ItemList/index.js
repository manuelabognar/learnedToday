import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function addItemAction(title) {
  return { type: 'ADD_ITEM', title: title }
}

function incrementQtyAction(title) {
  return { type: 'INCREMENT_QTY', title: title }
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
  

  const items = useSelector(state => state.data, state => state.data);
  const dispatch = useDispatch();

  function handleAddItem(item) {  

    const index = items.findIndex(x => x.id === item.id);
    
    if ( index === -1 ) {
      dispatch(addItemAction({
        id: item.id,
        name: item.name,
        value: item.value,
        qty: 1
      }));
    } else {
      items[index].qty++;
      dispatch(incrementQtyAction());
    }
  }


  return ( 
    <>
      <h3>Produtos disponíveis para compra</h3>
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

      <h3>Produtos adicionados ao carrinho</h3>
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