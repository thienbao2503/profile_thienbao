import { FaBitbucket, FaBootstrap, FaCss3Alt, FaDatabase, FaGitSquare, FaHtml5, FaJs, FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiTailwindcss } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function Skill() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className=" relative z-1">
            <section className="p-20 mx-auto w-[1200px] ">
                <h2 className="!text-3xl font-bold text-center mb-20 z-10">Kỹ Năng Chuyên Môn</h2>
                <div className="grid grid-cols-2 gap-x-[300px] gap-y-0">
                    <div className="bg-white rounded-[30px] flex flex-col p-2" data-aos="fade-up">
                        <img src={'/images/pin.png'} className="mx-auto mb-4" width={20} height={20} alt="" />
                        <div className="bg-[#fef0E9] rounded-[26px] p-4 gap-4 flex flex-col">
                            <h2 className="text-[#e28a36] text-xl font-semibold">2021</h2>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="flex justify-center flex-col items-center">
                                    <FaHtml5 className="text-orange-500 text-[50px] text-center" />
                                    <p>HTML5</p>
                                </div>
                                <div className="flex justify-center flex-col items-center">
                                    <FaCss3Alt className="text-blue-500 text-[50px] text-center" />
                                    <p>CSS3</p>
                                </div>
                                <div className="flex justify-center flex-col items-center">
                                    <FaBootstrap className="text-purple-500 text-[50px] text-center" />
                                    <p>Bootstrap</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div className="bg-white rounded-[30px] flex flex-col p-2" data-aos="fade-up">
                        <img src={'/images/pin.png'} className="mx-auto mb-4" width={20} height={20} alt="" />
                        <div className="bg-[#e2e9ff] rounded-[26px] p-4 gap-4 flex flex-col">
                            <h2 className="text-[#6d7994] text-xl font-semibold">2022</h2>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="flex justify-center flex-col items-center">
                                    <SiTailwindcss className="text-cyan-400 text-[50px] text-center" />
                                    <p>Tailwind</p>
                                </div>
                                <div className="flex justify-center flex-col items-center">
                                    <FaJs className="text-yellow-500 text-[50px] text-center" />
                                    <p>JavaScript</p>
                                </div>
                                <div className="flex justify-center flex-col items-center">
                                    <FaVuejs className="text-green-500 text-[50px] text-center" />
                                    <p>Vue.js</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div className="bg-white rounded-[30px] flex flex-col p-2" data-aos="fade-up">
                        <img src={'/images/pin.png'} className="mx-auto mb-4" width={20} height={20} alt="" />
                        <div className="bg-[#f5e6ff] rounded-[26px] p-4 gap-4 flex flex-col">
                            <h2 className="text-[#60396b] text-xl font-semibold">03 2023</h2>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="flex justify-center flex-col items-center">
                                    <FaNodeJs className="text-green-600 text-[50px] text-center" />
                                    <p>Node.js</p>
                                </div>
                                <div className="flex justify-center flex-col items-center">
                                    <FaReact className="text-blue-600 text-[50px] text-center" />
                                    <p>React.js</p>
                                </div>
                                <div className="flex justify-center flex-col items-center">
                                    <SiRedux className="text-purple-600 text-[50px] text-center" />
                                    <p>Redux</p>
                                </div>
                                <div className="flex justify-center flex-col items-center">
                                    <FaGitSquare className="text-orange-600 text-[50px] text-center" />
                                    <p>Git</p>
                                </div>
                                <div className="flex justify-center flex-col items-center">
                                    <FaBitbucket className="text-blue-500 text-[50px] text-center" />
                                    <p>Bitbucket</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div className="bg-white rounded-[30px] flex flex-col p-2" data-aos="fade-up">
                        <img src={'/images/pin.png'} className="mx-auto mb-4" width={20} height={20} alt="" />
                        <div className="bg-[#fef0E9] rounded-[26px] p-4 gap-4 flex flex-col">
                            <h2 className="text-[#e28a36] text-xl font-semibold">09 2023</h2>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="flex justify-center flex-col items-center">
                                    <FaReact className="text-blue-600 text-[50px] text-center" />
                                    <p>React Native</p>
                                </div>
                                <div className="flex justify-center flex-col items-center">
                                    <FaNodeJs className="text-green-600 text-[50px] text-center" />
                                    <p>Express.js</p>
                                </div>
                                <div className="flex justify-center flex-col items-center">
                                    <FaDatabase className="text-purple-600 text-[50px] text-center" />
                                    <p>MySQL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div className="bg-white rounded-[30px] flex flex-col p-2" data-aos="fade-up">
                        <img src={'/images/pin.png'} className="mx-auto mb-4" width={20} height={20} alt="" />
                        <div className="bg-[#e2e9ff] rounded-[26px] p-4 gap-4 flex flex-col">
                            <h2 className="text-[#6d7994] text-xl font-semibold">02 2024</h2>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="flex justify-center flex-col items-center">
                                    <SiNextdotjs className="text-black text-[50px] text-center" />
                                    <p>Next.js</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    );
}

export default Skill;