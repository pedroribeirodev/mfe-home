import React from "react";
import { Box } from "@pedro-marketplace/react";

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "5px",
        padding: "0 24px",
      }}
    >
      <Box style={{ width: "150px", height: "150px", color: "white" }}>
        Produto
      </Box>
      <Box style={{ width: "150px", height: "150px", color: "white" }}>
        Produto
      </Box>
      <Box style={{ width: "150px", height: "150px", color: "white" }}>
        Produto
      </Box>
      <Box style={{ width: "150px", height: "150px", color: "white" }}>
        Produto
      </Box>
    </div>
  );
};

export default Home;
