import img from 'img/default_profil.png'

const init = [
  {
    img,
    name: 'Yannick LE DREAU',
    info: 'Président',
    phone: '02 99 23 01 94 / 06 72 07 93 20',
    mail: 'yannick.ledreau@tektronix.com',
  },
  {
    img,
    name: 'Philippe FIAUX',
    info: 'Trésorier',
    phone: '02 99 23 00 37',
    mail: 'philippe.fiaux@orange.fr',
  },
  {
    img,
    name: 'Gwenaël ECHE',
    phone: '02 99 80 03 23',
    mail: 'arbreasoi@orange.fr',
  },
  {
    img,
    name: 'Sophie LE DREAU',
    phone: '02 99 23 01 94 / 06 73 24 36 61',
    mail: 'soledreau@hotmail.fr',
  },
]

export default (state = init) => {
  return state
}
