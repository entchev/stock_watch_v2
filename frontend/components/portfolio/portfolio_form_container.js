import { connect } from 'react-redux';
import { createPortfolioItem } from '../../actions/portfolio_actions';
import PortfolioForm from './portfolio_form';

const mapStateToProps = (state) => {
  return {
    state,
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  createPortfolioItem: item => dispatch(createPortfolioItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioForm);
