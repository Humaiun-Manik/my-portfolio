import html from '../assets/svg/skills/html.svg'
import css from '../assets/svg/skills/css.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import react from '../assets/svg/skills/react.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import node from '../assets/svg/skills/nodeJS.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import firebase from '../assets/svg/skills/firebase.svg'
import git from '../assets/svg/skills/git.svg'
import materialui from '../assets/svg/skills/materialui.svg'

import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg'
import canva from '../assets/svg/skills/canva.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'tailwind':
            return tailwind;
        case 'firebase':
            return firebase;
        case 'git':
            return git;
        case 'materialui':
            return materialui;
        case 'node':
            return node;
        case 'microsoft office':
            return microsoftoffice;
        case 'canva':
            return canva;
        default:
            break;
    }
}
