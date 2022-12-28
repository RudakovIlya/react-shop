import {Footer} from "./layout/Footer/Footer";
import {Header} from "./layout/Header/Header";
import {Shop} from "./components/Shop/Shop";
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {
    return (
        <>
            <Header/>
            <Provider store={store}>
                <Shop/>
            </Provider>
            <Footer/>
        </>
    );
}

export default App;
