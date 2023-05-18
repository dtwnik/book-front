const cartButton = () => {
    return (
        <>
            <div className="detail-desc">
                Автор: <span>{appState.author}</span>
                <h1>{appState.desc}</h1>
                <button className='adv-button' onClick={addToBasket}>Себетке қосу</button>
            </div>
        </>
    );
}

export default cartButton;