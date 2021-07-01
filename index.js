import {Header, Nav, Main, Footer} from "./components";
import * as state from "./store";
import Navigo from 'navigo';
import {capitalize} from "lodash";
import axios from "axios";


const router = new Navigo(window.location.origin);



function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
  `;
  router.updatePageLinks();
}

router.hooks({
  before: (done, params) => {
    const page = params && params.hasOwnProperty("page") ? capitalize(params.page) : "Home";

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.open_weather_map}&q=st.%20louis`
        )
        .then(response => {
          state.Home.weather = {};
          console.log(response);
          state.Home.weather.city = response.data.name;
          console.log(response.data.name);
          state.Home.weather.temp = response.data.main.temp;
          state.Home.weather.feelsLike = response.data.main.feels_like;
          state.Home.weather.description = response.data.weather[0].main;
          done();
        })
        .catch(err => console.log(err));
    }
  }
);
router.on({
  ":page": (params) => render(state[capitalize(params.page)]),
  "/": () => render(state.Home),
})
.resolve();
