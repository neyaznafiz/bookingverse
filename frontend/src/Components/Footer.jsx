import React from "react";

export const Footer = () => {
  return (
    <div className="width tracking-wide">
      <div className="my-7 uppercase">
        <h1 className="text-2xl font-bold tracking-wide">BOOKINGVERSE</h1>
        <p>Book Your Holiday - Make Life More Easer</p>
      </div>
      <div className="w-full flex justify-between text-primary">
        <ul className="space-y-2">
          <li>Countries</li>
          <li>Regions</li>
          <li>Cities</li>
          <li>Districts</li>
          <li>Airports</li>
          <li>Hotels</li>
        </ul>
        <ul className="space-y-2">
          <li>Homes </li>
          <li>Apartments </li>
          <li>Resorts </li>
          <li>Villas</li>
          <li>Hostels</li>
          <li>Guest houses</li>
        </ul>
        <ul className="space-y-2">
          <li>Unique places to stay </li>
          <li>Reviews</li>
          <li>Unpacked: Travel articles </li>
          <li>Travel communities </li>
          <li>Seasonal and holiday deals </li>
        </ul>
        <ul className="space-y-2">
          <li>Car rental </li>
          <li>Flight Finder</li>
          <li>Restaurant reservations </li>
          <li>Travel Agents </li>
        </ul>
        <ul className="space-y-2">
          <li>Curtomer Service</li>
          <li>Partner Help</li>
          <li>Careers</li>
          <li>Sustainability</li>
          <li>Press center</li>
          <li>Safety Resource Center</li>
          <li>Investor relations</li>
          <li>Terms & conditions</li>
        </ul>
      </div>
      <div className="my-6 ">
        Copyright © {new Date().getFullYear()} BOOKINGVERSE.
      </div>
    </div>
  );
};
