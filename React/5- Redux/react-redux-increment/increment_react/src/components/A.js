import React, { Component } from 'react';
import { connect } from 'react-redux';

class A extends Component {
    render() {
        return (
            <div>
                A, x = {this.props.x}
                <button onClick={this.props.incrementX}>Increment X</button>
            </div>
        )
    }
}

// redux specific mappers
const mapStateToProps = (state) => ({
    x: state.x
});

const mapDispatchToProps = (dispatch) => ({
    incrementX: () => dispatch({type: 'INCREMENT_X'})
});

// export
// export default A;
export default connect(mapStateToProps, mapDispatchToProps)(A);