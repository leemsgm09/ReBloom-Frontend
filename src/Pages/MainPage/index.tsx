import Header from "../../components/Header";
import Body from "../../components/MainP-Body";
import './index.css';

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