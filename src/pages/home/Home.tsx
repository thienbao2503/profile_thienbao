import {
    Banner, Company,
    Projects,
    Skill
} from "./component";
import Blogs from "./component/Blogs";

function HomePage() {
    return (
        <div className="main bg-slate-100">
            <Banner />
            <Skill />
            <Projects />
            <Blogs />
            {/* <Company /> */}
            {/* <Maps /> */}

        </div>
    );
}

export default HomePage;

