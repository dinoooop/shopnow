import Header from "../components/Header";
import Nav from "../components/Nav";
import "./front.css";

export default function (props) {
    return (
        <>
            <Header />
            <Nav />
            <main>
                {props.children}
            </main>
        </>
    )
}