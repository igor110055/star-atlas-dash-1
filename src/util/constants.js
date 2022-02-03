export const assets = {
    images: {
        'thumb-220': {
            'CALCH.jpg': true,
            'CALEV.jpg': true,
            'CALG.jpg': true,
            'CHI.jpg': true,
            'FBLBAIR.jpeg': true,
            'FBLBEA.jpg': true,
            'FBLBPL.jpg': true,
            'FBLEBO.jpg': true,
            'FBLEGR.jpg': true,
            'FBLETR.jpg': true,
            'OGKAJA.jpg': true,
            'OGKATP.jpg': true,
            'OM.jpg': true,
            'OPALJ.jpg': true,
            'OPALJJ.jpg': true,
            'PC11.jpg': true,
            'PC9.jpg': true,
            'PF4.jpg': true,
            'PR8.jpg': true,
            'PX4.jpg': true,
            'PX5.jpg': true,
            'PX6.jpg': true,
            'TUFAFE.jpg': true,
            'VZUSAM.jpg': true,
            'VZUSOP.jpg': true
        },
        'med-720': {
            'CALCH.jpg': true,
            'CALEV.jpg': true,
            'CALG.jpg': true,
            'CHI.jpg': true,
            'FBLBAIR.jpeg': true,
            'FBLBEA.jpg': true,
            'FBLBPL.jpg': true,
            'FBLEBO.jpg': true,
            'FBLEGR.jpg': true,
            'FBLETR.jpg': true,
            'OGKAJA.jpg': true,
            'OGKATP.jpg': true,
            'OM.jpg': true,
            'OPALJ.jpg': true,
            'OPALJJ.jpg': true,
            'PC11.jpg': true,
            'PC9.jpg': true,
            'PF4.jpg': true,
            'PR8.jpg': true,
            'PX4.jpg': true,
            'PX5.jpg': true,
            'PX6.jpg': true,
            'TUFAFE.jpg': true,
            'VZUSAM.jpg': true,
            'VZUSOP.jpg': true
        }
    }
};

export const ASCEND = 'ASCEND';
export const DESCEND = 'DESCEND';

export const CUSTOM_SORTS = {
   'rarity': {
        'common': 1,
        'uncommon': 2,
        'rare': 3,
        'epic': 4,
        'legendary': 5,
        'anomaly': 6
    },
    'size': {
        'xx-small': 1,
        'x-small': 2,
        'small': 3,
        'medium': 4,
        'large': 5,
        'capital': 6,
        'commander': 7,
        'titan': 8
    }
};
CUSTOM_SORTS['shipClass'] = CUSTOM_SORTS['size'];

window.process = {
    env: {
        NODE_ENV: 'production'
    }
}
