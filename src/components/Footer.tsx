// import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white px-6 py-6 mt-12">
      <div className="mx-auto container text-gray-600 text-sm flex justify-between">
        <p>© by Peturik 2024</p>

        <span className="text-gray-800">
          {/* <Link to={""}>Dashboard</Link> */}
          <br />
          {/* {session && <SignOut />} */}
        </span>
      </div>
    </footer>
  );
};
