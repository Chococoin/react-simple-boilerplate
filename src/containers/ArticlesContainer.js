import { connect } from 'react-redux';
import {
    fetchContributors,
    getContributors,
    contributorsLoaded
} from '../modules/articles';

import Articles from '../components/Articles';


const mapDispatchToProps = {
  hola: () => hola()
};

const mapStateToProps = (state) => {
  return {
    contributors: getContributors(state),
    loaded: contributorsLoaded(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);