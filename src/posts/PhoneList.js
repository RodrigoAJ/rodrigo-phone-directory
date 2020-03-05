import React, { Component } from 'react'
import { Link } from "react-router-dom";
import ProductsData from '../data/phones.json'

class PhoneList extends Component {
    render() {
        return (
            <>
            <section className="section">
                <h1 className="list-title">Avalaible devices:</h1>
            </section>
            <section className="section phone-list">
                {ProductsData.map((postDetail, index) => {
                    return <article className="unit-preview" key={postDetail.id}>
                            <h1 className="h1">{postDetail.manufacturer}</h1>
                            <h2 className="h2">{postDetail.name}</h2>
                            <img src={`img/${postDetail.imageFileName}`} className="image" alt={postDetail.name} />
                            <Link className="btn" to={`/phonedetail/${postDetail.id}`}>Go for it!</Link>
                    </article>
                })}
            </section>
            </>
        )
    }
}

export default PhoneList