import { Button, Checkbox, Container, FormControlLabel, Grid, Slider, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { loremIpsum } from 'react-lorem-ipsum'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function TextFish() {
    const [parCount, setParCount] = useState(1)
    const [avgSent, setAvgSent] = useState(8)
    const [avgWords, setAvgWords] = useState(8)
    const [isRandom, setRandom] = useState(true)
    const [startLorem, setStartLorem] = useState(true)
    const handlePar = (event) => {
        setParCount(event.target.value)
    }
    const handleSent = (event) => {
        setAvgSent(event.target.value)
    }
    const handleWord = (event) => {
        setAvgWords(event.target.value)
    }
    const handleRandom = () => {
        setRandom(!isRandom)
    }
    const handleStartLorem = () => {
        setStartLorem(!startLorem)
    }
    const copyToClipBoard = () => {
        navigator.clipboard.writeText(lorem.join())
    }
    const lorem = loremIpsum({
        p: parCount,
        avgSentencesPerParagraph: avgSent,
        avgWordsPerSentence: avgWords,
        startWithLoremIpsum: startLorem,
        random: isRandom
    })
    return (
        <Container>
            <Typography component='h1' variant='h3' color='primary' sx={{ textAlign: 'center', mt: 2 }}>Lorem Ipsum generator</Typography>
            <Grid container columnSpacing={2} sx={{mt: 4, mb: 4}}>
                <Grid item xs={12} md={6} lg={4}>
                    <Typography variant='caption' sx={{color: 'GrayText'}}>
                        Paragraphs count: <Typography component='span' color='primary' fontWeight='bold'>{parCount}</Typography>
                    </Typography>
                    <Slider
                        aria-label='paragraphs'
                        value={parCount}
                        valueLabelDisplay='off'
                        marks
                        step={1}
                        min={1}
                        max={50}
                        onChange={handlePar}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Typography variant='caption' sx={{color: 'GrayText'}}>
                        Avg. sentences per paragraph: <Typography component='span' color='primary' fontWeight='bold'>{avgSent}</Typography>
                    </Typography>
                    <Slider
                        aria-label='sentences'
                        value={avgSent}
                        valueLabelDisplay='off'
                        marks
                        step={1}
                        min={1}
                        max={25}
                        onChange={handleSent}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Typography variant='caption' sx={{color: 'GrayText'}}>
                        Avg. words per sentence: <Typography component='span' color='primary' fontWeight='bold'>{avgWords}</Typography>
                    </Typography>
                    <Slider
                        aria-label='words'
                        value={avgWords}
                        valueLabelDisplay='off'
                        marks
                        step={1}
                        min={1}
                        max={25}
                        onChange={handleWord}
                    />
                </Grid>
            </Grid>
            <TextField
                multiline
                fullWidth
                rows={12}
                inputProps={{ readOnly: true }}
                value={lorem.join()}
            />
            <Grid container columnSpacing={2} sx={{mt: 4, mb: 4}}>
                <Grid item xs={6} lg={4}>
                    <FormControlLabel
                        control={<Checkbox
                            checked={isRandom}
                            onChange={handleRandom}
                            inputProps={{ 'aria-label': 'isRandom' }}
                        />}
                        label='Random text'
                    />
                </Grid>
                <Grid item xs={6} lg={4}>
                    <FormControlLabel
                        control={<Checkbox
                            checked={startLorem}
                            onChange={handleStartLorem}
                            inputProps={{ 'aria-label': 'StartWithLorem' }}
                        />}
                        label='Start with "Lorem ipsum..."'
                    />
                </Grid>
                <Grid item xs={12} lg={4} sx={{ display: 'flex', justifyContent: { xs: 'center', lg: 'flex-end' }, mt: { xs: 2, lg: 0 } }}>
                    <Button onClick={copyToClipBoard} variant='contained'>
                        <ContentCopyIcon sx={{ fontSize: 16, mr: 1 }} />
                        Copy
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}