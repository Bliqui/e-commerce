import './ShoppingCart.css'

export const ShoppingCart = () => {

    return (
        <div className={'shoppingCart-body'}>
            <div className={'shoppingCart-wrapper'}>
                <div className={'sumPurchase'}>
                    <div className={'sumPurchase-total'}>Your bag total is $value</div>
                    <div className={'buyBtnWrapper'}>
                        <button className={'buyBtn'}>Check out</button>
                    </div>
                </div>
                <div className={'sumPurchaseImg'}>
                    <img src="" alt=""/>
                </div>
                <div className={'sumPurchaseInfo'}>
                    <div className={'sumPurchaseName'}>Some Iphone</div>
                    <div className={'sumPurchaseCount'}>1</div>
                    <div className={'sumPurchasePrice'}>$3000</div>
                </div>
            </div>
        </div>
    )
}