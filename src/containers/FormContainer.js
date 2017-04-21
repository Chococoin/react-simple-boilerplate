
import { connect } from 'react-redux';
import {
  increment,
  getCounter
} from '../modules/counter';

import Form from '../components/Form';


const mapDispatchToProps = {
  increment: () => increment(1)
};

const mapStateToProps = (state) => {
  return {
    counter: getCounter(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);