import gg from "../../../assets/bgIdea.webp"
function Banner() {
    return (
        <div className="h-[40vh] w-full flex justify-center items-center bg-fixed" style={{
            backgroundImage: `url(${gg})`
        }}>
            <h1 className="text-white text-5xl font-bold">Blog - Lập trình mạng</h1>
        </div>
    );
}

export default Banner;