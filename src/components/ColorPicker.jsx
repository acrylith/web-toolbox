import { Box, Paper, Popper } from '@mui/material'
import React, { useState } from 'react'

export default function ColorPicker() {
    const [anchor, setAnchor] = useState()
    const handleOpen = (e) => {
        setAnchor(anchor ? null : e.currentTarget)
    }
    const open = Boolean(anchor)
    const id = open ? 'popper' : undefined
    return (
        <>
            <Box
                onClick={handleOpen}
                aria-describedby={id}
                sx={{ p: '8px', border: 1, borderRadius: '8px', borderColor: 'gray' }}
            >
                <Box sx={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <Box component='span'
                        sx={{
                            width: '18px', height: '18px', borderRadius: '4px',
                            backgroundColor: 'cyan', display: 'inline-block'
                        }}
                    />
                    Picker
                </Box>
            </Box>
            <Popper id={id} open={open} anchorEl={anchor}>
                <Paper sx={{ border: 1, p: 1, bgcolor: 'rebeccapurple' }}>
                    <input type='color' />
                </Paper>
            </Popper>
        </>
    )
}