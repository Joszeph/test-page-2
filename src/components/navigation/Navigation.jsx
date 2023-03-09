import { useState } from "react";

import styles from "./Navigation.module.scss";
import classNames from "classnames";

import {
  Stack,
  Drawer,
  IconButton,
  List,
  Menu,
  ListItem,
  MenuItem,
  ListItemIcon,
  Badge,
  ListItemText
} from "@mui/material";
import {
  HomeOutlined,
  BedOutlined
} from "@mui/icons-material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

import User from "../../components/user/User";

export default function Navigation() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Drawer className={classNames(styles["drawer"])} variant="permanent">
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <User
            name="John Doe"
            size={40}
            hasWelcome={false}
            headingSize="h5"
            avatar=''
          ></User>
          <IconButton id="long-button" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{ "aria-labelledby": "long-button" }}
            onClose={handleClose}
            anchorEl={anchorEl}
            open={open}
          >
            <MenuItem
              key="Logout"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              Logout
            </MenuItem>
          </Menu>
        </Stack>

        <List sx={{ minWidth: "200px" }}>
          {[
            "Apartment",
            "Living Room",
            "Bedroom",
            "Bathroom",
            "Toilet",
            "Patio",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index == 0 ? <HomeOutlined /> : <BedOutlined />}
              </ListItemIcon>
              <ListItemText primary={text} />
              {index == 0 ? (
                <Badge
                  overlap="rectangular"
                  badgeContent={5}
                  color="primary"
                  sx={{ marginRight: "3%" }}
                ></Badge>
              ) : (
                ""
              )}
              {index == 3 ? (
                <Badge
                  overlap="rectangular"
                  badgeContent={"!"}
                  color="secondary"
                  sx={{ marginRight: "3%" }}
                ></Badge>
              ) : (
                ""
              )}
            </ListItem>
          ))}
        </List>
        <List sx={{ minWidth: "200px" }}>
          {[
            "House",
            "Living Room",
            "Bedroom 1",
            "Bedroom 2",
            "Bedroom 3",
            "Bathroom",
            "Toilet",
            "Patio"
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index == 0 ? <HomeOutlined /> : <BedOutlined />}{" "}
              </ListItemIcon>
              <ListItemText primary={text} />
              {index == 0 ? (
                <Badge
                  overlap="rectangular"
                  badgeContent={7}
                  color="primary"
                  sx={{ marginRight: "3%" }}
                ></Badge>
              ) : (
                ""
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
