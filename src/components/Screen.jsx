import { Box } from '@mui/material'
import React from 'react'

export default function Screen(props) {
    const { Figure, bg } = props
    return (
        <Box sx={{
                width: '100%', height: '100%',
                display: 'flex', justifyContent: 'center',
                backgroundColor: bg, overflow: 'hidden', 
                border: 1, borderColor: '#dddddd', borderRadius: '12px'
                }}>
            <Figure/>
        </Box>
    )
}