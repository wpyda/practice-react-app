import React from 'react'

import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import {setData} from "../../state/asyncActions";

class ReduxAsyncActions extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {
                        this.props.randomUserData ?
                        this.props.randomUserData.name.first
                        :
                        'Nie załadowano imienia'
                    } <br />
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

const exampleData = {
    name: {
        first: "Woj",
        last: "Py"
    }
}

const mapStateToProps = state => ({
    randomUserData: state.asyncActions.randomUserData
})

const mapDispatchToProps = dispatch => ({
    getRandomUserData: () => dispatch(setData(exampleData))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ReduxAsyncActions)