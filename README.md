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
$ seeiendom 3807-60/77
```

## Result

Example of returned data

```JavaScript
[ 
  { 
    id: 41515792,
    kommunenavn: 'SKIEN',
    kommunenr: '3807',
    gaardsnr: 60,
    bruksnr: 77,
    festenr: 0,
    seksjonsnr: 0,
    veiadresse: 'FYLKESBAKKEN 6, 3715 SKIEN' 
  },
  { 
    id: 41515792,
    kommunenavn: 'SKIEN',
    kommunenr: '3807',
    gaardsnr: 60,
    bruksnr: 77,
    festenr: 0,
    seksjonsnr: 0,
    veiadresse: 'FYLKESBAKKEN 8, 3715 SKIEN' 
  },
  { 
    id: 41515792,
    kommunenavn: 'SKIEN',
    kommunenr: '3807',
    gaardsnr: 60,
    bruksnr: 77,
    festenr: 0,
    seksjonsnr: 0,
    veiadresse: 'FYLKESBAKKEN 10, 3715 SKIEN' 
  }
]
```

## Disclaimer

This is not an official module from [seeiendom.kartverket.no](https://seeiendom.kartverket.no) and it is meant for private use only.
For professional services please contact [Kartverket](https://kartverket.no/eiendom/eiendomsinformasjon/tilgang-til-eiendomsdata/)

## Related

- [seeiendom](https://github.com/zrrrzzt/seeiendom) API for this module

## License

[MIT](LICENSE)
