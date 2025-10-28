import { Link } from "react-router-dom";
import { dataBlog } from "../../../content";

function Blogs() {

    return (
        <section className="section-new-post pb-10" id="blog">
            <div className="w-[1200px] mx-auto">
                <div className="box-1">
                    <h2><a aria-label="link-web" href="#">Blog</a></h2>
                </div>
                <div className="box-2">
                    {dataBlog.map((item, index) => (
                        <Link
                            key={index}
                            to={`/profile_thienbao/blog/${item.slug}`}
                            className="item rounded-lg">
                            <div className="header-post">
                                <a aria-label="link-web" href="#">
                                    <img loading="lazy" src={item.image} width="480" height="255" className="h-[190px]"
                                        alt="image-web" />
                                </a>
                                <p>{item.date}</p>
                            </div>
                            <div className="footer-post">
                                <h3><a className="line-clamp-1" href="#">{item.title}</a></h3>
                                <p className="line-clamp-3">{item.description}</p>
                                <div className="wrapper-view-all">
                                    <a aria-label="link-web" href="#">xem thêm</a>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blogs;