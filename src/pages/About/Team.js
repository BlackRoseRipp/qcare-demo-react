import React from 'react';
import './Team.css';

const Team = () => {
    const team = [
        {
            name: 'Waiho Lum',
            prefix: 'Dr.',
            title: 'Board Certified Emergency Medicine',
            headshot: 'assets/img/Team/waiho-lum.jpg'
        },
        {
            name: 'Ping Wong',
            prefix: 'Dr.',
            title: 'Board Certified Emergency Medicine',
            headshot: 'assets/img/Team/ping-wong.jpg'
        }
    ]

    return (
        <div className="team-container py-4">
            <div className='container-lg'>
                <h1 className="team-header">Meet Our Team!</h1>
                <div className='row w-100' id='meetTeamRow'>
                    {team.map((member) => {
                        return (
                            <div className='col-lg-4 col-md-6'>
                                <div className='team-card d-flex flex-column justify-content-center text-center'>
                                    <img src={member.headshot} alt={member.name} className='headshot' />
                                    <h3 className='team-name'>{member.prefix}&nbsp;{member.name}</h3>
                                    <h6 className='team-title'>{member.title}</h6>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Team