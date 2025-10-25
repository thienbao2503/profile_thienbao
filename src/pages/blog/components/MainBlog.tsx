import { useParams, Link } from "react-router-dom";
import { dataBlog } from "../../../content";

export default function BlogDetail() {
    const { slug } = useParams();
    const post = dataBlog.find((item) => item.slug === slug);

    if (!post) {
        return <div className="text-center py-20 text-gray-500">Không tìm thấy bài viết 😢</div>;
    }

    const sidePosts = dataBlog.filter((item) => item.slug !== slug);

    return (
        <div className="grid grid-cols-12 gap-6 max-w-[1200px] mx-auto py-10">
            {/* Nội dung chính */}
            <div className="col-span-8">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover rounded-xl mb-5"
                />
                <h1 className="text-3xl font-bold mb-3">{post.title}</h1>
                <p className="text-gray-500 mb-6">{post.description}</p>
                <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
                <p className="mt-6 text-sm text-gray-400">🗓 {post.date}</p>
            </div>

            {/* Sidebar */}
            <div className="col-span-4 space-y-4">
                <h2 className="text-xl font-semibold mb-2">Bài viết khác</h2>
                {sidePosts.map((side) => (
                    <Link
                        key={side.id}
                        to={`/blog/${side.slug}`}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition"
                    >
                        <img
                            src={side.image}
                            alt={side.title}
                            className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-base font-medium line-clamp-1">{side.title}</h3>
                            <p className="text-xs text-gray-500 line-clamp-2">{side.description}</p>
                            <p className="text-xs text-gray-500 text-end">{side.date}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
