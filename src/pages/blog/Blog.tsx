import { useParams } from "react-router-dom";
import { Banner, MainBlog } from "./components";

function BlogPage() {
    const { slug } = useParams();
    return (
        <div>
            <Banner />
            <MainBlog />
        </div>
    );
}

export default BlogPage;