import axios from "axios";
import { useState } from "react";
import * as React from "react";
import "../App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from '@mui/material';
import fetchDataSuccess  from "../state/action";
import appStore from "../state/store";
import { useDispatch , Provider } from "react-redux";

const Home = () => {

  const dispatch = useDispatch();
  const [usersData, setUsersData] = useState();

  const sendGetRequest = async () => {
    try {
      await axios
        .get("https://reqres.in/api/users?page=1")
        .then((response) => appStore.dispatch(fetchDataSuccess(response.data)))
        .catch((err) => console.log("error in try sGR : ", err));
    } catch (err) {
      console.log("error in sendGetRequest", err);
    }
  };
  sendGetRequest();

  // const initialState = {
  //   user : usersData
  // }

  // function userReducer(state = initialState, action){
  //   // if(action.type == 'show'){
  //   //     console.log('in userReducer');
  //   //     return state
  //   // }
  //   console.log('in userReducer');
  //   return state
  // }

  // module.exports = userReducer

  // const userSlice = createSlice({
  //   name : 'data',
  //   initialState ,
  //   reducer : {
  //     show : (state) => {
  //       return state.usersData
  //     },
  //   }
  // })

  // module.exports = userSlice.reducer

  

  function ButtonList() {
    const count = usersData.per_page;
    // const buttonList =
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  );
};

export default Home;
