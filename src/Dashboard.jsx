import { Container, IconButton, Tab } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Tabs } from "@mui/material";
import { useState } from "react";
import { BookmarksList } from "./BookmarksList";
import { FavouriteBookmarksList } from "./FavouriteBookMarks";
import { Route, Routes } from "react-router-dom";
import { AddBookMark } from "./AddBookMark";
export function Dashboard() {
  const [openAddBookMark, setOpenAddBookMark] = useState(false);
  const handleOpenBookMark = () => {
    setOpenAddBookMark(true);
  };


  const handleCloseBookMark = () => {
    setOpenAddBookMark(false);
  };


  const [value, setvalue] = useState("bookmarks");
  const handtabClick = (clickedTabValue) => {
    setvalue(clickedTabValue);
  };
  return (
    <div>
      <Tabs
        value={value}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab
          onClick={() => {
            handtabClick("bookmarks");
          }}
          value="bookmarks"
          label="Bookmarks"
        />
        <Tab
          onClick={() => {
            handtabClick("favourite");
          }}
          value="favourite"
          label="Favourite"
        />
      </Tabs>
      <div>
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          onClick={handleOpenBookMark}
        >
          <AddCircleIcon />
        </IconButton>
        {openAddBookMark &&(<AddBookMark onClose={handleCloseBookMark} />)}
      </div>
      <Container>
        {value == "bookmarks" ? <BookmarksList /> : <FavouriteBookmarksList />}
        <Routes>
          <Route path="/" element={<BookmarksList></BookmarksList>}>
            BookMark
          </Route>
          <Route path="addBookmark" element={<AddBookMark />}>
            AddBookMark
          </Route>
        </Routes>
      </Container>
    </div>
  );
}
