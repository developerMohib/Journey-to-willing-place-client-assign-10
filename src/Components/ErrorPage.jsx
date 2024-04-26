
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>Oops...</h1>
            <Link to='/' > <button className='btn btn-block' >Go Home </button> </Link>
        </div>
    );
};

export default ErrorPage;