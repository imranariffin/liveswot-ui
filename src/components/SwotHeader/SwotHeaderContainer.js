import {connect} from 'react-redux';
import getSwotIdFromUrl from '../../selectors/url/getSwotIdFromUrl';
import getSwot from '../../selectors/swots/getSwot';
import getSwotCreator from '../../selectors/swots/getSwotCreator';

export default connect(
  (state, ownProps) => {
    const swotId = getSwotIdFromUrl(ownProps);
    const swot = getSwot(state, swotId);
    const creator = getSwotCreator(state, swotId);

    return {
      creator: creator || {username: ''},
      title: swot.title || '',
      description: swot.description || '',
      swotDateCreated: (
        swot.createdAt && `${swot.createdAt.substring(0, 10)} ${swot.createdAt.substring(11, 16)}`
      ) || '',
    };
  },
  () => ({}),
);
