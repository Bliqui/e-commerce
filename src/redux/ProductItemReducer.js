import iphone12mini from '../assets/images/iPhone-12-mini.png';
import iphoneSe from '../assets/images/iPhone-se.png';
import iphone13pro from '../assets/images/iPhone-13-pro.png'

const initialState = {
  phones: [
      {
          id: '1',
          name: 'iPhone 12 mini',
          price: 2000,
          isAvailable: true,
          phoneImage: iphone12mini,
          description: 'Triple-lens cameras with new ultra wide-angle lens More durable, water resistant body Matte finish and new dark green color Night Mode for better low-light images Haptic Touch instead of 3D TouchUltra Wideband support A13 chip Faster WiFi and LTE.'
      },
      {
          id: '2',
          name: 'iPhone 13',
          price: 3000,
          isAvailable: false,
          phoneImage: iphone13pro,
          description: 'Triple-lens cameras with new ultra wide-angle lens More durable, water resistant body Matte finish and new dark green color Night Mode for better low-light images Haptic Touch instead of 3D TouchUltra Wideband support A13 chip Faster WiFi and LTE.'
      },
      {
          id: '3',
          name: 'iPhone SE',
          price: 1000,
          isAvailable: false,
          phoneImage: iphoneSe,
          description: 'Triple-lens cameras with new ultra wide-angle lens More durable, water resistant body Matte finish and new dark green color Night Mode for better low-light images Haptic Touch instead of 3D TouchUltra Wideband support A13 chip Faster WiFi and LTE.'
      },
      {
          id: '4',
          name: 'iPhone 14',
          price: 3000,
          isAvailable: false,
          phoneImage: iphone13pro,
          description: 'Triple-lens cameras with new ultra wide-angle lens More durable, water resistant body Matte finish and new dark green color Night Mode for better low-light images Haptic Touch instead of 3D TouchUltra Wideband support A13 chip Faster WiFi and LTE.'
      },
      {
          id: '5',
          name: 'iPhone 12 mini',
          price: 3000,
          isAvailable: false,
          phoneImage: iphone12mini,
          description: 'Triple-lens cameras with new ultra wide-angle lens More durable, water resistant body Matte finish and new dark green color Night Mode for better low-light images Haptic Touch instead of 3D TouchUltra Wideband support A13 chip Faster WiFi and LTE.'
      },
      {
          id: '6',
          name: 'iPhone 16',
          price: 3000,
          isAvailable: false,
          phoneImage: iphone13pro,
          description: 'Triple-lens cameras with new ultra wide-angle lens More durable, water resistant body Matte finish and new dark green color Night Mode for better low-light images Haptic Touch instead of 3D TouchUltra Wideband support A13 chip Faster WiFi and LTE.'
      },
  ],
    finalPrice: 0,
    phonesCount: 0,
    cartItems: []
};

const GET_PHONES = 'GET_PHONES';

export const ProductItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHONES:
            return state
        case 'ADD_PHONE':
            return {...state, phonesCount: state.phonesCount + 1, finalPrice: state.finalPrice + action.value}
        case 'REMOVE_PHONE':
            return {...state, phonesCount: state.phonesCount - 1, finalPrice: state.finalPrice - action.value}
        case 'ADD_CART_ITEM':
            return {...state, cartItems: [...state.cartItems, action.value] }
        default:
            return state;
    }
};