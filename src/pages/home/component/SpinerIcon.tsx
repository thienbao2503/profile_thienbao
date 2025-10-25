import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaVuejs } from 'react-icons/fa';
import { SiNextdotjs, SiMysql, SiTailwindcss, SiRedux } from 'react-icons/si';

const icons = [
    { icon: <FaHtml5 className="text-orange-500 text-[100px]" />, label: 'HTML5' },
    { icon: <FaCss3Alt className="text-blue-500 text-[100px]" />, label: 'CSS3' },
    { icon: <FaJs className="text-yellow-500 text-[100px]" />, label: 'JavaScript' },
    { icon: <FaReact className="text-cyan-500 text-[100px]" />, label: 'React' },
    { icon: <FaVuejs className="text-green-500 text-[100px]" />, label: 'Vue.js' },
    { icon: <SiNextdotjs className="text-black text-[100px]" />, label: 'Next.js' },
    { icon: <FaReact className="text-blue-400 text-[100px]" />, label: 'React Native' },
    { icon: <FaNodeJs className="text-green-600 text-[100px]" />, label: 'Node.js' },
    { icon: <SiMysql className="text-blue-600 text-[100px]" />, label: 'MySQL' },
    { icon: <SiTailwindcss className="text-cyan-400 text-[100px]" />, label: 'Tailwind CSS' },
    { icon: <SiRedux className="text-purple-500 text-[100px]" />, label: 'Redux' },
];

function SpinnerIcon() {
    return (
        <motion.div
            className="w-full h-full  rounded-full flex items-center justify-center"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
            {icons.map((item, index) => (
                <motion.div
                    key={index}
                    className="absolute flex flex-col items-center gap-2"
                    style={{
                        transform: `rotate(${index * (360 / icons.length)}deg) translate(350px) rotateZ(125deg)`,
                    }}
                >
                    {item.icon}
                    <p className='text-4xl family-Pacifico font-extrabold text-white'>
                        {item.label}
                    </p>
                </motion.div>
            ))}
        </motion.div>
    );
}

export default SpinnerIcon;