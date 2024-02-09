import { Link } from 'react-router-dom';
import '../../Styles/css/BlogCard.css';

export default function BlogCard() {
    return (
        <div className="container blog-card-container">
            <div className='blog-card'>
                <div className="card-bg" >
                    <div className='card-tag'>
                        <span>Uncategorizes</span>
                    </div>
                </div>
                <div className='card-footer'>
                    <Link className='post-title'>Post exemple</Link>
                    <Link className='more-details'>Leer Más</Link>
                </div>
                <div className='spliter'></div>
                <div className='post-date'>
                    <p className='no-hover'>January 10, 2024 - No Comments</p>
                </div>
            </div>

        </div>
    );
}