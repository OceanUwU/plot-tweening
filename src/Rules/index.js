import React from 'react';
import { IconButton } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import RulesDialog from './RulesDialog';

const ShowRulesIcon = HelpIcon;

function showRules() {
    RulesDialog.openRules();
}

function ShowRulesButton() {
    return <IconButton onClick={showRules}><ShowRulesIcon /></IconButton>;
}

export default {
    ShowRulesIcon,
    ShowRulesButton,
    showRules
};