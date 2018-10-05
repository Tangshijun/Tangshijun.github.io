const ap = new APlayer({
    container: document.getElementById('player'),
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 0,
    audio: [
        {
            name: '���or���', //��Ƶ����
            artist: '�ܸ�', //��Ƶ������
            url: '/resources/music/�˷۵�̨�������� - ���or��롪������.mp3', //��Ƶ����
            cover: '/resources/music/�ϵ�.jpg', //��Ƶ����
            lrc: '0', //��Ƶ��ʣ���������lrcTypeʹ��
            theme: '#46718b' //�л�������Ƶʱ������ɫ��������� theme ���ȼ���
        },
        {
            name: 'Time', //���ֻ��һ�׸裬ɾ����һ�飬���и���������˸�ʽ���������
            artist: '�ܸ�',
            url: '/resources/music/�˷۵�̨�������� - Time����H2g����.mp3',
            cover: '/resources/music/�ϵ�.jpg',
            theme: '#46718b'
        },
        {
            name: 'spoiler', //���ֻ��һ�׸裬ɾ����һ�飬���и���������˸�ʽ���������
            artist: '�Լ�',
            url: '/resources/music/��̰�_����.wav',
            cover: '/resources/music/�ϵ�.jpg',
            theme: '#46718b'
        }
    ]
});