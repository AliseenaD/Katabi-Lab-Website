import React from "react";
import NavBar from "../components/NavBar";
import '../styles/People.css';
import BannerImage from "../components/BannerImage";
import KatabiPhoto from '../assets/dina-katabi-1.jpg';
import AliPhoto from '../assets/CircleAli.png';
import ChaoPhoto from '../assets/CircleChao.png';
import HaoPhoto from '../assets/CircleHao.png';
import PengPhoto from '../assets/Peng.png';
import MichailPhoto from '../assets/CircleMichail.png';
import ScholarProfiles from "../components/ScholarProfiles";
import Footer from "../components/Footer";
import { Fade } from "react-awesome-reveal";

export default function People() {

    const people = [
        {
            title: 'Principal Investigator',
            content: [{
                name: 'Dina Katabi',
                image: KatabiPhoto,
                bio: `Dina Katabi is the Andrew & Erna Viterbi Professor of Electrical Engineering and Computer Science at MIT. She is also the director of the MIT’s Center for Wireless Networks and Mobile Computing, a member of the National Academy of Engineering, and a recipient of the MacArthur Genius Award.  Professor Katabi received her PhD and MS from MIT in 2003 and 1999, and her Bachelor of Science from Damascus University in 1995.  Katabi's research focuses on innovative mobile and wireless technologies with particular application to digital health.  Her research has been recognized by the ACM Grace Murray Hopper Award, the SIGCOMM test of Time Award, the Faculty Research Innovation Fellowship, a Sloan Fellowship, the NBX Career Development chair, and the NSF CAREER award. Her students received the ACM Best Doctoral Dissertation Award in Computer Science and Engineering twice. Further, her work was recognized by the IEEE William R. Bennett prize, three ACM SIGCOMM Best Paper awards, an NSDI Best Paper award, and a TR10 award. Several start-ups have been spun out of Katabi's lab such as PiCharging and Emerald. `,
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
        },
        {
            title: 'Past Students',
            content: [
                {
                    name: 'John Doe',
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet vel libero at bibendum.'
                },
                {
                    name: 'Jane Show',
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet vel libero at bibendum.'
                },
                {
                    name: 'Bob Dylan',
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet vel libero at bibendum.'
                },
                {
                    name: 'Marcus Doe',
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet vel libero at bibendum.'
                }
            ]
        }
    ]


    return (
        <div className="people-content">
            <NavBar />
            <Fade triggerOnce>
                <BannerImage title='People' />
            </Fade>
            <ScholarProfiles individuals={people[0]} isPI={true} />
            <hr></hr>
            <ScholarProfiles individuals={people[1]} />
            <hr></hr>
            <ScholarProfiles individuals={people[2]} />
            <Footer />
        </div>
    )
}