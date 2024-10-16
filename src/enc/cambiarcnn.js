const fs = require('fs');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('bsw2019');

var conf = {
    conexiones: [{
        id: 1,
        select: false,
        nombre: "SDB 1.219/1.231",
        version: "MON-01",
        mysql: {
            crm: {
                ip: "10.25.1.231",
                usuario: "bswcrm_user",
                contrasena: "Entrada2020$",
                baseDatos: "bstntrn",
            },
            cc: {
                ip: "10.25.1.219",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cc2: {
                ip: "0.0.0.0",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cc3: {
                ip: "0.0.0.1",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cc4: {
                ip: "0.0.0.2",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cc5: {
                ip: "0.0.0.3",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cc6: {
                ip: "0.0.0.4",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cc7: {
                ip: "0.0.0.5",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cc8: {
                ip: "0.0.0.6",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cco: {
                ip: "0.0.0.7",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            mde: {
              ip: "10.25.10.144",
              usuario: "bswcrm_user",
              contrasena: "Entrada2020$",
              baseDatos: "inmc",
            },
            hist: {
              ip: "10.25.10.144",
              usuario: "bswcrm_user",
              contrasena: "Entrada2020$",
              baseDatos: "bstntrn",
            }
        }
    },{
        id: 2,
        select: false,
        nombre: "SDB 10.149/10.144",
        version: "MON-02",
        mysql: {
            crm: {
                ip: "10.25.10.144",
                usuario: "bswcrm_user",
                contrasena: "Entrada2020$",
                baseDatos: "bstntrn",
            },
            cc: {
                ip: "10.25.10.149",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cc2: {
                ip: "10.25.10.149",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cc3: {
                ip: "10.25.10.149",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cc4: {
                ip: "10.25.10.149",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cc5: {
                ip: "10.25.10.149",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cc6: {
                ip: "10.25.10.149",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cc7: {
                ip: "10.25.10.149",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cc8: {
                ip: "10.25.10.149",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cco: {
                ip: "10.25.10.149",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            mde: {
              ip: "10.25.10.144",
              usuario: "bswcrm_user",
              contrasena: "Entrada2020$",
              baseDatos: "inmc",
            },
            hist: {
              ip: "10.25.10.144",
              usuario: "bswcrm_user",
              contrasena: "Entrada2020$",
              baseDatos: "bstntrn",
            }
        }
    },{
        id: 3,
        select: false,
        nombre: "LOCAL",
        version: "MON-03",
        mysql: {
            crm: {
                ip: "192.168.100.71",
                usuario: "bswcrm_user",
                contrasena: "Entrada2020$",
                baseDatos: "bstntrn",
            },
            cc: {
                ip: "192.168.100.72",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cc2: {
                ip: "192.168.100.72",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cc3: {
                ip: "192.168.100.72",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cc4: {
                ip: "192.168.100.72",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cc5: {
                ip: "192.168.100.72",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cc6: {
                ip: "192.168.100.72",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cc7: {
                ip: "192.168.100.72",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cc8: {
                ip: "192.168.100.72",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            cco: {
                ip: "192.168.100.72",
                usuario: "bswcc_user",
                contrasena: "Entrada2020$",
                baseDatos: "asteriskcdrdb",
            },
            mde: {
              ip: "192.168.100.71",
              usuario: "bswcrm_user",
              contrasena: "Entrada2020$",
              baseDatos: "inmc",
            },
            hist: {
              ip: "192.168.100.71",
              usuario: "bswcrm_user",
              contrasena: "Entrada2020$",
              baseDatos: "bstntrn",
            }
        }
    }
    
    ]

}


const conexiones = cryptr.encrypt(JSON.stringify(conf));

let cnn = {
    conexiones
};

let data = JSON.stringify(cnn);
fs.writeFileSync('cnn2020.json', data);