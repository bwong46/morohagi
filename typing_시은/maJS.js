let strW = [
    '목마른 사람이 우물 판다', '물이 깊어야 고기가 모인다', '개구리 올챙이 적 생각 못 한다',
    '미운 자식 떡 하나 더 준다', '가랑잎이 솔잎더러 바스락거린다고 한다', '첫술에 배부를까',
    '소 잃고 외양간 고치기', '가루는 칠수록 고와지고, 말은 할수록 거칠어진다',
    '세 살 버릇 여든 간다', '우물 안 개구리', '비는 데는 무쇠도 녹는다', '어물전 망신은 꼴뚜기가 시킨다'
];

let strWords = [];
let score = 0;
let strText = [];
let strText_Next = [];
let count = 0;

let start_time; // 입력 시작 시간
let end_time;  // 입력 끝난 시간
let elapsedTime;  // 입력 끝난 시간 - 입력 시작 시간, // 딜레이 시간
let time;
let taja_count = 0;  // 입력한 타자수를 저장

// const size = strWords.length / strWords[0].length;  // 배열에 저장된 행을 확인
const strInput = document.querySelector('.str-input');
const strDisplay = document.querySelector('.str-display');
const tajaDisplay = document.querySelector('.taja_avg');
const scoreDisplay = document.querySelector('.str_score');
const strNextDisplay = document.querySelector('.str-Next');

init();

function init() {
    getStrWords()
    strInput.addEventListener('input', checkMatch)
}


/* 문장 불러오기 */
function getStrWords() {
    for(i=0; i<strW.length; i++)
        strWords[i] = strW[i];
}


/* 현재속도 측정 */
function avgSpeed() {
    // 현재속도 (타수-백스페이스 *2) / 경과시간(초) * 60초
    // 한컴타자는 백스페이스 * +3
}

function getStrWords() {
    for(i=0; i<strW.length; i++)
        strWords[i] = strW[i];

    for(i=0; i<5; i++) {
        k = 0;

        const randomIndex = Math.floor(Math.random() * strWords.length); 
        strText[i] = strWords[randomIndex]

        console.log("디스플레이:" + strText[i])
    }

    for(i=0; i<4; i++) {
        strText_Next[i] = strText[i + 1]
        console.log("다음문장:" + strText[i + 1])
    }
    strText_Next[4] = "다음 문장이 없습니다."
}

function gettext(strInput)
{
	let len = parseInt(strInput).length; //입력받은 글자수를 확인
	let onebyte = 0;
	let twobyte = 0;

	for (i=0; i<len; i++) //for문을 사용하여 카운트를 샘
	{
		if (strInput[i] < 0) twobyte++;  // 2바이트 한글
		else onebyte++;           // 1바이트 영문
	}

	return onebyte+(twobyte / 2);
}

function checkMatch() {
    user = [strW];
    sum = 0; 
    avg = 0;

    if(window.event.keyCode == 13 && score != 6) {
        strDisplay.innerText = strText[count]

        if(count < 4) strNextDisplay.innerText = 'Next 문장:　' +  strText_Next[count]
        else strNextDisplay.innerText = strText_Next[count]
        
        // while(strInput.value.length === strDisplay.innerText.length) {
        //     taja_count = 0;

        //     timestamp = new Date().getTime();  // 현재 시간
        //     taja_count = gettext(user);
            
        //     time = elapsedTime - timestamp;

        //     if(taja_count == 0) break; //count가 0이면 정지

        //     n = parseFloat(60) / (time / 1000);
        //     tajaDisplay = parseInt(n) * taja_count; 
            
        // }

        setTimeout(() => strInput.value = "", 20) // strInput.value = ""; // input 창 초기화
        score = score + 1;
        scoreDisplay.innerText = score;


        if(score === 6) {
            strInput.value = ""
            setTimeout(() => alert('타자 검사가 종료되었습니다.'), 20)
            strDisplay.innerText = "타자 검사가 종료되었습니다.";
            strNextDisplay.innerText = "";
            scoreDisplay.innerText = 5;
        }
        count++;
    }   
}
