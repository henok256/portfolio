import "./menu.scss";


export default function Menu({ menuOpen, setMenuOpen }) {
    const menuRemover = (e) => {
        setMenuOpen(false);
    }
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>

                <li onClick={() => setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>

                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

        </div>
    );
}
