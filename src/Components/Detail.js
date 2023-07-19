import { useState } from "react";
import Listado from "./Listado";
import "../Styles/Detail.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Detail = () => {

    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("Sign in")
        navigate("/")
    }

    const searchBook = (e) => {
        if (e.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyDF3ctojH-KQCmX-IPHUSjwu7blsTbZzjw' + '&maxResults=40')
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        }
    }
    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br /> a body without a soul.</h1>
                </div>
                <button className="ButtonLogout" onClick={handleLogout}>Logout</button>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                            value={search} onChange={e => setSearch(e.target.value)}
                            onKeyDown={searchBook} />
                        <button><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </div>

            <div className="container">
                {
                    <Listado book={bookData} />
                }
            </div>
        </>
    )
}
export default Detail;
