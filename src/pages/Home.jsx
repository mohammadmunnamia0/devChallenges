import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="font-extrabold text-6xl">
              Welcome To <span className="text-red-600">devChallenges</span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div>
              <NavLink to="/blog">
                {" "}
                <button className="btn border-red-600">Read Blogs</button>
              </NavLink>
              <NavLink to="/bookmarks">
                {" "}
                <button className="btn border-red-600">Bookmarks</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
