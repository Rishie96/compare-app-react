import Apple from './images/apple.jpg';
import Guava from './images/guava.jpg';
import Orange from './images/orange.jpg';
import Strawberry from './images/strawberry.jpg';
export default function() {
    return [
        {
            name: 'Apples',
            price: '200',
            colors: ['#f44336', '#4caf50'],
            condition: 'Fresh',
            description: 'Box of 10.',
            image: Apple
        },
        {
            name: 'Guava',
            price: '12',
            colors: ['#4caf50', '#e84393'],
            condition: 'Fresh',
            description: 'Pink from inside!',
            image: Guava
        },
        {
            name: 'Oranges',
            price: '40',
            colors: ['#fb8c00'],
            condition: 'Fresh',
            description: 'Sweet 5',
            image: Orange
        },
        {
            name: 'Strawberry',
            price: '240',
            colors: ['#f44336', '#e91e63'],
            condition: 'Frozen',
            description: 'Just Strawberry.',
            image: Strawberry
        }
    ]
}