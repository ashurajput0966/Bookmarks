import {List,ListItem} from "@mui/material";
import { useState } from "react";
export function BookmarksList() {
  const [links, setLinks] = useState([1, 2, 3]);
  const array = ["one", "two", "three", "four", "five", "six"];

  return (
    <div>
      <List>
        {array.map((arrays) => (
          <ListItem key={arrays.id}>{arrays}</ListItem>
        ))}
      </List>
    </div>
  );
}
