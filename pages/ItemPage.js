import React, { Component } from 'react'
import ItemContainer from '../containers/ItemPageContainer'
class ItemPage extends Component {
    render() {
        return (
            <div className="ItemPage">
                <h1>Trang Item</h1>
                <ItemContainer />
            </div>
        );
    }
}
export default ItemPage;