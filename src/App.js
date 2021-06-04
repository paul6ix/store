import Header from "./components/header";
import Footer from "./components/footer";
import {Container} from "react-bootstrap"

function App() {
    return (
        <div>
            <Header/>
            <main>
                <Container className="py-3 text-center">
                    <h2> Welcome to LEAP Store</h2>
                </Container>

            </main>
            <Footer/>
        </div>
    );
}

export default App;
