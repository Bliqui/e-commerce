import "./ProductItem.scss";

export const ProductItem = ({name, phoneImage, price}) => {

    return (
        <div className={'productItem'}>
            <div className={'item'}>
                <img className={'phoneImage'} src={phoneImage} alt=""/>
                <div className={'productName'}>{name}</div>
                <div className={'productPrice'}>$ {price}</div>
            </div>
        </div>
    )
}