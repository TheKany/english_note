import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <h1>
                <a href="/">토익 영단어(고급)</a>
            </h1>
            <div className="menu">
                <Link to="/create_word" className="link">
                    단어 추가
                </Link>
                <a href="/create_day" className="link">
                    Day 추가
                </a>
            </div>
        </div>
    )
};

export default Header;