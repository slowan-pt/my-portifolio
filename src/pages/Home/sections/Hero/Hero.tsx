import { Container, Grid, Grid2, styled } from '@mui/material'
import Avatar from "../../../../assets/images/avatar.png"



const Hero = () => {

     const StyledHero = styled("div")(()=> ({
         backgroundColor: 'black'
     }))

    const StyledImg = styled("img")(()=> ({
        width: "30%",
        borderRadius: "50%"
    }))

  return (
    <>
     <StyledHero>
      <Container>

     
          <Grid2 container spacing={2}>
              <Grid2 item xs={4}>
                <StyledImg src={Avatar} />
              </Grid2>
              <Grid2 item xs={8}>
                xs=4
              </Grid2>
          </Grid2>
      </Container>
     </StyledHero>
    </>
  )
}

export default Hero
