import Header from "../Elements/Header";
import '../../Styles/css/Blog.css';
import PageFooter from "../Elements/PageFooter";
import BlogCard from "../Elements/BlogCard";

export default function Blog() {
    return (
        <>
            <div className="container">
                <Header />
            </div>
            <div className="main-banner cover-img cover-img-full">
                <h1>Artigos Y Novidades</h1>
            </div>
            <div className="container cover-img-container">
                <div className="main-banner cover-img">
                    <h1>Artigos Y Novidades</h1>
                </div>
            </div>
            <div className="blog-container">
                    <div className="card-area">
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>
            <PageFooter />
        </>
    );
}