import React, { useState, useEffect } from 'react'

const AddCart = ({ data }) => {

    const [isAdded, setIsAdded] = useState(false);

    const cardExistsInBasket = (basket) => {
        return basket.some((item) => item.url === data.url);
    };

    const addToBasket = () => {
        let basket = JSON.parse(localStorage.getItem('basket')) || [];
        setIsAdded(true);

        if (!cardExistsInBasket(basket)) {
            basket = [...basket, data];
        }

        localStorage.setItem('basket', JSON.stringify(basket));
    };

    useEffect(() => {
        let basket = JSON.parse(localStorage.getItem('basket'));

        if (basket && cardExistsInBasket(basket)) {
            setIsAdded(true);
        }
    }, [cardExistsInBasket]);

    return (
        <>
            <div className="detail-desc">
                Автор: <span>{data.author}</span>
                <h1>{data.desc}</h1>
                    <form>
                        {isAdded ?
                            <button className='adv-button' onClick={addToBasket}>Себетке қосылды</button>
                            :
                            <button className='adv-button' onClick={addToBasket}>Себетке қосу</button>
                        }
                    </form>
            </div>
        </>
    );
}

export default AddCart;