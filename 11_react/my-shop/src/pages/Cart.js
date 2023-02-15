import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCount, decreaseCount, selectCartList } from '../features/cart/cartSlice';

function Cart(props) {
  const dispatch = useDispatch();
  const cartList = useSelector(selectCartList);


  return (
    <>
      <Table hover>
        <thead>
          <tr>
            <th>No</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>1</td>
            <td>라켓</td>
            <td>2</td>
            <td>199000원</td>
          </tr> */}
          {/* Quiz: 
            1) 전역 store에서 cartList를 꺼내오세요! 
            2) cartList 반복 렌더링 + 데이터 바인딩
          */}
          {cartList.map((cart,index)=> {
            return (
              <tr key={cart.id} className='odd-color'>
                <td>{ index + 1 }</td>
                <td>{ cart.title }</td>
                <td>
                  <button type="button" onClick={() => {dispatch(decreaseCount(cart.id));}}> - </button>
                  { cart.count }
                  <button type="button" onClick={() => {dispatch(increaseCount(cart.id))}}> + </button>
                </td>
                <td>{ cart.price * cart.count }원</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Cart;