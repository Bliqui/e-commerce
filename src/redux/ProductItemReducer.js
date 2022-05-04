import iphone12 from '../Images/iPhone-12.png';
import iphone13 from '../Images/iPhone-13.png';
import iphone11 from '../Images/iPhone-11.png';

const initialState = {
  phones: [
      {
          name: 'Iphone 12',
          price: 2000,
          isAvailable: true,
          phoneImage: iphone12
      },
      {
          name: 'Iphone 13',
          price: 3000,
          isAvailable: false,
          phoneImage: iphone13
      },
      {
          name: 'Iphone 11',
          price: 228,
          isAvailable: false,
          phoneImage: iphone11
      },
      {
          name: 'Iphone 13',
          price: 3000,
          isAvailable: false,
          phoneImage: iphone13
      },
      {
          name: 'Iphone 13',
          price: 3000,
          isAvailable: false,
          phoneImage: iphone13
      },
      {
          name: 'Iphone 13',
          price: 3000,
          isAvailable: false,
          phoneImage: iphone13
      },
  ]
};

const GET_PHONES = 'GET_PHONES';

export const ProductItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHONES: {
            return state
        };

        default: return state;
    }
};