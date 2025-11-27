import React from "react";

const Card = (props) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="card p-0 my-3 text-center">
            <div className="ratio ratio-1x1">
            <img src={props.img} className="object-fit-cover" alt="..."/>
            </div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.wiki} className="btn btn-primary">Wikipedia</a>
                </div>
        </div>
        </div>
    )
}
export default Card;