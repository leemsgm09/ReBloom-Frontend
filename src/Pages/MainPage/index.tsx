import Header from "../../components/Header";
import Body from "../../components/MainP-Body";
import './index.css';
// import { BrowserRouter as Router,Route,Link} from "react-router-dom";

function MainPage() {
    return (
        <>
            <header><Header /></header>
            <body>
                <Body />
            </body>
        </>
    );
}

export default MainPage;