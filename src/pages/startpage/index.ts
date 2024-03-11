import StartPage from './StartPage';
import { connect } from 'react-redux';

export const CATEGORYS = {
    // TODO
    foru: { cssClass: '4' },
    about: 'ABOUT',
    projects: 'PROJECTS',
    atm: 'ATM'
};
// import { RootState } from '../../store';
// import { ACTION_INITIALIZE } from 'store/configuration/actions';

const mapStateToProps = () => ({
    // marketId: state.configuration.marketId,
    CATEGORYS: CATEGORYS
});


const mapDispatchToProps = () => {
    return {
        // onInitialize: (marketId: number, storeId: number, application?: string) =>
        //   dispatch({ type: ACTION_INITIALIZE, payload: { marketId, storeId, application } }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);

