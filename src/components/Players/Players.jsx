import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import Swal from 'sweetalert2'
import { getDataFromStorage } from '../../assets/utitlities/fakedb';

const Players = () => {
    const [players, setPlayers] = useState([])
    const [cart, setCart] = useState([])

    const handleAddToTeam = (player) => {
        const exists = cart.find(p => p.id === player.id)
        if(exists){
            Swal.fire({
                title: 'Error!',
                text: 'Already selected this players',
                icon: 'error',
                confirmButtonText: 'Opps!'
            })  
            return newCart  
        }
        const newCart = [...cart, player]

        if(newCart.length > 4){
            Swal.fire({
                title: 'Error!',
                text: 'You have already selected 4 players',
                icon: 'error',
                confirmButtonText: 'Opps!'
            })  
            return newCart   
        }
        setCart(newCart)
    }
    const handleRemoveItem = (id) => {
        const remaining = cart.filter(p => p.id !== id)
        const newCart = [...remaining]
        setCart(newCart)
        
    }
    const handleRemove = () => {
        const newCart = []
        setCart(newCart)
    }
    useEffect(()=>{
        const loadPlayers = async() => {
            const res = await fetch('players.json')
            const data = await res.json()
            console.log(data);
            setPlayers(data)
        }
        loadPlayers()
    },[])


    return (
        <div className='players flex'>
            <div className="players-container w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    players.map(player => <Player 
                        key={player.id}
                        player={player}
                        handleAddToTeam={handleAddToTeam}
                    ></Player>)
                }
            </div>
            <div className="cart-container w-1/4 p-4">
                <Cart 
                    cart={cart} 
                    handleRemoveItem={handleRemoveItem} 
                    handleRemove={handleRemove}
                ></Cart>
            </div>
        </div>
    );
};

export default Players;