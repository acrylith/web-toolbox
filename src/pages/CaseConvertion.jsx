import React, { useState } from 'react'
import { Button, TextField, Chip, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import v from 'voca'

export default function CaseConvertion() {
    const [text, setText] = useState()
    const handleTyping = (event) => {
        setText(event.target.value)
    }
    const copyToClipBoard = () => {
        navigator.clipboard.writeText(text)
    }
    return (
        <section>
            <Typography component='h1' variant='h3' color='primary' sx={{ textAlign: 'center', mt: 2 }}>Case Converter</Typography>
            <Container>
                <TextField
                    multiline
                    fullWidth
                    rows={12}
                    onChange={handleTyping}
                    value={text}
                    sx={{ m: '24px 0' }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'center', m: '24px 0' }}>
                    <Button variant='contained' onClick={copyToClipBoard}>Copy</Button>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1em', flexWrap: 'wrap' }}>
                    <Chip onClick={() => setText(v.upperCase(text))} label='UPPER CASE'/>
                    <Chip onClick={() => setText(v.lowerCase(text))} label='lower case'/>
                    <Chip onClick={() => setText(v.capitalize(text))} label='Capitalize'/>
                    <Chip onClick={() => setText(v.decapitalize(text))} label='decapitalize'/>
                    <Chip onClick={() => setText(v.titleCase(text))} label='Title Case'/>
                    <Chip onClick={() => setText(v.camelCase(text))} label='camelCase'/>
                    <Chip onClick={() => setText(v.kebabCase(text))} label='kebab-case'/>
                    <Chip onClick={() => setText(v.snakeCase(text))} label='snake_case'/>
                    <Chip onClick={() => setText(v.swapCase(text))} label='sWAP cASE'/>
                    <Chip onClick={() => setText(v.slugify(text))} label='Slugify'/>
                    <Chip onClick={() => setText(v.latinise(text))} label='Latinise'/>
                    <Chip onClick={() => setText(v.reverseGrapheme(text))} label='Reverse'/>
                </Box>
            </Container>
        </section>
    )
}