import { Box, Fab, CircularProgress   } from "@mui/material";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
 
 const  LoadingFab = ( {setSoudUrl, soundUrl, isloadingSound}) => {
   return (
  
 <Box sx={{ m: 1, position: "relative" }}>
 <Fab
   style={{ display: "inline block", marginTop: "-5px", boxShadow: "none", marginLeft: "0.5rem" }}
   size="small"
   color="lightgray"
   aria-label=""
   onClick={() => {
    setSoudUrl(`${soundUrl}`);
   }}
 >
   <VolumeUpOutlinedIcon />
 </Fab>
 {isloadingSound && (
   <CircularProgress
     size={46}
     sx={{
       color: "darkgray",
       position: "absolute",
       top: -8,
       left: 5,
       zIndex: 1,
     }}
   />
 )}
</Box>
   )
 }
 
 export default LoadingFab
 