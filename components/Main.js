import html from "html-literal";
import * as views from "./views";

export default (st) => html`
<div id="main">${views[st.view](st)}</div>
`;
