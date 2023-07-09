import React from 'react';

const HeaderBanner = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold tracking-wide my-5 uppercase">
              A lifetime of discount? It's Genius.
            </h1>
            <p className="my-5">
              Get rewarded for your travels - unlock instant saving of 10% or
              more with a free Lamabooking account
            </p>
            <button className="bg-light px-3 py-2">
              Sign In / Register
            </button>
        </div>
    );
};

export default HeaderBanner;