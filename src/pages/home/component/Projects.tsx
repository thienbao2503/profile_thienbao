import { Link } from "react-router-dom";

const projects = [
    {
        key: 'html',
        title_1: 'Xây dựng giao diện Website',
        title_2: 'Biến bản vẽ thành trang web sống động',
        data: [
            {
                title: "CosmoLove",
                desc: "CosmoLove trang mua sắm trực tuyến của thương hiệu thời trang Lama, thời trang nam, nữ, phụ kiện, giúp bạn tiếp cận xu hướng thời trang mới nhất.",
                img: "/images/shop-01.png",
                link: "http://localhost:5501/shop-01/",
            },
            {
                title: "Basic Shop",
                desc: "Chào mừng bạn đến với cửa hàng của chúng tôi. Basic Shop cung cấp cho bạn những mẫu thời trang mới và hot nhất trên thị trường hiện nay. Đến với cửa hàng chúng tôi là lựa chọn tốt nhất chủa bạn.",
                img: "/images/shop-02.png",
                link: "http://localhost:5501/shop-02/",
            },
            {
                title: "Instyle Fashion",
                desc: "Instyle Fashion trang mua sắm trực tuyến của thương hiệu thời trang Lama, thời trang nam, nữ, phụ kiện, giúp bạn tiếp cận xu hướng thời trang mới nhất.",
                img: "/images/shop-03.png",
                link: "http://localhost:5501/shop-03/",
            },
        ]
    },
    {
        key: 'reactjs',
        title_1: "Xây dựng hệ thống quản lý cho doanh nghiệp",
        title_2: "Tối ưu quy trình, nâng cao hiệu suất vận hành",
        data: [
            {
                title: "GPS Xe Máy",
                desc: "Nền tảng Website App giúp người dùng theo dõi vị trí xe máy theo thời gian thực, xem lại lịch sử di chuyển, vận tốc và cảnh báo an toàn. Hỗ trợ tắt máy từ xa và thiết lập hàng rào cảnh báo thông minh.",
                img: "/images/gps.png",
                link: "#",
            },
            {
                title: "CRM Trung Tâm Tiếng Anh",
                desc: "Hệ thống CRM giúp trung tâm tiếng Anh quản lý học viên, giảng viên, lớp học và doanh thu. Tích hợp tính năng chăm sóc học viên, tự động nhắc lịch học và theo dõi tiến độ đào tạo.",
                img: "/images/easy.png",
                link: "#",
            },
            {
                title: "CRM Du Lịch",
                desc: "Hệ thống CRM quản lý khách hàng và booking cho doanh nghiệp du lịch, tập trung vào dịch vụ du thuyền và các gói dịch vụ cao cấp đi kèm. Hỗ trợ theo dõi đơn hàng, thanh toán và chăm sóc khách sau chuyến đi.",
                img: "/images/marmoris.png",
                link: "#",
            },
        ]
    },
    {
        key: 'react_native',
        title_1: "Phát triển ứng dụng di động cho doanh nghiệp",
        title_2: "Tối ưu trải nghiệm người dùng, nâng cao hiệu suất vận hành",
        data: [
            {
                title: "LOVENY",
                desc: "Bạn đang tìm kiếm một ứng dụng giúp bạn và người ấy thêm gắn kết, hiểu nhau hơn và cùng nhau trải nghiệm những khoảnh khắc thú vị? Hãy đến với LOVENY - một ứng dụng tuyệt vời dành cho các cặp đôi với nhiều tính năng hấp dẫn.",
                img: "/images/loveny.jpg",
                link: "#",
            },

        ]
    }

];

export default function ExperienceSection() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto w-[90%] max-w-[1200px]">
                <h2 className="!text-3xl font-bold text-center mb-10 z-10">Kinh nghiệm làm việc</h2>
                {/* Header */}
                {projects.map((item, index) => (

                    <>
                        <div className="flex justify-between items-start mb-12">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-snug">
                                    {item.title_1} <br />
                                    <span className="text-green-600">{item.title_2}</span>
                                </h2>
                            </div>

                            <button className="flex items-center cursor-pointer gap-2 text-sm font-medium text-gray-700 hover:text-green-600 transition">
                                Xem tất cả
                                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 hover:bg-green-100 transition">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-3.5 h-3.5"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {item.data.map((p, i) => (
                                <Link
                                    to={p.link}
                                    target="_blank"
                                    key={i}
                                    className="group relative rounded-lg overflow-hidden border border-gray-200 transition-all duration-500"
                                >
                                    {/* Image */}
                                    <div className="relative w-full h-56 overflow-hidden border-b border-gray-200">
                                        <img
                                            src={p.img}
                                            alt={p.title}
                                            className={`${p.title == "GPS Xe Máy" && "!scale-150"} w-full h-full object-cover transition-transform duration-500 group-hover:scale-110`}
                                        />
                                        {/* <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
                                    </div>

                                    {/* Content */}
                                    <div className="px-4 py-3">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{p.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{p.desc}</p>

                                        <a
                                            href={p.link}
                                            target="_blank"
                                            className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700"
                                        >
                                            Xem chi tiết
                                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 group-hover:bg-green-200 transition">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="2"
                                                    stroke="currentColor"
                                                    className="w-3.5 h-3.5"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>

                                    {/* Overlay Info on Hover */}
                                    {/* <div className="absolute inset-0 flex flex-col justify-end p-6 bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                                <p className="text-sm opacity-90">{p.desc}</p>
                                <a
                                    href={p.link}
                                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-green-300 hover:text-green-400"
                                >
                                    Xem chi tiết
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-3.5 h-3.5"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div> */}
                                </Link>
                            ))}
                        </div>
                    </>
                ))}

            </div>
        </section>
    );
}
