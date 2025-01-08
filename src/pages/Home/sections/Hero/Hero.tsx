import { styled } from '@mui/material'
import Avatar from "../../../../assets/images/avatar.png"



const Hero = () => {

    const StyleHero = styled("div")(()=> ({
        backgroundColor: 'black'
    }))

    const StyleImg = styled("img")(()=> ({
        
    }))

  return (
    <>
     <StyleHero>
        Ola
        <img src={Avatar} />
     </StyleHero>
    </>
  )
}

export default Hero
