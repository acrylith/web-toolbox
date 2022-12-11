import styled from '@emotion/styled'
import { Container } from '@mui/system'
import { Box, Button, Checkbox, Divider, FormControlLabel, Grid, Radio, RadioGroup, Slider, Stack, Typography } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import React, { useState, useRef } from 'react'
import Screen from '../components/Screen'

export default function BoxShadow() {
    const [xOffset, setxOffset] = useState(10)
    const [yOffset, setyOffset] = useState(10)
    const [blur, setBlur] = useState(15)
    const [spread, setSpread] = useState(3)
    const [shape, setShape] = useState('square')
    const [shadowColor, setShadowColor] = useState('#dddddd')
    const [bodyColor, setBodyColor] = useState('#1976d2')
    const [bgColor, setBgColor] = useState('#ffffff')
    const [inset, setInset] = useState(false)
    const codeRef = useRef()
    const Blank = styled.div`
        background-color: ${bodyColor};
        width: ${shape === 'header' ? '100%' : '200px'};
        height: ${shape === 'header' ? '80px' : '200px'};
        border-radius: ${shape === 'circle' ? '50%' : shape === 'header' ? '0' : '12px'};
        align-self: ${shape === 'header' ? 'flex-start' : 'center'};
        transition: all .5s;
    `
    const Fig = styled(Blank)`
        -webkit-box-shadow:${inset? ' inset' : null} ${xOffset}px ${yOffset}px ${blur}px ${spread}px ${shadowColor};
        -moz-box-shadow:${inset? ' inset' : null} ${xOffset}px ${yOffset}px ${blur}px ${spread}px ${shadowColor};
        box-shadow:${inset? ' inset' : null} ${xOffset}px ${yOffset}px ${blur}px ${spread}px ${shadowColor};
    `
    // console.log(inset)
    return (
        <div>
            <Container>
                <Typography component='h1' variant='h3' color='primary' sx={{ textAlign: 'center', mb: 2, mt: 2 }}>
                    Box Shadow CSS Generator
                </Typography>
                <Grid container columnSpacing={2}>
                    <Grid item xs={12} lg={8}>
                        <Grid container columnSpacing={1}>
                            <Grid item xs={12} lg={6}>
                                <Stack>
                                    <Typography component='h5' variant='subtitle2' color='GrayText'>Horizontal Offset</Typography>
                                    <Slider
                                        aria-label='xOffset'
                                        value={xOffset}
                                        min={-32}
                                        max={32}
                                        step={1}
                                        valueLabelDisplay="auto"
                                        onChange={(e) => setxOffset(e.target.value)}
                                    />
                                    <Typography component='h5' variant='subtitle2' color='GrayText'>Vertical Offset</Typography>
                                    <Slider
                                        aria-label='yOffset'
                                        value={yOffset}
                                        min={-32}
                                        max={32}
                                        step={1}
                                        valueLabelDisplay="auto"
                                        onChange={(e) => setyOffset(e.target.value)}
                                    />
                                    <Typography component='h5' variant='subtitle2' color='GrayText'>Blur</Typography>
                                    <Slider
                                        aria-label='blur'
                                        value={blur}
                                        min={0}
                                        max={32}
                                        step={1}
                                        valueLabelDisplay="auto"
                                        onChange={(e) => setBlur(e.target.value)}
                                    />
                                    <Typography component='h5' variant='subtitle2' color='GrayText'>Horizontal Offset</Typography>
                                    <Slider
                                        aria-label='Spread'
                                        value={spread}
                                        min={-32}
                                        max={32}
                                        step={1}
                                        valueLabelDisplay="auto"
                                        onChange={(e) => setSpread(e.target.value)}
                                    />
                                    <Box sx={{ p: 1, mb: 1, border: 1, borderRadius: '14px', borderColor: 'gray' }}>
                                        <Typography component='h5' variant='subtitle2' color='GrayText'>Shadow Color</Typography>
                                        <input type='color' value={shadowColor} onChange={(e) => setShadowColor(e.target.value)} /> 
                                        {shadowColor}
                                    </Box>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={inset}
                                                onChange={() => setInset(!inset)}
                                                inputprops={{ 'aria-label': 'controlled' }}
                                                color='primary'
                                            />
                                        }
                                        label='Inset'
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <Stack>
                                    <Box sx={{ p: 1, mb: 1, border: 1, borderRadius: '14px', borderColor: 'gray' }}>
                                        <Typography component='h5' variant='subtitle2' color='GrayText'>Figure Color</Typography>
                                        <input
                                            type='color'
                                            value={bodyColor}
                                            onChange={(e) => setBodyColor(e.target.value)}
                                        /> 
                                        {bodyColor}
                                    </Box>
                                    <Box sx={{ p: 1, mb: 1, border: 1, borderRadius: '14px', borderColor: 'gray' }}>
                                        <Typography component='h5' variant='subtitle2' color='GrayText'>Background Color</Typography>
                                        <input type='color' value={bgColor} onChange={(e) => setBgColor(e.target.value)} /> 
                                        {bgColor}
                                    </Box>
                                </Stack>
                                <RadioGroup aria-labelledby='shape' value={shape} onChange={(e) => setShape(e.target.value)}>
                                    <Typography component='h5' variant='subtitle2' color='GrayText'>Horizontal Offset</Typography>
                                    <FormControlLabel value='square' control={<Radio />} label='Square' />
                                    <FormControlLabel value='circle' control={<Radio />} label='Circle' />
                                    <FormControlLabel value='header' control={<Radio />} label='Header' />
                                </RadioGroup>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Screen Figure={Fig} bg={bgColor} />
                    </Grid>
                </Grid>
                <Box sx={{
                        border: 1, borderColor: '#dddddd', borderRadius: '12px',
                        '& pre': { m: 0 }, overflow: 'hidden', mt: 2
                    }}>
                    <Typography component='h4' variant='subtitle1' color='GrayText' sx={{backgroundColor: '#f2f2f2', p: '0 12px'}}>
                        CSS
                    </Typography>
                    <Divider />
                    <pre ref={codeRef}>
                        <code>
                            {Fig.__emotion_styles.slice(11).map(item => item)}
                        </code>
                    </pre>
                </Box>
                <Box sx={{ mt: 2, mb: 2, display: 'flex', justifyContent: 'center' }}>
                    <Button variant='contained' onClick={() => navigator.clipboard.writeText(codeRef.current.innerText)}>
                        <ContentCopyIcon sx={{ fontSize: 16, mr: 1 }}/>
                        Copy
                    </Button>
                </Box>
            </Container>
        </div>
    )
}