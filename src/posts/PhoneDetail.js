import React, { Component } from 'react'
import { Link } from "react-router-dom";
import ProductsData from '../data/phones.json'

const PhoneDetail = ({match}) => {
    console.log(match, ProductsData)
    return (
        <section className="section phone-detail">
            <p className="pre">"Look at my brand new...</p>
            {ProductsData.filter(p => p.id == match.params.id).map((postDetail, index) => {
                return <article className="unit-preview" key={postDetail.id}>
                    <Link to="/" className="btn">Home</Link>
                    <h1 className="h1">{postDetail.manufacturer}</h1>
                    <h2 className="h2">{postDetail.name}</h2>

                    <section className="main-info">
                        <section className="specifications">
                            <h3>Specifications:</h3>
                            <ul>
                                <li>{postDetail.color}</li>
                                <li>{postDetail.screen}</li>
                                <li>{postDetail.processor}</li>
                                <li>{postDetail.ram}</li>
                            </ul>
                        </section>
                        <img src={`../img/${postDetail.imageFileName}`} className="image" alt={postDetail.name} />
                    </section>
                    <p>{postDetail.description}</p>
                    <span className="price">
                        <span className="small">Our price:</span>
                            {postDetail.price}
                        </span>
                </article>
            })}
        </section>
    )
}

export default PhoneDetail