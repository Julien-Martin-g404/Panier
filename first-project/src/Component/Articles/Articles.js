import React from 'react';
import Article from '../Article/Article.js';
import Image from '../../Assets/monstera.jpg';
import Image2 from '../../Assets/lyrata.jpg';
import Image3 from '../../Assets/pothos.jpg';
import './Articles.css';


function Articles() {
    return (

        <>
            <div className="body-container">
                <Article title='Monstera' image={Image} price="10€" />
                <Article title='Lyrata' image={Image2} price="12€" />
                <Article title='Pothos' image={Image3} price="15€" />
            </div>
        </>
    );
}

export default Articles;