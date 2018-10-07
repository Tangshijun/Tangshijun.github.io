const ap = new APlayer({
    container: document.getElementById('player'),
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 0,
    audio: [
        {
            name: '����or����', //��Ƶ����
            artist: '�ܸ�', //��Ƶ������
            url: '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=3&id=908548853&auto=1&height=66"></iframe>', //��Ƶ����
            cover: '/resources/music/�ϵ�.jpg', //��Ƶ����
            lrc: '0', //��Ƶ���ʣ�����������lrcTypeʹ��
            theme: '#46718b' //�л�������Ƶʱ������ɫ���������� theme ���ȼ���
        },
        {
            name: 'Time', //����ֻ��һ�׸裬ɾ����һ�飬���и����������˸�ʽ������������
            artist: '�ܸ�',
            url: 'https://v2.fangcloud.com/share/8703ea8632f3408afecae7463c',
            cover: '/resources/music/�ϵ�.jpg',
            theme: '#46718b'
        },
        {
            name: 'spoiler', //����ֻ��һ�׸裬ɾ����һ�飬���и����������˸�ʽ������������
            artist: '�Լ�',
            url: 'https://v2.fangcloud.com/share/8703ea8632f3408afecae7463c',
            cover: '/resources/music/�ϵ�.jpg',
            theme: '#46718b'
        }
    ]
});
