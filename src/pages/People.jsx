import React from "react";
import NavBar from "../components/NavBar";
import '../styles/People.css';
import BannerImage from "../components/BannerImage";
import Profiles from "../components/Profiles";
import KatabiPhoto from '../assets/dina-katabi-1.jpg';
import AliPhoto from '../assets/Ali.png';
import ChaoPhoto from '../assets/ChaoLi.png';
import HaoPhoto from '../assets/Hao.png';
import PengPhoto from '../assets/Peng.png';
import MichailPhoto from '../assets/Michail.jpeg';

export default function People() {

    const people = [
        {
            title: 'Principal Investigator',
            content: [{
                name: 'Dina Katabi',
                image: KatabiPhoto,
                bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet vel libero at bibendum.',
                email: 'personemail@mit.edu'
            }]
        },
        {
            title: 'PhD Scholars',
            content: [
                {
                    name: 'Ali Mirzazadeh',
                    image: AliPhoto,
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet vel libero at bibendum.',
                    email: 'personemail@mit.edu'
                },
                {
                    name: 'Chao Li',
                    image: ChaoPhoto,
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet vel libero at bibendum.',
                    email: 'personemail@mit.edu'
                },
                {
                    name: 'Hao He',
                    image: HaoPhoto,
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet vel libero at bibendum.',
                    email: 'personemail@mit.edu'
                },
                {
                    name: 'Peng Cao',
                    image: PengPhoto,
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet vel libero at bibendum.',
                    email: 'personemail@mit.edu'
                },
                {
                    name: 'Michail Ouroutzoglou',
                    image: MichailPhoto,
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet vel libero at bibendum.',
                    email: 'personemail@mit.edu'
                }
            ]
        }
    ]


    return (
        <div className="people-content">
            <NavBar />
            <BannerImage title='People' />
            <Profiles individuals={people[0]} />
            <hr></hr>
            <Profiles individuals={people[1]} />
        </div>
    )
}