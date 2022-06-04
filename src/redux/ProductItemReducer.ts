// @ts-ignore
import iphone12mini from '../assets/images/iPhone-12-mini.png';
// @ts-ignore
import iphoneSe from '../assets/images/iPhone-se.png';
// @ts-ignore
import iphone13pro from '../assets/images/iPhone-13-pro.png';

interface State {
    phones: {
        id: string
        name: string
        price: number
        phoneImage: string
        count: number
        description: string
    }[];
};

const initialState: State = {
  phones: [
      {
          id: '1',
          name: 'iPhone 12 mini',
          price: 2000,
          phoneImage: iphone12mini,
          count: 1,
          description: 'Triple-lens cameras with new ultra wide-angle lens More durable, water resistant body Matte finish and new dark green color Night Mode for better low-light images Haptic Touch instead of 3D TouchUltra Wideband support A13 chip Faster WiFi and LTE.'
      },
      {
          id: '2',
          name: 'iPhone 13',
          price: 3000,
          phoneImage: iphone13pro,
          count: 1,
          description: 'Triple-lens cameras with new ultra wide-angle lens More durable, water resistant body Matte finish and new dark green color Night Mode for better low-light images Haptic Touch instead of 3D TouchUltra Wideband support A13 chip Faster WiFi and LTE.'
      },
      {
          id: '3',
          name: 'iPhone SE',
          price: 1000,
          phoneImage: iphoneSe,
          count: 1,
          description: 'Triple-lens cameras with new ultra wide-angle lens More durable, water resistant body Matte finish and new dark green color Night Mode for better low-light images Haptic Touch instead of 3D TouchUltra Wideband support A13 chip Faster WiFi and LTE.'
      },
      {
          id: '4',
          name: 'iPhone 14',
          price: 3000,
          phoneImage: iphone13pro,
          count: 1,
          description: 'Triple-lens cameras with new ultra wide-angle lens More durable, water resistant body Matte finish and new dark green color Night Mode for better low-light images Haptic Touch instead of 3D TouchUltra Wideband support A13 chip Faster WiFi and LTE.'
      },
      {
          id: '5',
          name: 'iPhone 12 maxi',
          price: 2000,
          phoneImage: iphone12mini,
          count: 1,
          description: 'Triple-lens cameras with new ultra wide-angle lens More durable, water resistant body Matte finish and new dark green color Night Mode for better low-light images Haptic Touch instead of 3D TouchUltra Wideband support A13 chip Faster WiFi and LTE.'
      },
      {
          id: '6',
          name: 'iPhone 16',
          price: 3000,
          phoneImage: iphone13pro,
          count: 1,
          description: 'Triple-lens cameras with new ultra wide-angle lens More durable, water resistant body Matte finish and new dark green color Night Mode for better low-light images Haptic Touch instead of 3D TouchUltra Wideband support A13 chip Faster WiFi and LTE.'
      },
  ]
};

export const ProductItemReducer = (state = initialState, action) => {
    return state;
}
