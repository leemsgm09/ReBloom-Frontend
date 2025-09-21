import Header from "../../components/Header";
import Body from "../../components/MainP-Body";
import './index.css';
// import { BrowserRouter as Router,Route,Link} from "react-router-dom";

function MainPage() {
    return (
        <>
            <div className="MainPage">
                <div className="header"><Header /></div>
                <div className="body"><Body /></div>
            </div>
        </>
    );
}

export default MainPage;