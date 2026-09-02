한걸음 노트 PWA 업로드 파일

포함 파일
- index.html
- manifest.json
- sw.js
- apple-touch-icon.png
- icon-192.png
- icon-512.png

연결된 Apps Script 주소
https://script.google.com/macros/s/AKfycbzhXOD55ewT4i3WdoSa3WDlAfIsZcLjngiY5NJ6vDJWl-aEJ_I-9KURDlhyNXCM1eqpKQ/exec

GitHub Pages 사용 순서
1. GitHub에서 새 저장소(repository)를 만듭니다.
2. 이 폴더 안의 6개 파일을 저장소 최상위(root)에 업로드합니다.
3. 저장소 Settings > Pages로 이동합니다.
4. Build and deployment에서 Source를 "Deploy from a branch"로 선택합니다.
5. Branch를 main / (root)로 선택하고 Save 합니다.
6. 잠시 후 생성된 https://사용자이름.github.io/저장소이름/ 주소로 접속합니다.
7. iPhone: Safari > 공유 > 홈 화면에 추가
8. Android: Chrome > 메뉴 > 홈 화면에 추가 또는 앱 설치

중요
- 기존 Apps Script Code.gs의 doGet()에 setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)가 있어야 합니다.
- 기존에 홈 화면에 추가했던 아이콘이 있으면 먼저 삭제한 뒤 다시 추가하세요.
