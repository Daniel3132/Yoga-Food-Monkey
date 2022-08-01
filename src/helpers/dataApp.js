import salad from '../assets/salad.png'
import barbecue from '../assets/app/barbecue.png'
import breakfast from '../assets/app/breakfast.png'
import cake from '../assets/app/cake.png'
import carrots from '../assets/app/carrots.png'
import egg from '../assets/app/egg.png'
import shrimp from '../assets/app/shrimp.png'
import soup from '../assets/app/soup.png'
import steak from '../assets/app/steak.png'
import tomato from '../assets/app/tomato.png'
import sushi from '../assets/sushi.png'

export const mealsArray = [
    {
        nombre: 'Entrees',
        recipes: 135,
        imagen: soup,
    },
    {
        nombre: 'Breakfast',
        recipes: 71,
        imagen: breakfast,
    },
    {
        nombre: 'Lunch',
        recipes: 135,
        imagen: salad,
    },
    {
        nombre: 'Snack',
        recipes: 95,
        imagen: barbecue,
    },
    {
        nombre: 'Vegan',
        recipes: 71,
        imagen: sushi,
    },
    {
        nombre: 'Dessert',
        recipes: 110,
        imagen: cake,
    },
]

export const lunchArray = [
    {
        nombre: 'Sushi',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imagen: sushi,
        tiempo: 40
    },
    {
        nombre: 'Steak',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imagen: steak,
        tiempo: 25
    },
    {
        nombre: 'Salad',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imagen: salad,
        tiempo: 20
    },
    {
        nombre: 'Shrimp',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imagen: shrimp,
        tiempo: 35
    },
    {
        nombre: 'Soup',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imagen: soup,
        tiempo: 20
    }
]

export const ingredientsArray = [
    {
        nombre: 'Carrots',
        imagen: carrots,
        cantidad: 2
    },
    {
        nombre: 'tomatoes',
        imagen: tomato,
        cantidad: 2
    },
    {
        nombre: 'Eggs',
        imagen: egg,
        cantidad: 2
    },
]

export const questionsArray = [
    {
        question: '1. Did you eat anything in the last four or five hours before you went to bed the nigh before? ',
        options: ['Yes', 'No']
    },
    {
        question: '2. Did you have interrupted sleep?',
        options: ['Before', 'After']
    },
    {
        question: '3. Did you go to bed before 11:00 of after 11:00?',
        options: ['Before', 'After']
    },
    {
        question: '4. Do you include fruit in your breakfast?',
        options: ['Yes', 'No']
    }
]