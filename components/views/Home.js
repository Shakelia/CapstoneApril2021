import html from "html-literal";
export default (st) => html`

<h1>Kidney Konnect can help!</h1>



  <h3>
    Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)}F, feels
    like ${kelvinToFahrenheit(st.weather.feelsLike)}F
  </h3>
;

<h2 class="boxTitles">

<img src="https://choosingdialysis.org/portals/0/DecisionAid/Images/Pics2/StagesGraphic_W600.png"/>
<img src="http://www.pompanodialysis.com/wp-content/uploads/2016/07/dialysistypes-1080x675.jpg"/>
</h2>`;
const kelvinToFahrenheit = kelvinTemp =>
Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
