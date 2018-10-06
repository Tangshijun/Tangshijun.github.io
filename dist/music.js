const ap = new APlayer({
    container: document.getElementById('player'),
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 0,
    audio: [
        {
            name: '���or���', //��Ƶ����
            artist: '�ܸ�', //��Ƶ������
            url: 'https://v2.fangcloud.com/share/8703ea8632f3408afecae7463c', //��Ƶ����
            cover: '/resources/music/�ϵ�.jpg', //��Ƶ����
            lrc: '0', //��Ƶ��ʣ���������lrcTypeʹ��
            theme: '#46718b' //�л�������Ƶʱ������ɫ��������� theme ���ȼ���
        },
        {
            name: 'Time', //���ֻ��һ�׸裬ɾ����һ�飬���и���������˸�ʽ���������
            artist: '�ܸ�',
            url: 'https://v2.fangcloud.com/share/8703ea8632f3408afecae7463c',
            cover: '/resources/music/�ϵ�.jpg',
            theme: '#46718b'
        },
        {
            name: 'spoiler', //���ֻ��һ�׸裬ɾ����һ�飬���и���������˸�ʽ���������
            artist: '�Լ�',
            url: 'https://v2.fangcloud.com/share/8703ea8632f3408afecae7463c',
            cover: '/resources/music/�ϵ�.jpg',
            theme: '#46718b'
        }
    ]
});