import React from 'react'

import moodOne from "../assets/one.png";
import moodTwo from "../assets/two.png";
import moodThree from "../assets/three.png";
import whiteCat from "../assets/cat4.png";

const data = {
    moodItems:[
        {
            id: 1,
            image: moodOne,
            description: "Cat wasn't having it",
            date: '',
            time: '',
            catImage: whiteCat,
            alt: 'An emoji showing an angry mood'
        },
        {
            id: 2,
            image: moodTwo,
            description: "Cat was indifferent",
            date: '',
            time: '',
            catImage: whiteCat,
            alt: 'An emoji showing an neutral mood'
        },
        {
            id: 3,
            image: moodThree,
            description: "Cat was super excited!",
            date: '',
            time: '',
            catImage: whiteCat,
            alt: 'An emoji showing an smiling mood'
        }
    ]
}

export default data