import React from 'react';
import './Panier.css';

function Panier() {

    function fermerPanier() {

        document.querySelector('.gauche').classList.add('delete');
        document.querySelector('#openPanier').classList.remove('delete');
        document.querySelector('.container-gauche').classList.add('padding10');
    }

    function ouvrirPanier() {
        document.querySelector('.gauche').classList.remove('delete');
        document.querySelector('#openPanier').classList.add('delete');
        document.querySelector('.container-gauche').classList.remove('padding10');

    }

    return (
        <div className="container-gauche">

            <span className='boutonsPanier'>

                <button id="openPanier" className="delete" onClick={ouvrirPanier}>Ouvrir Panier</button>

            </span>

            <div className="gauche padding10">

                <span className="boutonsPanier">

                    <button onClick={fermerPanier}>Fermer Panier</button>

                </span>

                <p className="text">Votre panier est vide</p>

            </div>


        </div>

    )

}

export default Panier