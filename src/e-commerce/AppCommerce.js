import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Redirect,
    Route,
    Switch,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch,
} from "react-router-dom";

//buku agama dan spiritual
import seikhlas_langit from "./img/seikhlas-langit.jpg";
import kiai_ujang_di_negeri_kanguru from "./img/kiai-ujang-di-negeri-kanguru.jpg";

//buku anak
import david_bekam from "./img/serial-triple-e-david-bekam.jpg";
import anak_anak_tepian_sungai from "./img/anak-anak-tepian-sungai.jpg";

export default function MarketplaceExample() {
    return (
        <Router>
            <nav className="navbar navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Mizanstore
                    </Link>
                    {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">
                                    Shop
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <AuthButton />
                        </form>
                    </div>
                </div>
            </nav>
            <div>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <ShopRoute path="/shop">
                        <ShopPage />
                    </ShopRoute>
                </Switch>
                <footer className="page-footer font-small blue"></footer>
            </div>
        </Router>
    );
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    },
};

function AuthButton() {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    return fakeAuth.isAuthenticated ? (
        <button
            className="btn btn-light"
            onClick={() => {
                fakeAuth.signout(() => history.push(from));
            }}
        >
            Log out
        </button>
    ) : (
        <span className="text-light">You are not logged in.</span>
    );
}

function ShopRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                fakeAuth.isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

function HomePage() {
    return (
        <div className="container-fluid">
            <h3 className="my-3">This is the home page</h3>
            <Link className="nav-link" to="/shop">
                <button className="btn btn-dark">Go to shop</button>
            </Link>
        </div>
    );
}

function AboutPage() {
    return (
        <div className="container-fluid">
            <h3 className="mt-3">
                Mizanstore.com adalah toko buku online terpercaya yang menyediakan pilihan buku terbaru, terbaik, dan terlengkap dari semua penerbit di Indonesia.
            </h3>
            <h5 className="my-3">Original browser from here ⬇</h5>
            <a href="https://mizanstore.com/">mizanstore.com</a>
        </div>
    );
}

function ShopPage() {
    return (
        <Router>
            <div className="container">
                <h2 className="my-3">Welcome!</h2>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/agama-dan-spiritual">Agama dan Spiritualitas</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/buku-anak">Buku Anak</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/agama-dan-spiritual">
                        <AgamadanSpiritual />
                    </Route>
                    <Route path="/buku-anak">
                        <BukuAnak />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function LoginPage() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
    };
    return (
        <div className="container-fluid">
            <h3 className="my-3">
                You must log in to view the page at {from.pathname}
            </h3>
            <button className="btn btn-dark" onClick={login}>
                Log in
            </button>
        </div>
    );
}

function AgamadanSpiritual() {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <h2 className="my-3">Agama dan Spiritual</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <Link
                            className="col-sm column productbox"
                            to={`${url}/KIAI UJANG DI NEGERI KANGURU, Rp84.000`} //nama product
                        >
                            <div className="card-body text-center">
                                <img
                                    src={kiai_ujang_di_negeri_kanguru}
                                    alt="kiai-ujang-di-negeri-kanguru"
                                    className="productimg mb-4"
                                />
                                <h5 className="card-title">KIAI UJANG DI NEGERI KANGURU</h5>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <Link
                            className="col-sm column productbox"
                            to={`${url}/SEIKHLAS LANGIT, Rp79.000`}
                        >
                            <div className="card-body text-center">
                                <img
                                    src={seikhlas_langit}
                                    alt="seikhlas langit"
                                    className="productimg mb-4"
                                />
                                <h5 className="card-title">SEIKHLAS LANGIT</h5>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path={path}>
                    <h4 className="text-center my-3">
                        Choose a Books image for details and prices!
                    </h4>
                </Route>
                <Route path={`${path}/:productId`}>
                    <DetailBukuAgama />
                </Route>
            </Switch>
        </div>
    );
}

function DetailBukuAgama() {
    let { productId } = useParams();
    return (
        <div>
            <h4 className="text-center my-3">{productId}</h4>
        </div>
    );
}

function BukuAnak() {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <h2 className="my-3">Buku Anak</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <Link
                            className="col-sm column productbox"
                            to={`${url}/SERIAL TRIPLE E: DAVID BEKAM, Rp40.000`}
                        >
                            <div className="card-body text-center">
                                <img
                                    src={david_bekam}
                                    alt="SERIAL TRIPLE E: DAVID BEKAM"
                                    className="productimg mb-4"
                                />
                                <h5 className="card-title">SERIAL TRIPLE E: DAVID BEKAM</h5>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <Link
                            className="col-sm column productbox"
                            to={`${url}/ANAK-ANAK TEPIAN SUNGAI, Rp35.000`}
                        >
                            <div className="card-body text-center">
                                <img
                                    src={anak_anak_tepian_sungai}
                                    alt="ANAK-ANAK TEPIAN SUNGAI"
                                    className="productimg mb-4"
                                />
                                <h5 className="card-title">ANAK-ANAK TEPIAN SUNGAI</h5>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path={path}>
                    <h4 className="text-center my-3">
                        Choose a Books image for details and prices!
                    </h4>
                </Route>
                <Route path={`${path}/:productId`}>
                    <DetailBukuAnak />
                </Route>
            </Switch>
        </div>
    );
}

function DetailBukuAnak() {
    let { productId } = useParams();
    return (
        <div>
            <h4 className="text-center my-3">{productId}</h4>
        </div>
    );
}
