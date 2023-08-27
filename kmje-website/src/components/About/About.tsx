import React from 'react';
import sassy from './sassy.png';
import '../About/About.scss';

const About: React.FC = () => {
    return (
        <div className="body-container">
            <div className="content-container">
                <div className="content-container__left-div">
                    <img src={sassy} alt="Kevin Jones-Eastland memoji in a sassy pose" />
                </div>
                <div className="content-container__right-div">
                    <div className="blurb">
                        <p>I'm Kevin,</p>
                        <p>I've got one foot in the tech world and the other in the space of American Sign Language (ASL) interpretation — talk about an interesting combo, right?</p>
                        <p>For over a decade, I've been an ASL interpreter and I've spent the last two years specializing in interpreting for software engineers and now I'm open to a transition that allows me to blend my love for tech and my knack for being a rockstar communicator in a role that's more hands-on with technology.</p>
                        <p>So, what's in my toolkit? Well, from CI/CD pipelines to web development and data analytics, I've done a bit of everything as I worked to settle into a stack and niche. I'm still learning and growing and want to find a place where my personality and skillset will shine.</p>
                        <p>I'm super pumped to bring my broad range of skills into a more tech-focused role, and honestly, I can't wait to see how my journey unfolds from here. If you're looking for someone who has over a decade of rock solid work performance and a penchant to stay and learn for a long time, and someone who values inclusivity, open-communication and building a straight-up awesome team dynamic, then I'm your guy!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
