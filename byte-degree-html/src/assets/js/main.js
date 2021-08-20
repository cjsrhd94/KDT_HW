// 글쓰기 버튼 페이지 이동 방지
const $submit = document.querySelector('button[type="submit"]');

window.addEventListener('DOMContentLoaded', (event) => {
    alert("DOM!");
    $submit &&
    $submit.addEventListener("click", e => {
        e.preventDefault();
        alert("Great!");
    });
});
