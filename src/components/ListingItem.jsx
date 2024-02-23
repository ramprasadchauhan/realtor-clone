/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

const ListingItem = ({ listing, id }) => {
  return (
    <li className="bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md mx-4 overflow-hidden transition duration-150">
      <Link className="contents" to={`/category/${listing.type}/${id}`}>
        <img
          className="h-[170px] object-cover  hover:scale-105 transition duration-200 ease-in-out w-full"
          src={listing.imgUrls[0]}
          alt="img"
          loading="lazy"
        />
        <div className="w-full p-[10px]">
          <div className="flex items-center space-x-1">
            <MdLocationOn className="h-4 w-4 text-green-600" />
            <p className="font-semibold text-sm mb-[2px] text-gray-600 truncate">
              {listing.address}
            </p>
          </div>
          <p className="font-semibold mt-2 text-xl m-0 truncate">
            {listing.name}
          </p>
          <p className="text-[#457b9d] mt-2 font-semibold">
            $
            {listing.offer
              ? listing.discountedPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : listing.regularPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="flex items-center mt-[10px] space-x-3">
            <div className="flex items-center space-x-1">
              <p>{listing.badrooms > 1 ? `${listing.badrooms}  Beds` : "1"} </p>
            </div>
            <div>
              <p>
                {listing.bathrooms > 1 ? `${listing.bathrooms}  Bath` : "1"}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ListingItem;
