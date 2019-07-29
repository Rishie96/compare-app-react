import React, { Component } from 'react'

export default class ComparisonTable extends Component {

    renderTable = () => {
        let fruits = this.props.fruits;

        if(fruits.length <= 1) return;
        
        return (
            <table cellSpacing="0" >
                <tbody>
                    <tr className="legend-1">
                        <td></td>
                        {fruits.map(item => {
                            return (
                                <td key={item.name}>{item.name} [<span onClick={() => this.props.onRemove(item)} className="remove">-</span>]</td>
                            )
                        })}
                    </tr>
                    <tr>
                        <td className="legend-2">PRICE</td>
                        {fruits.map(item => {
                            return (
                                <td key={item.name} className="legend-3">{`\u20b9${item.price}`}</td>
                            )
                        })}
                    </tr>
                    <tr>
                        <td className="legend-2">COLORS</td>
                        {fruits.map(item => {
                            return (
                                <td key={Math.round(Math.random()*99999)} className="legend-3">{item.colors.map(value => {
                                    return <span key={Math.round(Math.random()*99999)} style={{backgroundColor: value, borderRadius: '24px'}}>&nbsp;&nbsp;</span>
                                })}</td>
                            )
                        })}
                    </tr>
                    <tr>
                        <td className="legend-2">CONDITION </td>
                        {fruits.map(item => {
                            return (
                                <td key={item.name} style={{backgroundColor: item.condition==='Fresh'? '#4caf50': '#f44336'}}>{item.condition}</td>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
        )

    }

    render() {
        return (
            <div className="comparison-table">
                {this.renderTable()}
            </div>
        )
    }
}
