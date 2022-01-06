const curryData = [
    {
      storeId: '',
      isTasted: false,
      location: '臺北 ／ 中山',
      imgSrc: 'img/01.jpg',
      name: '稻町家',
      web: false,
      fb: 'https://www.facebook.com/tongan.curry/',
      ig: false,
      adress: '2, No. 87-1號南京西路大同區台北市103',
      phone: '02 2562 2050',
      open: '週二 ～ 週日<br>11:30 - 21:30<br>⛔️星期一公休',
      isRepo: true,
      repo: [{
        repoImg: '',
        repoStar: '',
        repoText: '',
      }],
      objClass: {
        'chevron-rotate': false,
      },
      repoClass: {
        'row-repo-show': false,
      }
    },
    {
      storeId: '',
      isTasted: false,
      location: '臺北 ／ 信義安和',
      imgSrc: 'img/02.jpg',
      name: '通庵熟成咖哩',
      web: false,
      fb: 'https://www.facebook.com/tongan.curry/',
      ig: false,
      adress: '106台北市大安區通安街115號(信義安和站３號出口)',
      phone: '02 2562 2050',
      open: '12:00 - 14:30<br>17:30 - 21:30',
      isRepo: false,
      repo: [{
        repoImg: 'img/09.jpg',
        repoStar: '★★★★☆',
        repoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ut dolorem molestias alias nonvoluptatum, animi consectetur blanditiis dicta nemo impedit? Possimus suscipit sit a quis? Ea doloribus,sed placeat, deleniti odio esse ullam dolore nesciunt enim neque fugiat, ducimus saepe accusamus inventorequisquam explicabo iure blanditiis vel fugit? Magnam, libero modi.Recusandae at neque perferendisrepudiandae dolore, magnam explicabo.',
      }],
      objClass: {
        'chevron-rotate': false,
      },
      repoClass: {
        'row-repo-show': false,
      }
    },
    {
      storeId: '',
      isTasted: true,
      location: '新北／新莊',
      imgSrc: 'img/03.jpg',
      name: '喜歡咖哩',
      web: false,
      fb: 'https://www.facebook.com/Lovecurry0606/?ref=page_internal',
      ig: 'https://www.instagram.com/lovecurry0606/?hl=zh-tw',
      adress: '242新北市新莊區北63-1鄉道246-258(三角公園附近)',
      phone: '02 2992 7676',
      open: '11:30 - 14:00<br>17:00 - 21:00',
      isRepo: false,
      repo: [{
        repoImg: 'img/10.jpg',
        repoStar: '★★★☆☆',
        repoText: '咖哩醬偏少...不夠熱，表現可以，但CP值普通，德腸好吃，金萱奶茶不要點。',
      }],
      objClass: {
        'chevron-rotate': false,
      },
      repoClass: {
        'row-repo-show': false,
      }
    }
    ,
    {
      storeId: '',
      isTasted: false,
      location: '臺北 / 大安',
      imgSrc: 'img/04.jpg',
      name: '佐藤咖哩 (和平店)',
      web: false,
      fb: 'https://www.facebook.com/satocurry',
      ig: 'https://www.instagram.com/satocurry/?hl=zh-tw',
      adress: '106台北市大安區和平東路三段228巷9號',
      phone: '02 8732 6523',
      open: '11:30 - 14:30<br>17:30 - 21:00',
      isRepo: false,
      repo: [{
        repoImg: '',
        repoStar: '',
        repoText: '',
      }],
      objClass: {
        'chevron-rotate': false,
      },
      repoClass: {
        'row-repo-show': false,
      }
    }
    ,
    {
      storeId: '',
      isTasted: false,
      location: '臺北 / 大安',
      imgSrc: 'img/05.jpg',
      name: '佐藤咖哩 (復興店)',
      web: false,
      fb: 'https://www.facebook.com/satocurryfuxing/',
      ig: 'https://www.instagram.com/satocurry/?hl=zh-tw',
      adress: '106台北市大安區復興南路一段92之1號',
      phone: '02 2711 1967',
      open: '11:30 - 14:30<br>17:30 - 21:00',
      isRepo: false,
      repo: [{
        repoImg: '',
        repoStar: '',
        repoText: '',
      }],
      objClass: {
        'chevron-rotate': false,
      },
      repoClass: {
        'row-repo-show': false,
      }
    }
    ,
    {
      storeId: '',
      isTasted: false,
      location: '臺北 / 大安',
      imgSrc: 'img/06.jpg',
      name: 'NoName 無名咖哩',
      web: false,
      fb: 'https://www.facebook.com/NoName%E5%92%96%E5%93%A9%E3%82%AB%E3%83%AC%E3%83%BC%E3%83%A9%E3%82%A4%E3%82%B9%E5%B0%88%E9%96%80%E5%BA%97-188120185122265',
      ig: 'https://www.instagram.com/noname201802/?hl=zh-tw',
      adress: '106台北市大安區信義路三段166巷3-1(大安站3號出口 轉角處)',
      phone: '02 2703 8813',
      open: '11:00 – 14:00<br>16:00 – 20:00<br>⛔️星期日',
      isRepo: false,
      repo: [{
        repoImg: '',
        repoStar: '',
        repoText: '',
      }],
      objClass: {
        'chevron-rotate': false,
      },
      repoClass: {
        'row-repo-show': false,
      }
    },
    {
      storeId: '',
      isTasted: false,
      location: '臺南 / 中西區',
      imgSrc: 'img/07.jpg',
      name: 'Cocokara cafe&湯咖哩',
      web: false,
      fb: 'https://www.facebook.com/pg/cocokara.miho/',
      ig: 'https://www.instagram.com/cocokara_miho/',
      adress: '台南市中西區民權路二段61號(民權路二段與公園路的路口)',
      phone: '06 222 2328',
      open: '11:00 - 14:30<br>17:30 - 21:30<br>⛔️星期一',
      isRepo: false,
      repo: [{
        repoImg: '',
        repoStar: '',
        repoText: '',
      }],
      objClass: {
        'chevron-rotate': false,
      },
      repoClass: {
        'row-repo-show': false,
      }
    },
    {
      storeId: '',
      isTasted: false,
      location: '日本',
      imgSrc: 'img/08.jpg',
      name: '奧芝商店(okushiba)湯咖哩名店 (站前創成寺店)',
      web: false,
      fb: false,
      ig: false,
      adress: '札幌市中央区北4条西1丁目 (ホクレンビル B1F パールタウン飲食店街)',
      phone: '011-207-0266',
      open: '11:00〜22:00 (LO21:00)<br>⛔️不定休',
      isRepo: false,
      repo: [{
        repoImg: '',
        repoStar: '',
        repoText: '',
      }],
      objClass: {
        'chevron-rotate': false,
      },
      repoClass: {
        'row-repo-show': false,
      },
    }
  ]
export default { curryData };
