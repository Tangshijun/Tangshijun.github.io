const ap = new APlayer({
    container: document.getElementById('player'),
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 0,
    audio: [
        {
            name: '告诫',
            artist: '孤儿们',
            url: 'http://musiclin.test.upcdn.net/gaojiegaojie.mp3',
            cover: 'http://musiclin.test.upcdn.net/didi.jpg',
            lrc: 'lrc1.lrc',
            theme: '#ebd0c2'
        },
        {
            name: '自白',
            artist: '孤儿们',
            url: 'http://musiclin.test.upcdn.net/zb.mp3',
            cover: 'http://musiclin.test.upcdn.net/didi.jpg',
            lrc: 'lrc2.lrc',
            theme: '#46718b'
        }
    ]
});