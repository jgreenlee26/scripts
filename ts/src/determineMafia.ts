import * as data from './data/mafiaRoles.json';

interface IMafiaRoleTypes {
    town: IMafiaRole[];
    thirdparty: IMafiaRole[];
    mafia: IMafiaRole[];
}

interface IMafiaRole {
    value: string;
    weight: number;
}

function determineMafia (players: number, townCnt: number, tpCnt: number, mafiaCnt: number) {
    const mafiaRoles: IMafiaRoleTypes = data;
    const playerTypes: any = {
        'town': townCnt, 
        'thirdparty': tpCnt, 
        'mafia': mafiaCnt
    };
    let selectedRoles: string[] = [];
    for (const t in playerTypes) {
        const cnt: number = playerTypes[t]
        let roles = 
            t == 'town' ? mafiaRoles.town 
            : t == 'thirdparty' ? mafiaRoles.thirdparty 
            : mafiaRoles.mafia;
        
        // make sure the weights are even first
        roles = updateWeights(roles);

        for (let i = 0; i < cnt; i++) {
            if (roles.length == 0) {
                console.log('No more roles left for ' + t);
                break;
            }
            const selectedRole: string = randomizer(roles);
            selectedRoles.push(selectedRole);
            roles = roles.filter(role => role.value !== selectedRole)
            roles = updateWeights(roles);
        }
    }
    return selectedRoles;
}

const updateWeights = (roles: IMafiaRole[]): IMafiaRole[] => {
    const totalWeight = roles.reduce((acc, role) => acc + role.weight, 0);
    roles.forEach(role => role.weight = role.weight / totalWeight);
    return roles;
}

const randomizer = (values: any[]) => {
    let i, pickedValue,
            randomNr = Math.random(),
            threshold = 0;

    for (i = 0; i < values.length; i++) {
        if (values[i].weight === '*') {
            continue;
        }

        threshold += values[i].weight;
        if (threshold > randomNr) {
                pickedValue = values[i].value;
                break;
        }

        if (!pickedValue) {
            pickedValue = values.filter((value) => value.weight === '*');
        }
    }

    return pickedValue;
}

const players = 12; // excluding guarantees
const townCnt = 6; // or 8
const tpCnt = 3; // or 4
const mafiaCnt = 3; // or 4

const roles = determineMafia(players, townCnt, tpCnt, mafiaCnt);;
console.log(randomOrder(roles));

function randomOrder(roles: string[]) {
    let i = roles.length;
    while (i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [roles[i], roles[j]] = [roles[j], roles[i]];
    }
    return roles;
}