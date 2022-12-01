import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { getQuotes } from "../Data/Api";
import { Typography } from "@mui/material";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";

interface AdviceProps {
  footer: boolean;
}

const Advice = ({ footer }: AdviceProps) => {
  const [quote, setQuote] = useState<{ content: string; author: string }>();

  useEffect(() => {
    getQuotes(setQuote);
  }, []);

  return (
    <Box
      sx={{
        width: { xs: "90%", sm: 500, md: 600 },
        height: 250,
        position: "relative",
        left: { xs: 10, sm: 100, md: 200 },
        top: 70,
        display: "flex",
        justifyContent: "space-between",
        transition: "1s",
        translate: footer ? "0px -300px" : "",
      }}
    >
      <Box
        sx={{
          width: "85%",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            color: "white",
          }}
        >
          "{quote?.content}"
        </Typography>
        <Typography
          mt={2}
          sx={{
            fontSize: { xs: "17px", sm: "19px", md: "22px" },
            color: "white",
            fontWeight: 600,
          }}
        >
          {quote?.author}
        </Typography>
      </Box>
      <RestartAltOutlinedIcon
        onClick={() => getQuotes(setQuote)}
        sx={{ color: "white", cursor: "pointer" }}
      />
    </Box>
  );
};

export default Advice;
