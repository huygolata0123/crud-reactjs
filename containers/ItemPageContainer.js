import React, { Component } from 'react'
import Items from '../components/Items'
import { connect } from 'react-redux'
import * as actions from '../actions/ItemPageActions'

class ItemPageContainer extends Component {
    componentDidMount() {
        this.props.initLoad(1)
    }
    render() {
        return (
            <div>
                {this.props.isLoading === true
                    ?
                    < img src=" http://gifimage.net/wp-content/uploads/2017/10/brennende-kerze-gif-7.gif" alt="" />
                    :
                    <Items {...this.props} />
                }
            </div>
            
        )  
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items.listItem,
        isLoading: state.items.isFetching, 
        error: state.items.errorMessage,
        activePage: state.items.activePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      initLoad: (activePage) => {
            dispatch(actions.getListItem(activePage))
      },
      addNewItem: (payload) => {
          dispatch(actions.addNewItem(payload))
      } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer)