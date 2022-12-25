import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

export default function Preloader() {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress />
    </Box>
  );
}
