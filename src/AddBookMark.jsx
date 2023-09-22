import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export function AddBookMark() {
    const navigate = useNavigate();
  const openDasboard = ()=>{
    navigate("/")
       
  }


  const Savelink = () => {
    const title = document.getElementById("titleBox").value;
    const link = document.getElementById("linkBox").value;
    console.log(title + "" + link);
  };

  return (
    <div>
      <Dialog open={true} fullWidth={true}>
        <DialogTitle>
          <Grid container>
            <Grid item xs={11}>
            Add Bookmark
            </Grid>
            <Grid item xs={1}>
                <span onClick={()=>{openDasboard()}}>x</span>
            </Grid>
          </Grid>
        </DialogTitle>

        <DialogContent>
          <Grid container spacing={0}>
            <Grid item xs={12} spacing={2}>
              <TextField
                margin="dense"
                fullWidth={true}
                id="titleBox"
                label="Enter title"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                fullWidth={true}
                id="linkBox"
                label="Enter link"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              Savelink();
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
