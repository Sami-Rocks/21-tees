export const colors = [
    {
        id: 1,
        color: 'red',
        code: '#ff5a5a'
    },
    {
        id: 2,
        color: 'blue',
        code: '#0000FF'
    },
    {
        id: 3,
        color: 'green',
        code: '#00FF00'
    },
    {
        id: 4,
        color: 'white',
        code: '#FFFFFF'
    },
    {
        id: 5,
        color: 'black',
        code: '#000000'
    },
    {
        id: 6,
        color: 'blue-black',
        code: '#040720'
    },
    {
        id: 7,
        color: 'orange',
        code: '#FFA500'
    },
    {
        id: 8,
        color: 'dark-grey',
        code: '#A9A9A9'
    },
    {
        id: 9,
        color: 'light-grey',
        code: '#D3D3D3'
    },
]

export const sizes = [
    {
        id: 1,
        size: 'S',
        name: 'small'
    },
    {
        id: 2,
        size: 'M',
        name: 'medium'
    },
    {
        id: 3,
        size: 'L',
        name: 'large'
    },
    {
        id: 4,
        size: 'XL',
        name: 'extra large'
    },
]

export const brands = [
    {
        id: 1,
        brand: 'gildan'
    },
    {
        id: 2,
        brand: 'wool'
    },
    {
        id: 3,
        brand: 'nylon'
    },
    {
        id: 4,
        brand: 'cotten'
    },
    
]

export const shops = [
    {
        id: 'shop_one',
        name: 'Shop One'
    },
    {
        id: 'shop_two',
        name: 'Shop Two'
    }
]

export const tags = [
    {
        id: 1,
        tag: 'Anime'
    },
    {
        id: 2,
        tag: 'Programming'
    },
    {
        id: 3,
        tag: 'Culture'
    },
    {
        id: 4,
        tag: 'Nerds'
    },
    {
        id: 5,
        tag: 'Traditional'
    },
]

export const productsData = [
    {
        id: 1,
        name: 'Eat, Sleep, Code and Repeat',
        image: '',
        brands: [1,4,2],
        colors: [3,4,5],
        price: 53.3,
        shop: 2,
        tag:[2,4],
        size:[1,2,4],
        images: {
            'thumbnail': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fthumbnail.png?alt=media&token=f1d110ee-2f05-4d78-9d72-100093df961b',
            'white':'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fwhite.jpg?alt=media&token=3ef6e4e1-83c3-4186-9c3a-eca02631277c',
            'green': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fgreen.jpg?alt=media&token=4f75110d-1f17-4bc7-baeb-a519a2afb01e',
            'black': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fblack.png?alt=media&token=03a8537a-6323-4aec-bb46-bb173db9a4ab'
        }
    },
    {
        id: 2,
        name: 'Code War',
        image: '',
        brands: [1,2],
        colors: [8,4,5],
        price: 71.3,
        shop: 1,
        tag:[2,4,1],
        size:[4],
        images: {
            'thumbnail': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fthumbnail.png?alt=media&token=f1d110ee-2f05-4d78-9d72-100093df961b',
            'dark-grey':'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fdark-grey.jpg?alt=media&token=42aaaeef-b3f1-402a-a1e1-7f005f04586f',
            'white':'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fwhite.jpg?alt=media&token=3ef6e4e1-83c3-4186-9c3a-eca02631277c',
            'black': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fblack.png?alt=media&token=03a8537a-6323-4aec-bb46-bb173db9a4ab'
        }
    },
    {
        id: 3,
        name: '2b || !2b',
        image: '',
        brands: [1,4,2,3],
        colors: [3,4,2,5],
        price: 61.3,
        shop: 2,
        tag:[2,4,3],
        size:[1,3,4],
        images: {
            'thumbnail': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fthumbnail.png?alt=media&token=f1d110ee-2f05-4d78-9d72-100093df961b',
            'white':'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fwhite.jpg?alt=media&token=3ef6e4e1-83c3-4186-9c3a-eca02631277c',
            'green': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fgreen.jpg?alt=media&token=4f75110d-1f17-4bc7-baeb-a519a2afb01e',
            'black': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fblack.jpg?alt=media&token=e1cc41e1-87a8-4b4f-a5d3-25c09f39876f',
            'blue': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fblue.jpg?alt=media&token=679a6ec3-b0fc-4858-9f13-3fb35e89d462'
        }
    },
    {
        id: 4,
        name: 'Talk is Cheap',
        image: '',
        brands: [1,4,2],
        colors: [9,3,4,5],
        price: 23.3,
        shop: 2,
        tag:[2,4,1],
        size:[1,2,3,4],
        images: {
            'thumbnail': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fthumbnail.png?alt=media&token=f1d110ee-2f05-4d78-9d72-100093df961b',
            'white':'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fwhite.jpg?alt=media&token=3ef6e4e1-83c3-4186-9c3a-eca02631277c',
            'green': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fgreen.jpg?alt=media&token=4f75110d-1f17-4bc7-baeb-a519a2afb01e',
            'black': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fblack.jpg?alt=media&token=e1cc41e1-87a8-4b4f-a5d3-25c09f39876f',
            'light-grey': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Flight-grey.jpg?alt=media&token=27f5efe9-2679-4529-bb87-9e83e347b6e8'
        }
    },
    {
        id: 5,
        name: 'I fix bugs',
        image: '',
        brands: [1,2],
        colors: [7,4,5],
        price: 51.3,
        shop: 1,
        tag:[2,4],
        size:[2,4],
        images: {
            'thumbnail': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fthumbnail.png?alt=media&token=f1d110ee-2f05-4d78-9d72-100093df961b',
            'white':'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fwhite.jpg?alt=media&token=3ef6e4e1-83c3-4186-9c3a-eca02631277c',
            'green': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fgreen.jpg?alt=media&token=4f75110d-1f17-4bc7-baeb-a519a2afb01e',
            'black': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fblack.jpg?alt=media&token=e1cc41e1-87a8-4b4f-a5d3-25c09f39876f',
            'orange': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Forange.jpg?alt=media&token=531b58d7-aed3-4c2d-92df-0ed0a01dac3d'
        }
    },
    {
        id: 6,
        name: 'CSS Artist',
        image: '',
        brands: [1,4,2,3],
        colors: [3,4,2,5],
        price: 51.3,
        shop: 2,
        tag:[2],
        size:[1,4],
        images: {
            'thumbnail': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fthumbnail.png?alt=media&token=f1d110ee-2f05-4d78-9d72-100093df961b',
            'white':'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fwhite.jpg?alt=media&token=3ef6e4e1-83c3-4186-9c3a-eca02631277c',
            'green': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fgreen.jpg?alt=media&token=4f75110d-1f17-4bc7-baeb-a519a2afb01e',
            'black': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fblack.jpg?alt=media&token=e1cc41e1-87a8-4b4f-a5d3-25c09f39876f',
            'blue': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fblue.jpg?alt=media&token=679a6ec3-b0fc-4858-9f13-3fb35e89d462'
        }
    },
    {
        id: 7,
        name: 'HTML',
        image: '',
        brands: [1,4,2],
        colors: [3,4,5],
        price: 53.3,
        shop: 1,
        tag:[2,4],
        size:[1,2,4],
        images: {
            'thumbnail': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fthumbnail.png?alt=media&token=f1d110ee-2f05-4d78-9d72-100093df961b',
            'white':'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fwhite.jpg?alt=media&token=3ef6e4e1-83c3-4186-9c3a-eca02631277c',
            'green': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fgreen.jpg?alt=media&token=4f75110d-1f17-4bc7-baeb-a519a2afb01e',
            'black': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fblack.jpg?alt=media&token=e1cc41e1-87a8-4b4f-a5d3-25c09f39876f',
        }
    },
    {
        id: 8,
        name: 'I am a Programmer',
        image: '',
        brands: [1,2],
        colors: [4,5],
        price: 81.3,
        shop: 1,
        tag:[2,4],
        size:[1,2,3,4],
        images: {
            'thumbnail': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fthumbnail.png?alt=media&token=f1d110ee-2f05-4d78-9d72-100093df961b',
            'white':'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fwhite.jpg?alt=media&token=3ef6e4e1-83c3-4186-9c3a-eca02631277c',
            'green': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fgreen.jpg?alt=media&token=4f75110d-1f17-4bc7-baeb-a519a2afb01e',
            'black': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fblack.jpg?alt=media&token=e1cc41e1-87a8-4b4f-a5d3-25c09f39876f',
        }
    },
    {
        id: 9,
        name: 'Dance, Dance, Dance',
        image: '',
        brands: [1,4,2,3],
        colors: [3,4,2,5],
        price: 41.3,
        shop: 2,
        tag:[3,5],
        size:[1,2],
        images: {
            'thumbnail': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fthumbnail.png?alt=media&token=f1d110ee-2f05-4d78-9d72-100093df961b',
            'white':'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fwhite.jpg?alt=media&token=3ef6e4e1-83c3-4186-9c3a-eca02631277c',
            'green': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fgreen.jpg?alt=media&token=4f75110d-1f17-4bc7-baeb-a519a2afb01e',
            'black': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fblack.jpg?alt=media&token=e1cc41e1-87a8-4b4f-a5d3-25c09f39876f',
            'blue': 'https://firebasestorage.googleapis.com/v0/b/twenty-onetees.appspot.com/o/templates%2Fblue.jpg?alt=media&token=679a6ec3-b0fc-4858-9f13-3fb35e89d462'
        }
    },
] 