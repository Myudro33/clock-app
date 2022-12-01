import React from "react";
import { Box,Typography } from "@mui/material";

const Footer = ({
  footer,
  dayOfWeek,
  time,
  dayOfYear,
  weekNumber,
  timezone,
}: any) => {
  return (
    <Box
      sx={{
        position: "relative",
        top: { xs: 212, sm: 380, md: 212 },
        color:time<19?'#303030':'white',
        width: "100%",
        height: footer ? "300px" : "0px",
        backgroundColor: time<19?'#ffffffbf':'#00000099',
        transition: "1s",
        translate: footer ? "0px -300px" : "",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: { xs: "center", sm: "" },
        flexDirection: { xs: "column", sm: "row" },
        gap: "20px",
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "300px", md: "500px" },
          height: { xs: "50px", sm: "100px" },
          transition: "2s",
          display: footer ? "flex" : "none",
          padding:'10px 30px',
          flexDirection:{xs:'row',sm:'column'},
          alignItems:{xs:'center',sm:'start'},
          justifyContent:{xs:'space-between',sm:'flex-start'}
        }}
      >
      <Typography sx={{fontFamily:'inter',fontSize:{xs:'10px',sm:'12px',md:'15px'}}} >CURRENT TIMEZONE</Typography>
      <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'56px'},fontWeight:800,fontFamily:'inter'}} >{timezone}</Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "90%", sm: "300px", md: "500px" },
          height: { xs: "50px", sm: "100px" },
          transition: "2s",
          display: footer ? "flex" : "none",
          padding:'10px 30px',
          flexDirection:{xs:'row',sm:'column'},
          alignItems:{xs:'center',sm:'start'},
          justifyContent:{xs:'space-between',sm:'flex-start'}
        }}
      >
      <Typography sx={{fontFamily:'inter',fontSize:{xs:'10px',sm:'12px',md:'15px'}}} >DAY OF THE WEEK</Typography>
      <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'56px'},fontWeight:800,fontFamily:'inter'}} >{dayOfWeek}</Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "90%", sm: "300px", md: "500px" },
          height: { xs: "50px", sm: "100px" },
          transition: "2s",
          display: footer ? "flex" : "none",
          padding:'10px 30px',
          flexDirection:{xs:'row',sm:'column'},
          alignItems:{xs:'center',sm:'start'},
          justifyContent:{xs:'space-between',sm:'flex-start'}
        }}
      >
      <Typography sx={{fontFamily:'inter',fontSize:{xs:'10px',sm:'12px',md:'15px'}}} >DAY OF THE YEAR</Typography>
      <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'56px'},fontWeight:800,fontFamily:'inter'}} >{dayOfYear}</Typography>
      </Box>
 
      <Box
        sx={{
          width: { xs: "90%", sm: "300px", md: "500px" },
          height: { xs: "50px", sm: "100px" },
          transition: "2s",
          display: footer ? "flex" : "none",
          padding:'10px 30px',
          flexDirection:{xs:'row',sm:'column'},
          alignItems:{xs:'center',sm:'start'},
          justifyContent:{xs:'space-between',sm:'flex-start'}
        }}
      >
      <Typography sx={{fontFamily:'inter',fontSize:{xs:'10px',sm:'12px',md:'15px'}}} >WEEK NUMBER</Typography>
      <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'56px'},fontWeight:800,fontFamily:'inter'}} >{weekNumber}</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
