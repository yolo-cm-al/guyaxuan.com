const characters = [
    // 动画人物
    {
        name: "孙悟空",
        category: "动画人物",
        hints: [
            "中国古典名著中的角色",
            "会七十二变",
            "有金箍棒",
            "大闹天宫的主角",
            "来自花果山的美猴王"
        ],
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiMwMDAiLz4KPHRleHQgeD0iMTAiIHk9IjEyIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IndoaXRlIiBkeD0iLTEwIiBkeT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuWbvueJhzwvdGV4dD4KPHJlY3QgeD0iMjAiIHk9IjEyIiBmaWxsPSJub25lIiBmaWx0ZXI9InVybCgjZ3JpZCkiPgo8dGV4dCB4PSIxMCIgeT0iMTIiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIGR4PSIxMCIgZHk9IjM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lm77niY8L3RleHQ+CjxyZWN0IHg9IjEyIiB5PSIxMiIgZmlsbD0ibm9uZSIgZmlsdGVyPSJ1cmwoI2dyaWQpIgo8dGV4dCB4PSIxMCIgeT0iMTIiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIGR4PSIxMCIgZHk9IjU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lm77niY8L3RleHQ+Cjwvc3ZnPg=="
    },
    {
        name: "皮卡丘",
        category: "动画人物",
        hints: [
            "电系口袋妖怪",
            "黄色的小精灵",
            "最喜欢电击",
            "有长长的尾巴",
            "主角小智的伙伴"
        ],
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNmMGYwZjAiIG9wYWNpdHk9IjAuMSIvPgo8dGV4dCB4PSIxMCIgeT0iMTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIGR4PSIxMCIgZHk9IjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmYiIG9wYWNpdHk9IjAuMyI+6ZK65Y+KPC90ZXh0Pgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiMzMzMzMyIgb3BhY2l0eT0iMC4yIi8+CjxyZWN0IHg9IjEyIiB5PSIxMiIgZmlsbD0ibm9uZSIgZmlsdGVyPSJ1cmwoI2dyaWQpIi8+Cjx0ZXh0IHg9IjEwIiB5PSIxMiIgZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIGR4PSIxMCIgZHk9IjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiMzMzMzMyIgb3BhY2l0eT0iMC4yIj7lm77niY8L3RleHQ+Cjwvc3ZnPg=="
    },
    {
        name: "哆啦A梦",
        category: "动画人物",
        hints: [
            "有蓝色身体",
            "来自22世纪",
            "有四维口袋",
            "害怕老鼠",
            "最好的朋友是大雄"
        ],
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiM0ZjRmNGYiIG9wYWNpdHk9IjAuMyIvPgo8dGV4dCB4PSIxMCIgeT0iMTIiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIGR4PSIxMCIgZHk9IjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiM4NGE0ZTUiIG9wYWNpdHk9IjAuNSI+6L+B5Lya5a+95Luj5LmQ5qOA6aKY5Y+KPC90ZXh0Pgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMTUiIGZpbGw9IiM4NGE0ZTUiIG9wYWNpdHk9IjAuNSIvPgo8dGV4dCB4PSIxMCIgeT0iMTIiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIGR4PSIxMCIgZHk9IjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiM4NGE0ZTUiIG9wYWNpdHk9IjAuNSI+5Luj5LmQ5qOA6aKY5Y+KPC90ZXh0Pgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMTUiIGZpbGw9IiM4NGE0ZTUiIG9wYWNpdHk9IjAuNSIvPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMTUiIGZpbGw9IiM4NGE0ZTUiIG9wYWNpdHk9IjAuNSIvPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNmOTgwODAiIG9wYWNpdHk9IjAuMiIvPgo8dGV4dCB4PSIxMCIgeT0iMTIiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIGR4PSIxMCIgZHk9IjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiM4NGE0ZTUiIG9wYWNpdHk9IjAuNSI+5Luj5LmQ5qOA6aKY5Y+KPC90ZXh0Pgo8L3N2Zz4="
    },
    {
        name: "灰太狼",
        category: "动画人物",
        hints: [
            "一只狼",
            "总是抓不到羊",
            "经常被红太狼打",
            "发明家",
            "口头禅是'我还会回来的'"
        ],
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9IjAuMSIvPgo8dGV4dCB4PSIxMCIgeT0iMTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIGR4PSIxMCIgZHk9IjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lrabnpLnpIDwvdGV4dD4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjE1IiBmaWxsPSIjRkZGRkZGIiBvcGFjaXR5PSIwLjMiLz4KPHRleHQgeD0iMTAiIHk9IjEyIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IndoaXRlIiBkeD0iMTAiIGR5PSIzMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5Luj5LmQ5qOA6aKY5Y+KPC90ZXh0Pgo8dGV4dCB4PSIxMCIgeT0iMTIiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIGR4PSIxMCIgZHk9IjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lm77niY8L3RleHQ+Cjwvc3ZnPg=="
    },
    {
        name: "喜羊羊",
        category: "动画人物",
        hints: [
            "青色的小羊",
            "非常聪明",
            "喜欢发明",
            "总是能识破灰太狼的阴谋",
            "羊村的大英雄"
        ],
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9IjAuMSIvPgo8dGV4dCB4PSIxMCIgeT0iMTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIGR4PSIxMCIgZHk9IjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lm77niY8L3RleHQ+CjxyZWN0IHg9IjEyIiB5PSIxMiIgZmlsbD0ibm9uZSIgZmlsdGVyPSJ1cmwoI2dyaWQpIi8+Cjx0ZXh0IHg9IjEwIiB5PSIxMiIgZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIGR4PSIxMCIgZHk9IjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lm77niY8L3RleHQ+Cjwvc3ZnPg=="
    },

    // 历史人物
    {
        name: "秦始皇",
        category: "历史人物",
        hints: [
            "第一位皇帝",
            "统一六国",
            "修建长城",
            "焚书坑儒",
            "姓嬴名政"
        ],
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNFNEU0RTUiIG9wYWNpdHk9IjAuNSIvPgo8dGV4dCB4PSIxMCIgeT0iMTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIGR4PSIxMCIgZHk9IjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNFNEU0RTUiIG9wYWNpdHk9IjAuNSI+5a+55Yy6562v5L2c6aKYPC90ZXh0Pgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMTUiIGZpbGw9IiNFNEU0RTUiIG9wYWNpdHk9IjAuNSIvPgo8dGV4dCB4PSIxMCIgeT0iMTIiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIGR4PSIxMCIgZHk9IjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNFNEU0RTUiIG9wYWNpdHk9IjAuNSI+6L+B5Lya5bmz5Yqo5Liq5py65Luj5LmQPC90ZXh0Pgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMTUiIGZpbGw9IiNFNEU0RTUiIG9wYWNpdHk9IjAuNSIvPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNFNEU0RTUiIG9wYWNpdHk9IjAuNSIvPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMTUiIGZpbGw9IiNFNEU0RTUiIG9wYWNpdHk9IjAuNSIvPgo8dGV4dCB4PSIxMCIgeT0iMTIiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIGR4PSIxMCIgZHk9IjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNFNEU0RTUiIG9wYWNpdHk9IjAuNSI+5a+55Yy6562v5L2c6aKYPC90ZXh0Pgo8L3N2Zz4="
    },
    {
        name: "诸葛亮",
        category: "历史人物",
        hints: [
            "三国时期蜀汉丞相",
            "神机妙算",
            "草船借箭",
            "七擒孟获",
            "字孔明"
        ],
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9IjAuMSIvPgo8dGV4dCB4PSIxMCIgeT0iMTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIGR4PSIxMCIgZHk9IjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lm77niY8L3RleHQ+CjxyZWN0IHg9IjEyIiB5PSIxMiIgZmlsbD0ibm9uZSIgZmlsdGVyPSJ1cmwoI2dyaWQpIi8+Cjx0ZXh0IHg9IjEwIiB5PSIxMiIgZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIGR4PSIxMCIgZHk9IjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lm77niY8L3RleHQ+Cjwvc3ZnPg=="
    },
    {
        name: "李白",
        category: "历史人物",
        hints: [
            "唐代诗人",
            "被称为诗仙",
            "好饮酒",
            "写了很多著名诗歌",
            "号青莲居士"
        ],
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9IjAuMSIvPgo8dGV4dCB4PSIxMCIgeT0iMTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIGR4PSIxMCIgZHk9IjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lm77niY8L3RleHQ+CjxyZWN0IHg9IjEyIiB5PSIxMiIgZmlsbD0ibm9uZSIgZmlsdGVyPSJ1cmwoI2dyaWQpIi8+Cjx0ZXh0IHg9IjEwIiB5PSIxMiIgZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIGR4PSIxMCIgZHk9IjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lm77niY8L3RleHQ+Cjwvc3ZnPg=="
    },
    {
        name: "武则天",
        category: "历史人物",
        hints: [
            "中国唯一的女皇帝",
            "唐朝时期",
            "立无字碑",
            "开创科举制度",
            "名字叫武曌"
        ],
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9IjAuMSIvPgo8dGV4dCB4PSIxMCIgeT0iMTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIGR4PSIxMCIgZHk9IjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lm77niY8L3RleHQ+CjxyZWN0IHg9IjEyIiB5PSIxMiIgZmlsbD0ibm9uZSIgZmlsdGVyPSJ1cmwoI2dyaWQpIi8+Cjx0ZXh0IHg9IjEwIiB5PSIxMiIgZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIGR4PSIxMCIgZHk9IjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lm77niY8L3RleHQ+Cjwvc3ZnPg=="
    },
    {
        name: "关羽",
        category: "历史人物",
        hints: [
            "三国名将",
            "红脸长须",
            "青龙偃月刀",
            "重情重义",
            "被尊为武圣"
        ],
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9IjAuMSIvPgo8dGV4dCB4PSIxMCIgeT0iMTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIGR4PSIxMCIgZHk9IjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lm77niY8L3RleHQ+CjxyZWN0IHg9IjEyIiB5PSIxMiIgZmlsbD0ibm9uZSIgZmlsdGVyPSJ1cmwoI2dyaWQpIi8+Cjx0ZXh0IHg9IjEwIiB5PSIxMiIgZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIGR4PSIxMCIgZHk9IjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lm77niY8L3RleHQ+Cjwvc3ZnPg=="
    }
];

let currentCharacter = null;
let currentHintIndex = 0;
let score = 0;
let remainingGuesses = 5;
let hintsUsed = 0;

function getRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function loadNewCharacter() {
    currentCharacter = getRandomCharacter();
    currentHintIndex = 0;
    hintsUsed = 0;
    document.getElementById('hintDisplay').textContent = '';
    document.querySelector('.category').textContent = currentCharacter.category;
    document.getElementById('guessInput').value = '';
    document.getElementById('remaining').textContent = remainingGuesses;
}

function checkGuess() {
    const guess = document.getElementById('guessInput').value.trim();
    
    if (!guess) {
        alert('请输入你的答案！');
        return;
    }
    
    if (guess.toLowerCase() === currentCharacter.name.toLowerCase()) {
        // 答对了
        const points = Math.max(10 - hintsUsed, 1);
        score += points;
        document.getElementById('score').textContent = score;
        
        showResult(true, points);
        setTimeout(() => {
            nextCharacter();
        }, 3000);
    } else {
        // 答错了
        remainingGuesses--;
        document.getElementById('remaining').textContent = remainingGuesses;
        
        if (remainingGuesses <= 0) {
            showResult(false, 0);
            setTimeout(() => {
                nextCharacter();
            }, 3000);
        } else {
            const shadow = document.querySelector('.shadow-avatar');
            shadow.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                shadow.style.animation = 'float 3s ease-in-out infinite';
            }, 500);
            
            document.getElementById('guessInput').value = '';
        }
    }
}

function getHint() {
    if (currentHintIndex < currentCharacter.hints.length) {
        const hint = currentCharacter.hints[currentHintIndex];
        const hintDisplay = document.getElementById('hintDisplay');
        hintDisplay.textContent = `提示 ${currentHintIndex + 1}: ${hint}`;
        currentHintIndex++;
        hintsUsed++;
    }
}

function showResult(isCorrect, points) {
    const modal = document.getElementById('resultModal');
    const title = document.getElementById('resultTitle');
    const message = document.getElementById('resultMessage');
    const image = document.getElementById('characterImage');
    
    if (isCorrect) {
        title.textContent = '恭喜你，答对了！';
        message.textContent = `答案是：${currentCharacter.name}，获得 ${points} 分！`;
    } else {
        title.textContent = '很遗憾，答错了！';
        message.textContent = `正确答案是：${currentCharacter.name}`;
    }
    
    image.src = currentCharacter.image;
    image.alt = currentCharacter.name;
    
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('resultModal').style.display = 'none';
    nextCharacter();
}

function nextCharacter() {
    remainingGuesses = 5;
    loadNewCharacter();
}

function resetGame() {
    score = 0;
    remainingGuesses = 5;
    document.getElementById('score').textContent = score;
    loadNewCharacter();
}

// 添加键盘事件监听
document.getElementById('guessInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

// 添加摇晃动画的CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// 初始化游戏
loadNewCharacter();