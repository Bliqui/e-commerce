import "./CartItem.scss"

export const CartItem = ({finalPrice, orderInfo, phonesCount}) => {
    return (
        <div className={'shoppingCart-body'}>
            <div className={'shoppingCart-wrapper'}>
                <div className={'sumPurchase'}>
                    <div className={'sumPurchase-total'}>Your bag total is ${finalPrice}</div>
                    <div className={'buyBtnWrapper'}>
                        <button className={'buyBtn'}>Check out</button>
                    </div>
                </div>
                <div>
                    <div className={'sumPurchaseImg'}>
                        <img src={orderInfo.phoneImage} alt=""/>
                    </div>
                    <div className={'sumPurchaseInfo'}>
                        <div className={'sumPurchaseName'}>{orderInfo.name}</div>
                        <button>-1</button>
                        <div className={'sumPurchaseCount'}>{phonesCount}</div>
                        <button>+1</button>
                        <div className={'sumPurchasePrice'}>${orderInfo.price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

