'use strict';

const initialState = {
    // add stuff here
    hero: 'none',
    status: {
        battleStatus: 'none',
        worldStatus: 'none'
    },
    health: {
        currentHP: 100,
        MaxHp: 150

    },
    Weapons: [
        {
            WeaponName: 'none',
            WeaponDamage: '0',
            WeaponMag: '0',
            WeaponDesc: 'none',

        }
    ],
    

};

const rootReducer = (state = initialState, action) => {
    // do stuff here
    if(action.type === ATTACK){
        return Object.assign({}, state,{
            hero: 'none',
    status: {
        battleStatus: 'none',
        worldStatus: 'none'
    },
    health: {
        currentHP: 20,
        MaxHp: 150

    },
    Weapons: [
        {
            WeaponName: 'none',
            WeaponDamage: '0',
            WeaponMag: '0',
            WeaponDesc: 'none',

        }
    ],
        })
    }

};

export default rootReducer