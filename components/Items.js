import React, { Component} from 'react'
class Items extends Component {
    state = { 
        name: "",
        id: '',
        activePage: 1     
    }

    onChangeInput = (e) => {
        console.log(e.target.value)
        this.setState({
            name:e.target.value,
        })
    }

    handleAdd = () => {
        console.log("Click me")
        this.props.addNewItem({ name: this.state.name })
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            //call api from container
            this.props.addNewItem({
                name:this.state.name
            })
        }
    }
    render() {
        let listData = []
        if (this.props.items) {
            listData = this.props.items.map((item,key) => {   
                return ( 
                    <tr key={key}>
                        <th>{item.id}</th>
                        <th>{item.name}</th>
                    </tr>
                )
            })
        }
        return (
            <div>
                <div>
                    input Add new:<input onChange={ (e) =>
                    this.onChangeInput(e) }
                        value={this.state.name}
                        onKeyPress={this.handleKeyPress}
                    />
                    <button onClick={ () => this.handleAdd() }>Add New</button>
                   
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>ID cua du lieu</th>
                            <th>Ten cua du lieu</th>
                        </tr>
                        {listData}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Items;