[![Build Status](https://travis-ci.org/zrrrzzt/seeiendom-cli.svg?branch=master)](https://travis-ci.org/zrrrzzt/seeiendom-cli)
[![Coverage Status](https://coveralls.io/repos/zrrrzzt/seeiendom-cli/badge.svg?branch=master&service=github)](https://coveralls.io/github/zrrrzzt/seeiendom-cli?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# seeiendom-cli

CLI for [www.seeiendom.no](http://www.seeiendom.no/)

## Installation

```bash
$ npm install seeiendom-cli -g
```

## Usage

Send your query.

```bash
$ seeiendom 0806-60/77
```

## Result

Example of returned data

```JavaScript
[ 
  { 
    ID: '41515792',
    TITTEL: '0806-60/77',
    TITTEL2: 'SKIEN-60/77',
    TITTEL3: '60/77, SKIEN',
    TITTEL4: 'FYLKESBAKKEN 6, 3715 SKIEN-60/77',
    NAVN: '0806-60/77',
    TILHOERIGHET: 'SKIEN, SKIEN, TELEMARK',
    GARDSNR: '60',
    BRUKSNR: '77',
    FESTENR: '0',
    SEKSJONSNR: '0',
    KOMMUNENR: '0806',
    KOMMUNENAVN: 'SKIEN',
    VEGADRESSE: 'FYLKESBAKKEN 6, 3715 SKIEN',
    VEGADRESSE2: 'FYLKESBAKKEN 6',
    LATITUDE: '6564248.55',
    LONGITUDE: '534927.62',
    FYLKESNR: '08',
    FYLKESNAVN: 'TELEMARK',
    OBJEKTTYPE: 'EIENDOM',
    KILDE: 'EIENDOM' 
  },
  { 
    ID: '41515792',
    TITTEL: '0806-60/77',
    TITTEL2: 'SKIEN-60/77',
    TITTEL3: '60/77, SKIEN',
    TITTEL4: 'FYLKESBAKKEN 8, 3715 SKIEN-60/77',
    NAVN: '0806-60/77',
    TILHOERIGHET: 'SKIEN, SKIEN, TELEMARK',
    GARDSNR: '60',
    BRUKSNR: '77',
    FESTENR: '0',
    SEKSJONSNR: '0',
    KOMMUNENR: '0806',
    KOMMUNENAVN: 'SKIEN',
    VEGADRESSE: 'FYLKESBAKKEN 8, 3715 SKIEN',
    VEGADRESSE2: 'FYLKESBAKKEN 8',
    LATITUDE: '6564248.55',
    LONGITUDE: '534927.62',
    FYLKESNR: '08',
    FYLKESNAVN: 'TELEMARK',
    OBJEKTTYPE: 'EIENDOM',
    KILDE: 'EIENDOM' 
  },
  { 
    ID: '41515792',
    TITTEL: '0806-60/77',
    TITTEL2: 'SKIEN-60/77',
    TITTEL3: '60/77, SKIEN',
    TITTEL4: 'FYLKESBAKKEN 10, 3715 SKIEN-60/77',
    NAVN: '0806-60/77',
    TILHOERIGHET: 'SKIEN, SKIEN, TELEMARK',
    GARDSNR: '60',
    BRUKSNR: '77',
    FESTENR: '0',
    SEKSJONSNR: '0',
    KOMMUNENR: '0806',
    KOMMUNENAVN: 'SKIEN',
    VEGADRESSE: 'FYLKESBAKKEN 10, 3715 SKIEN',
    VEGADRESSE2: 'FYLKESBAKKEN 10',
    LATITUDE: '6564248.55',
    LONGITUDE: '534927.62',
    FYLKESNR: '08',
    FYLKESNAVN: 'TELEMARK',
    OBJEKTTYPE: 'EIENDOM',
    KILDE: 'EIENDOM' 
  } 
]
```

## Disclaimer

This is not an official module from [www.seeiendom.no](http://www.seeiendom.no/) and it is meant for private use only.
For professional services please contact [Kartverket](http://kartverket.no/Bestille/Bestille-eiendomsdata/)

## Related

- [seeiendom](https://github.com/zrrrzzt/seeiendom) API for this module

## License

[MIT](LICENSE)

![Robohash image of seeiendom-cli](https://robots.kebabstudios.party/seeiendom-cli.png "Robohash image of seeiendom-cli")