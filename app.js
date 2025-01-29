import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Firebase 설정 값 (Firebase Console에서 얻을 수 있어)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function submitDate() {
    if (selectedDate) {
        // 선택한 날짜를 Firebase에 저장
        const selectedDateRef = ref(database, 'selectedDates/' + selectedDate);
        set(selectedDateRef, {
            date: selectedDate,
            timestamp: Date.now()  // 선택한 날짜의 타임스탬프 저장
        }).then(() => {
            alert('날짜가 저장되었습니다!');
            window.location.href = "step6.html";  // 6단계 페이지로 이동
        }).catch((error) => {
            console.error("Error writing to Firebase:", error);
        });
    } else {
        alert('날짜를 선택해주세요.');
    }
}
