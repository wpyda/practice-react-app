import React from 'react'

import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import {fetchData} from '../../state/asyncActions'

class ReduxAsyncActions extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.messageForUser}
                </div>
                <div>
                    {
                        this.props.randomUserData ?
                        this.props.randomUserData.name.first
                        :
                        'Nie załadowano imienia'
                    }
                    <br />
                    {
                        this.props.randomUserData ?
                        this.props.randomUserData.name.last
                        :
                        'Nie załadowano nazwiska'
                    }
                </div>
                <RaisedButton
                    label="Fetch Data"
                    onClick={this.props.getRandomUserData}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    randomUserData: state.asyncActions.randomUserData,
    messageForUser: state.asyncActions.messageForUser
})

const mapDispatchToProps = dispatch => ({
    getRandomUserData: () => dispatch(fetchData())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ReduxAsyncActions)