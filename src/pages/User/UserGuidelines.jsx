import React from "react";
import { Link } from "react-router-dom";
import ckeditor from "react-ckeditor-component/lib/ckeditor";

const UserGuidelines = () => {
    return ( <>
        <div>
            <h1 className="font-bold">User Guidelines</h1>
            <Link to="/">Home</Link>

            <div class="w-full">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Role" />
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            GuideLine
          </label>
          <ckeditor
            activeClass="p10"
            // eslint-disable-next-line no-undef
            // content={notification}
          />
        </div> 
      <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        post
      </button>
      </form>
    </div>

            
        </div> </>
    );
}


export default UserGuidelines;