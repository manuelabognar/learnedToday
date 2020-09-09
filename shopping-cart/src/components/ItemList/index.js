import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function addItemAction(title) {
  return { type: 'ADD_ITEM', title: title }
}

function incrementQtyAction() {
  return { type: 'INCREMENT_QTY' }
}

function removeItemAction(title) {
  return { type: 'DELETE_ITEM', title: title }
}

export default function ItemsList() {
  const [total, setTotal] = useState(0);
  const items = useSelector(state => state.data, state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (items.length > 0) {
      const itemsArray = items.map(item => item.value * item.qty);
      setTotal(itemsArray.reduce(reducer));
    } else {
      setTotal(0);
    }
  });

  const allProducts = {
    data: [
      {
        id: 1,
        name: 'Produto Um',
        value: 10.5,
      },
      {
        id: 2,
        name: 'Produto Dois',
        value: 20.00,
      },
      {
        id: 3,
        name: 'Produto Três',
        value: 30,
      },
    ],
  };



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

  function handleRemoveItem(item) {
    dispatch(removeItemAction(item));
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
              Valor unitário: { item.value }
              <br />
              Qtd: { item.qty }
              <br />
              Valor total do produto: { item.value * item.qty }
              <br />
              <button onClick={() => handleRemoveItem(item)} type="button">
                Remover
              </button>
              <br /> <br /> <br />
            </li>) 
          }
        </ul>
      </form>
      Valor total: { total }

    </>
  )
}