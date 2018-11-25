const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "さよならミッドナイト",
        artist: '火西肆',
        url: 'http://m10.music.126.net/20181125213157/f44cb9ca6814e6ef8640de455dc2cb35/ymusic/7031/7e13/edb5/e7d9c45bb276a06c8b22d29497dc7d3f.mp3',
        cover: 'http://p1.music.126.net/eKcCnjIktwY2UCOG0wq6Hg==/17865964440051957.jpg',
      },
	  {
		  name: "孤独她呀",
		  artist: '二珂',
		  url: 'http://m10.music.126.net/20181125214934/f1d1a924cef2c93b863bd4fd30d077c7/ymusic/911d/9e61/5ad9/867bc9e75d993390fde613432c5a16c6.mp3',
		  cover: 'http://p2.music.126.net/gK0nqK8iiG1o6axkHmmqrQ==/109951163416312552.jpg'
	  },
	  {
		  name: '慢慢喜欢你',
		  artist: '莫文蔚',
		  url: 'http://m10.music.126.net/20181125215235/50f33e0936f8fd0a8e72eaf79a910b04/ymusic/036c/9f6b/412f/f574a4e6f9d53e030d9394f77dc73b09.mp3',
		  cover: 'http://p1.music.126.net/21l0Cy8SO6ycY_eZT-6vVw==/109951163386949943.jpg'
	  },
	  {
		  name: '椿',
		  artist: '沈以诚',
		  url: 'http://49.140.187.1/cache/6/05/music.126.net/e3dad95d475469953bbff6fde2a0334f/a58b6e30f495e646dde7945174042bda.mp3',
		  cover: 'http://p2.music.126.net/CpwIPy2YUWC6ksF88eGNyw==/109951162931819035.jpg'
	  }
    ]
});