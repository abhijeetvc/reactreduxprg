
import {connect} from 'react-redux'
import {reduceCounter} from './action'
import {bindActionCreators} from 'redux'

function ReduceCounter(props){

    return(
        <div>
            <button type="button" onClick={
                (e)=>props.dispatch(reduceCounter())
            }>Reduce</button>
        </div>
    )

}

function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(reduceCounter,dispatch)
    }
}

export default connect(mapDispatchToProps)(ReduceCounter)