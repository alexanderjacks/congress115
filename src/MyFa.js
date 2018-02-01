import React from 'react'
import FontAwesome from 'react-fontawesome';

export const MyFa = ({fa}) => (
    <FontAwesome
        name={fa}
        className='fa-1x emboss'
        spin
    />
)
