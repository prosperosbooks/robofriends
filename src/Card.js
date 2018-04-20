import React from "react";

const Card = ({ name, email, id }) => {
    // const { name, email, id } = props;
    // or put { name, email, id } into the props argument
    // use ES6 destructuring so that you don't have to write out props.xyz
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow">
            {/* inline css attributes imported from tachyons */}
            <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
