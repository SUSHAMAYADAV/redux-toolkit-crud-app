import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Tablelist from "../Components/Tablelist";
import AddDetails from "../Components/AddDetails";
function Detailslist() {
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseButton = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ m: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          mb: 4,
        }}
      >
        <Typography variant="h5">Employee List</Typography>
        <Button variant="contained" onClick={handleOpen}>
          Add Details
        </Button>
      </Box>
      <Box>
        <Tablelist setOpen={setOpen} setEditData={setEditData} />
      </Box>
      <AddDetails
        open={open}
        handleCloseButton={handleCloseButton}
        editData={editData}
      />
    </Box>
  );
}

export default Detailslist;
