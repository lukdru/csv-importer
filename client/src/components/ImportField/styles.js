
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  div: {
    paddingBottom: '30px'
  },
  p: {
    color: 'white',
    fontFamily: 'urw-dock WebFont',
    fontSize: '2rem',
    paddingBottom: '2rem'
  },
  '& p:hover': {
    scale: (1,1)
  }
}));
