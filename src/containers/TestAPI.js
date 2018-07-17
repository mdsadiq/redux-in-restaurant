import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import TestAPI from '../components/TestAPI';
import { reqInitiated, reqSuccess } from '../actions/apiStatus'

function mapStateToProps(store){
  return {
    apiStatus: store.apiStatus
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ reqInitiated, reqSuccess
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TestAPI)