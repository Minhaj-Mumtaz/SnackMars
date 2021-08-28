const categories = [
    {
        id: 'cake',
        name: 'CAKE',
        favourites: true,
        image: 'https://i.imgur.com/tYoYafzm.png'
    },
    {
        id: 'coffee',
        name: 'COFFEE',
        favourites: false,
        image: 'https://i.imgur.com/Qx5wkrHm.png'
    },
    {
        id: 'tea',
        name: 'TEA',
        favourites: true,
        image: 'https://i.imgur.com/BPT316mm.png'
    },
    {
        id: 'corn',
        name: 'CORN',
        favourites: true,
        image: 'https://i.imgur.com/zhNd0w5m.png'
    },
    {
        id: 'mocktails',
        name: 'MOCKTAILS',
        favourites: true,
        image: 'https://i.imgur.com/Ft2ys6Tm.jpg'
    },
];

const products = [
    {
        id:1,
        name: 'Doppio',
        price: '6.70',
        image: require('../../assets/images/Doppio.png'),
        description: 'Doppio espresso is a double shot, extracted using a double coffee filter in the portafilter.',
        toppings:[{
            name:'Bunty',
            price: '0.50',
        },
        {
            name:'chocolate',
            price: '0.40',
        }
        ]
    },
    {
        id:2,
        name: 'Caffe Americano',
        price: '4.90',
        image: require('../../assets/images/CaffeAmericano.png'),
        description: 'Caffè Americano is a type of coffee drink prepared by diluting an espresso with hot water',
        toppings:[{
            name:'Bunty',
            price: '0.50',
        },
        {
            name:'chocolate',
            price: '0.40',
        }
        ]
    },

];


const coffeeTypes = [
    {
        id: 1,
        name: 'Doppio',
        price: 100,
        tags: 'Coffee',
        description: 'Doppio espresso is a double shot, extracted using a double coffee filter in the portafilter.',
        milk:true,
        quantity:1,
        image: 'https://i.imgur.com/i2jzOVkm.png'
    },
    {
        id: 2,
        name: 'Caffe Americano',
        price: 80,
        tags: 'Coffee',
        description: 'Caffè Americano is a type of coffee drink prepared by diluting an espresso with hot water.',
        milk:false,
        quantity:1,
        image: 'https://i.imgur.com/0eRESsqm.png'
    },
    {
        id: 3,
        name: 'Latte Macchiato',
        price: 120,
        tags: 'Coffee',
        description: 'Latte macchiato is a coffee beverage; the name means stained or marked milk. Marked as in an espresso stain on the milk used.',
        milk:true,
        quantity:1,
        image: 'https://i.imgur.com/XFS8uA5m.png'
    },
    {
        id: 4,
        name: 'Flat White',
        price: 100,
        tags: 'Coffee',
        description: 'A flat white is a coffee drink consisting of espresso with microfoam. It is comparable to a latte, but smaller in volume and with less microfoam.',
        milk:true,
        quantity:1,
        image: 'https://i.imgur.com/4jSuJTEm.png'
    },
    {
        id: 5,
        name: 'Cappuccino',
        price: 120,
        tags: 'Coffee',
        description: 'A cappuccino is an espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam.',
        milk:true,
        quantity:1,
        image: 'https://i.imgur.com/mBVz0XPm.png'
    },
];

const profile = [
    {
        username: 'react-ui-kit',
        address: 'malir, Karachi',
        email: 'minooo@react-ui-kit.com',
        notifications: true,
    }
];

export {
    categories,
    products,
    coffeeTypes,
    profile,
}
