import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <h1>Ocorreu um erro!</h1>
            <Link to="/">Voltar pra home</Link>
        </>
    )
}

export default ErrorPage;