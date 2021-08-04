import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'light',

        background: {
            default: '#bfffd0',
        },

        primary: {
            main: '#d49a3d',
        },
    },

    overrides: {
        MuiButton: {
            textPrimary: {
                background: 'linear-gradient(45deg, #ffe600 0%, #249c09 100%)',
                borderRadius: 3,
                border: 0,
                color: 'white !important',
                padding: '0 30px',
                boxShadow: '0 3px 5px 2px #92C1054D',
            },

            textSecondary: {
                background: 'linear-gradient(45deg, #ff9900 0%, #ff9eff 100%)',
                borderRadius: 3,
                border: 0,
                color: 'white !important',
                padding: '0 30px',
                boxShadow: '0 3px 5px 2px #FF9C804D',
            }
        },
    },
});

export default theme;