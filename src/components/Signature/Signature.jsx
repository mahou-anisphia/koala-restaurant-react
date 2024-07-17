import React from "react";
import "./Signature.css";
const Signature = () => {
  return (
    <>
      <div className="signature h-400 bg-[url('../../src/assets/images/sign-bg.png')] bg-no-repeat bg-cover ">
        <div class="main-content grid grid-cols-3 gap-0">
          {" "}
          <div className="text ml-10 mt-40 border-2 bg-white h-60 p-4">
            <h3>SIGNATURE</h3>
            <h4>By The Coffee House</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum exercitationem hic veniam, error voluptas facere itaque
              <center>
                <button className="border-2 mt-5 w-60 h-10 bg-red-700 rounded-xl ">
                  <p className="text-white">Tim hieu them</p>
                </button>
              </center>
            </p>
          </div>
          <div class="col-span-2">
            <img
              className="h-62 rounded-3xl ml-20 mt-5"
              src="../../src/assets/images/sign-image.jpg"
              alt=""
              width="80%"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signature;
