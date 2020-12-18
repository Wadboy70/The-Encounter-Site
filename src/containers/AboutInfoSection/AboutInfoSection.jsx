import React from 'react'

import './AboutInfoSection.scss';

const AboutInfoSection = () => {
    const aboutInfoValues = [
        {
          "title": "Our Beliefs",
          "description": "We believe that the holy bible is the true word of the God of Abraham, Isaac, and Jacob.  Although written by human authors we believe they did so under the supernatural guidance of the Holy Spirit.  With this belief we accept this written word as truth and embrace it completely that our daily lives may be impacted for Gods Glory."
        },
        {
            "title": "Salvation",
            "description": "We believe that if you confess with your mouth and believe in your heart that Jesus Christ died on the cross for our sins, and was raised from the dead by Almighty God, then you are saved from the damnation of hell, ensuring that you will rest in eternity with God the Father in Heaven."
        },
        {
            "title": "Trinity",
            "description": "We believe in the Holy Trinity, \"Father\", \"Son\", and the \"Holy Spirit\".  Although each part functions differently, we believe based upon the word of God that they each posses equal power and authority."
        },
        {
            "title": "Discipleship",
            "description": "We believe that it is our primary purpose in this life to go out and make disciples of all nations.  To baptize them in the name of the Father, the Son and of the Holy Spirit.  Teaching all to be obedient to the words of the Lord, that we may be prosperous and have good success.  Joshua 1:8"
        },
        {
            "title": "Do No Harm",
            "description": "We believe that although God has given us the ability to judge our brother, that because there is not one human on the Earth without sin than we we should not Judge one another.  It is our aim to embrace \"all people\" wherever they are on their spiritual journey, to help foster a healthy relationship with God the Father by teaching the word of the Lord in the spirit of Love. It is our faith in God that whatever change, development, or metamorphosis that needs to occur with any individual, will happen as they personally encounter God.  Our responsibility as a ministry is to create an atmosphere and opportunity for that to occur."
        },
      ]
    return(
        <section className = 'aboutInfoSection'>
            {
                aboutInfoValues.map(val => (
                    <AboutDisplayBox
                        key = {val.title}
                        title = { val.title }
                        description = { val.description }
                    />
                ))
            }
        </section>
    );
};

const AboutDisplayBox = ({title, description}) => {
    return(
        <div className = 'aboutDisplayBox'>
            <h2 className = 'aboutDisplayBox__title'>{title}</h2>
            <p className = 'aboutDisplayBox__description'>{description}</p>
        </div>
    )
}

export default AboutInfoSection;