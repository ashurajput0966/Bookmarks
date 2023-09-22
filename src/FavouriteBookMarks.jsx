import { List ,ListItemText,ListItemIcon,ListItemButton,ListItem } from "@mui/material"
export function FavouriteBookmarksList(){
    return ( <div>
          <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary="Inbox" />
              <h1>hello world</h1>
            </ListItemButton>
          </ListItem>
          </List>
    </div> )
}