import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
import Global from "./styles/Globals";
import MenuContextProvider from "./components/contexts/contexts";

function App() {
    return (
        <MenuContextProvider>
            <Global />
            <Layout>
                <Header />
                <Main />
                <Footer />
            </Layout>
        </MenuContextProvider>
    );
}

export default App;
