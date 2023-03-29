import React from 'react';

const Cart = ({cart, handleRemoveItem, handleRemove}) => {
    console.log(cart);
    
    let totalPrice = 0
    for(const player of cart){
        totalPrice = totalPrice + player.price
    }

    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + tax
    return (
        <div>
            <h2 className='text-4xl text-center my-4 font-bold'>Order Summery</h2>
            <div className="cart-info">
                <p>Selected: {cart.length} Player </p>
                <p>Total Price: {totalPrice} </p>
                <p>Tax: {tax} </p>
                <p>Grand Total: {grandTotal}</p>
            </div>
            <div className="selectedPlayers">
                <table>
                    <tbody>
                    {
                        cart.length <= 4 &&  (cart.map(p => (<tr key={p.id}>
                            <td><img className="w-8" src={p.img} alt="" /></td>
                            <td>{p.name}</td>
                            <td><button onClick={()=>handleRemoveItem(p.id)}>Del</button></td>
                        </tr>) ) )
                    }
                    </tbody>                    
                </table>
            </div>
            <div><button onClick={()=>handleRemove(cart)}>Clear All</button></div>
            
        </div>
    );
};

export default Cart;