import React, { Component } from 'react';
import Fruitsdata from './info';

export default class Fruits extends Component {

    renderFruits() {
        return Fruitsdata().map((item) => {
            return (
                <div className="fruit" key={item.name}>
                    <img src={item.image} alt={item.name} />
                    <span className="name">{item.name}</span>
                    <span className="price">{`\u20b9${item.price}`}</span>
                    <p>{item.description}
                        <button onClick={() => this.props.onClick(item)} className="compare-btn">+</button>
                    </p>                    
                </div>
            )
        })
    }

    render() {
        return (
            <div className="fruits-container">
                {this.renderFruits()}
            </div>
        )
    }
}
