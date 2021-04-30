import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import CategoryOutlinedIcon from "@material-ui/icons/CategoryOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
export const NAVMENU = [
  {
    title: "Shopping",
    path: "/shopping",
    icon: <ShoppingBasketOutlinedIcon />,
  },
  {
    title: "My orders",
    path: "/myorders",
    icon: <LocalMallOutlinedIcon />,
  },
  {
    title: "Categories",
    path: "/categories",
    icon: <CategoryOutlinedIcon />,
  },
  {
    title: "My profile",
    path: "/myprofile",
    icon: <AccountCircleOutlinedIcon />,
  },
];
