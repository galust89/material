import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
    toolbarMargin: {...theme.mixins.toolbar, marginBottom: "3em"},
    logo: {height: "7em"},
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    }
}));