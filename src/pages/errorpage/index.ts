import ErrorPage from './ErrorPage';
import { connect } from 'react-redux';

// import { RootState } from '../../store';
// import { ACTION_INITIALIZE } from 'store/configuration/actions';

const mapStateToProps = () => ({
    // marketId: state.configuration.marketId,
});

const mapDispatchToProps = () => {
    return {
        // onInitialize: (marketId: number, storeId: number, application?: string) =>
        //   dispatch({ type: ACTION_INITIALIZE, payload: { marketId, storeId, application } }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);
