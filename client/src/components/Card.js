import React from 'react'
import { Link } from "react-router-dom";

export function Card({x}) {
    return (
        <div className="Card">
             <h1>
                                {x.name}
                            </h1>
                            <Link to={`/hero/${x.id}`}>
                    <img
                                style={{ width: "300px" }}
                                src={`${x.thumbnail.path}.${x.thumbnail.extension}`}
                                alt={x.name}

                            />
                        </Link>
        </div>
    )
}
