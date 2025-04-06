import Image from "next/image";
import styles from "./page.module.css";
import BlogList from "./component/principale/BlogList";

export default function Home() {
  return (
    <>
      <div className="container pb-5 pt-3">
      <div className="row custom-row">
        {/* <!-- Première colonne (Search Bar) --> */}
        <div className="col-12 col-md-6">
          <div className="d-flex justify-content-center h-100">
            <div className="searchbar bgWhite">
              <div className="row custom-row align-items-center">
                <div className="col-11 pl-5">
                  <input className="search_input text-black" type="text" name="" placeholder="Search..." />
                </div>
                <div className="col-1">
                  <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        {/* <!-- Deuxième colonne (Trier par) --> */}
        <div className="col-12 col-md-6">
          <div className="container">
            <div className="row custom-row align-items-center text-center">
              <div className="col-5">
                <p className="pt-3 lora-font text-white">Trier par :</p>
              </div>
              <div className="col-7">
                <select className="form-select border-dark bgWhite" name="" id="trier">
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BlogList />
    </>
  );
}
