import "./works.scss";

export default function Works() {

    return (


        <div className="works" id="works">
            <div className="header">
                <h2>Projects</h2>
            </div>

            <div className="left_container">
                <img src="assets/webapp.png" width="500px" height="500px" alt="" />
                <h3>E-Commerece Web App</h3>
                <p ><a href="https://github.com/henok256/Ecommerce-app" target="_blank" rel="noreferrer">Github repository</a></p>
            </div>

            <div className="right_container">
                <img src="https://cdn.dribbble.com/users/1726280/screenshots/13145817/media/98b3a7f831cc22126c69b74c230459ab.jpg?compress=1&resize=400x300" alt="pictur for mobile app" width="500px" height="500px" />
                <h3 >Mobile App</h3>
                <p ><a href="https://github.com/Ibro365/Geeazy_Mobile_App" target="_blank" rel="noreferrer">Github repository</a></p>

            </div>

            <div className="arrowdown">
                <a href="#contact">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>



        </div>

    )
}
