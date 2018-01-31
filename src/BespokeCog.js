import React from 'react';
import FontAwesome from 'react-fontawesome';

{/* this is approps for render() in index. It may be causing issues cuz of insertion into JSX template instead of render method */}

export const BespokeCog = () => (
    <BespokeCog
        name='cog'
        className='fa-1x emboss'
        spin
    />
)
