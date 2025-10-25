import { FaFacebook, FaGithub, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import SpinnerIcon from "./SpinerIcon";

function Banner() {
    const tinhSoNgay = (ngayBatDau: string) => {
        const start = new Date(ngayBatDau);
        const today = new Date();

        // Tính số mili giây giữa 2 ngày
        const difference = today.getTime() - start.getTime();

        // Chuyển đổi mili giây thành số ngày
        const soNgay = Math.floor(difference / (1000 * 60 * 60 * 24));

        return soNgay;
    }

    const layThoiGianHienTai = () => {
        const now = new Date();
        const thu = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
        const ngay = now.getDate();
        const thang = now.getMonth() + 1;
        const nam = now.getFullYear();
        const gio = now.getHours().toString().padStart(2, '0');
        const phut = now.getMinutes().toString().padStart(2, '0');

        return `${thu[now.getDay()]}, ${ngay}/${thang}/${nam} ${gio}:${phut}`;
    }
    return (
        <section className="profile h-screen p-5 flex gap-5 relative ">
            <div className="bg-profile w-full h-full absolute top-0 -z-1 left-0">
                <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                >
                    <source src="./images//bg-video.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="z-1 box-left w-40 flex flex-col h-full gap-5">
                <div className="rounded-full box-glass w-full h-40 relative flex justify-center items-center">
                    <img width={20} height={20} src="./images//fire.gif" className="absolute w-[150%] h-[150%] -top-28" alt="" />
                    <p className="mt-10 family-Pacifico text-[#fd9e11]">{tinhSoNgay('2023-03-13')}</p>
                </div>
                <div className="w-full flex-1 box-glass rounded-full z-1 p-5" >
                    <img className="w-full aspect-square rounded-full" width={200} height={200} src="./images//avatar.jpg" alt="" />
                    <div className="w-full">
                        <ul className="w-full flex flex-col items-center py-10 gap-10">
                            <li>
                                <Link to="/">
                                    <i className="text-2xl text-white hover:text-[#fd9e11] fi fi-rr-skill"></i>
                                    {/* Kỹ năng */}
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="text-2xl text-white hover:text-[#fd9e11] fi fi-rr-corporate"></i>
                                    {/* Thông tin công ty */}
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="text-2xl text-white hover:text-[#fd9e11] fi fi-rr-master-plan"></i>
                                    {/* Dự án nổi bật */}
                                </Link>
                            </li>
                        </ul>
                        <div className="w-full h-[1px] bg-gray-50"></div>
                        <ul className="w-full flex flex-col items-center py-10 gap-10">
                            <li>
                                <Link to="/">
                                    <FaFacebook className="text-2xl text-white hover:text-[#fd9e11]" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <FaTiktok className="text-2xl text-white hover:text-[#fd9e11]" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <FaGithub className="text-2xl text-white hover:text-[#fd9e11]" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="z-1 box relative overflow-hidden">
                <div className="bg-box absolute top-0 left-0">
                    <video
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                    >
                        <source src="./images//bg-video.mp4" type="video/mp4" />
                    </video>
                </div>

                <div
                    className="box-top box-glass absolute w-[22.5%] h-[6%] top-0 left-[50%] -translate-x-1/2 rounded-[30px] flex items-center justify-center" >
                    <p className="text-white font-medium text-xl">{layThoiGianHienTai()}</p>
                </div>

                <div className="box-top-left absolute top-5 left-[8%] flex justify-center gap-3 items-center w-[20%] h-[6%] bg-white rounded-full" data-aos="fade-right">
                    <i className="fi fi-rr-hand-wave"></i> <p>Chào mừng đến profile!</p>
                </div>
                <div className="box-top-right absolute top-20 right-[8%] flex  justify-center gap-10 items-center h-[6%]" data-aos="fade-left">
                    <i className="fi fi-rr-display-code text-white !text-5xl"></i>
                    <div className="flex flex-col ">
                        <p className="family-Pacifico font-extrabold text-white !text-5xl">Front-End</p>
                        <p className="family-Pacifico font-extrabold text-white !text-5xl">Developers</p>
                    </div>
                </div>
                <div className="box-left-center absolute top-[20%] left-[8%] flex flex-col gap-2" data-aos="fade-right">
                    <p className="family-Pacifico font-extrabold text-white !text-[52px]">Lại Nguyễn</p>
                    <p className=" ml-20 family-Pacifico font-extrabold text-white !text-[52px]">Thiên Bảo</p>
                </div>

                <div className="box-bottom-right  absolute bottom-0 right-0 w-[900px] h-[900px" >
                    <SpinnerIcon />
                </div>


                <div className="box-botom-left h-[41.5%] w-[28.5%] box-glass absolute bottom-0 left-0 rounded-[30px] p-6" data-aos="fade-up">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between">
                            <h3 className="text-white text-2xl font-semibold mb-2">Về tôi</h3>
                            <i className="fi fi-rr-thumbtack text-xl text-white"></i>
                        </div>
                        <p className="text-white text-xl leading-relaxed">
                            Tôi là một lập trình viên đam mê thiết kế giao diện với những hiệu ứng tương tác bắt mắt. Ngoài công việc, tôi thích chơi bóng đá, bóng chuyền, chụp ảnh và đàn guitar trong thời gian rảnh.
                        </p>
                    </div>
                </div>
            </div>
            <div className="z-1 box-right w-40 flex flex-col gap-5 h-full ">
                <div className="flex-1 z-10 rounded-[30px] flex flex-col justify-center items-center box-glass">
                    <p className="text-white font-extrabold family-Pacifico text-3xl">Web</p>
                    <p className="text-white font-extrabold family-Pacifico text-3xl">Developer</p>
                </div>
                <div className="flex-1 z-10 rounded-[30px] flex flex-col justify-center items-center box-glass">
                    <p className="text-white font-extrabold family-Pacifico text-3xl">Mobile</p>
                    <p className="!text-white font-extrabold family-Pacifico text-3xl">Developer</p>
                </div>

            </div>
        </section >
    );
}

export default Banner;