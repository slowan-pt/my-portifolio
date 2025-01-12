import { Button, Container, styled, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';


import Avatar from "../../../../assets/images/avatar.png"
import DownloadIcon from '@mui/icons-material/Download';
import MailIcon from '@mui/icons-material/Mail';


const Hero = () => {

     const StyledHero = styled("div")(()=> ({
         backgroundColor: 'black',
         height: '100vh'
     }))

    const StyledImg = styled("img")(()=> ({
        width: "100%",
        borderRadius: "50%"
    }))

  return (
    <>
     <StyledHero>
      <Container>
          <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <StyledImg src={Avatar} />
                  </Grid>
                    <Grid item xs={12} md={8}>
                      <Typography color="primary" variant="h1" textAlign="center">Sloan Nascimento</Typography>
                      <Typography color="primary" variant="h2" textAlign="center">I'm a developer software</Typography>
                
                          <Grid container display="flex" justifyContent="center">
                            <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                <Button>
                                  <DownloadIcon/>
                                  Download CV
                                </Button>
                            </Grid>
                            <Grid item xs={12}  md={6} display="flex" justifyContent="center">
                                <Button>
                                  <MailIcon/>
                                  Contacte me
                                </Button>
                            </Grid>
                          </Grid>
                    </Grid>
                </Grid>
                
      </Container>
      
     </StyledHero>
    </>
  )
}

export default Hero
