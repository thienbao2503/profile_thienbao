
function Company() {
    return (
        <div className="bg-fixed bg-no-repeat bg-cover bg-center relative bg-black text-white shadow-lg px-8 py-40 flex flex-col md:flex-row items-center md:items-center gap-8 overflow-hidden" style={{ backgroundImage: "url('./images//bgIdea.webp')" }}>
            {/* Hình minh họa công ty (có thể thay bằng logo hoặc hình ảnh công ty) */}
            <div className="flex-1 flex justify-center items-center">
                <img
                    src="./images//logo2.png"
                    alt="Company Illustration"
                    className=" w-60 h-60 object-contain bg-white rounded-full"
                />
            </div>
            {/* Thông tin công ty */}
            <div className="flex-1 flex flex-col gap-4">
                <h2 className="text-3xl font-bold text-orange-400 mb-2">OPTECH</h2>
                <p className="text-lg text-gray-200">
                    OPTECH cung cấp các giải pháp công nghệ cho các doanh nghiệp tập đoàn, tổng công ty, ngân hàng, trường đại học, bệnh viện, các giải pháp kết nối cộng đồng trên nền tảng internet, các hệ thống website và các dịch vụ liên quan tới website, các hệ thống trong lĩnh vực thương mại điện tử Việt Nam.
                </p>
                <ul className="mt-4 space-y-2">
                    <li>
                        <span className="font-semibold text-orange-300">Lĩnh vực:</span> Phát triển phần mềm, Website, Mobile App
                    </li>
                    <li>
                        <span className="font-semibold text-orange-300">Địa chỉ:</span> 123 Đường Công Nghệ, Quận 1, TP.HCM
                    </li>
                </ul>

            </div>
            {/* Hiệu ứng nền */}
            {/* <div className="absolute inset-0 pointer-events-none">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-orange-900/40 to-transparent rounded-l-full blur-2xl"></div>
                <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-t from-orange-700/30 to-transparent rounded-tr-full blur-2xl"></div>
            </div> */}
        </div>
    );
}

export default Company;