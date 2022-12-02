import React from "react";
import { Box,Typography } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

interface ClockProps {
  slicedTime: string;
  time: number;
  setfooter:any;
  footer:boolean
}

const Clock = ({ slicedTime, time,setfooter,footer }: ClockProps) => {
  return (
    <Box
      sx={{
        width: { xs: "90%", sm: 500, md: "70%" },
        height: { xs: 400, md: 250 },
        position: "relative",
        left: { xs: 10, sm: 100, md: 200 },
        top: 70,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        transition:'1s',
        translate:footer?'0px -200px':''
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "60%" },
          height: { xs: "70%", md: "100%" },
          
        }}
      >
        <Typography
          sx={{
            display: "flex",
            color: "white",
            height: "20%",
            alignItems: "center",
          }}
        >
          {time > 6 && time < 19 ? (
            <WbSunnyOutlinedIcon sx={{ color: "white" }} className="rotate" />
          ) : (
            <ModeNightOutlinedIcon sx={{ color: "white" }} className="rotate" />
          )}
          {time > 6 && time < 13 && (
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "20px" },
                textTransform: "uppercase",
              }}
            >
              Good Morning
            </Typography>
          )}
          {time > 12 && time < 18 && (
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "20px" },
                textTransform: "uppercase",
              }}
            >
              Good Afternoon
            </Typography>
          )}
          {time > 17 && time < 22 && (
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "20px" },
                textTransform: "uppercase",
              }}
            >
              Good Evening
            </Typography>
          )}
          {time>0&&time<6 && (
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "20px" },
                textTransform: "uppercase",
              }}
            >
              Good Night
            </Typography>
          )}
          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "20px" },
              marginLeft: "10px",
              display: { xs: "none", sm: "flex" },
            }}
          >
            IT'S CURRENTLY
          </Typography>
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontWeight: "800",
            fontSize: { xs: "80px", sm: "130px", md: "170px" },
            fontFamily: "inter",
            height: "80%",
          }}
        >
          {slicedTime}
        </Typography>
      </Box>
      <button
      onClick={()=>setfooter((prev:boolean)=>!prev)}
        style={{
          color: "gray",
          fontWeight: "800",
          cursor: "pointer",
          alignSelf: "end",
          width: "150px",
          backgroundColor: "white",
          height: "50px",
          borderRadius: "25px",
          wordSpacing: "5px",
          border: "none",
          display: "flex",
          justifyContent:'space-evenly',
          alignItems:'center'
        }}
      >
        {footer?'LESS':'MORE'}
        <div
          style={{
            width: "35px",
            height: "35px",
            backgroundColor: "gray",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ArrowDownwardOutlinedIcon sx={{ color: "white",rotate:footer?'-180deg':'0deg',transition:'1s' }} />
        </div>
      </button>
    </Box>
  );
};

export default Clock;
