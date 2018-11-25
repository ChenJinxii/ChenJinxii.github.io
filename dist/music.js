const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "さよならミッドナイト",
        artist: '火西肆',
        url: 'http://m10.music.126.net/20181125213157/f44cb9ca6814e6ef8640de455dc2cb35/ymusic/7031/7e13/edb5/e7d9c45bb276a06c8b22d29497dc7d3f.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/84.jpg',
      },
    ]
});