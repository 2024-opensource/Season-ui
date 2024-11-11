안녕하세요, christmas-party-ui에 기여해 주셔서 감사합니다. 
여러분의 기여가 christmas-party-ui을 더욱 유쾌하게 만들 수 있습니다. 
컴포넌트 추가, 문서화 개선, 버그 수정 등 어떤 기여든 환영합니다!

## 기여 종류

- 새로운 컴포넌트 제작
- 새로운 기능 제안
- 라이브러리 테스트 및 개선
- 버그 수정
- 코드 철자/문법 수정
- 문서 오탈자 수정
- christmas-party-ui를 사용한 어플리케이션을 만들어 전 세계와 공유하는 것

## 코드 기여 원칙

christmas-party-ui에 기여하기 위해, 새로운 컴포넌트 추가, 버그 수정 또는 코드에 직접 영향을 미칠 수 있는 모든 기여는 pull request를 만들기 전에 issue에서 시작해야 합니다. 저희가 issue를 확인하여 동일한 문제가 기존 issue에 존재하지는 않는지 확인한 후 유지 관리자인 @희원 @단현 issue 작업을 할당해 드립니다.

코드를 수정하지만 issue → pull request 과정을 거치지 않아도 되는 사소한 변경 사항은 다음과 같습니다.

- 철자/문법 수정
- 문서 오탈자 수정

또한 새로운 컴포넌트를 추가하여 기여하고자 하는 경우, 우리의 [storybook](https://672ac48d7049f10e7114725c-yihgmsplsk.chromatic.com/?path=/docs/components-card--docs)에 문서를 추가하기 위해 아래와 같은 양식으로 새로운 컴포넌트의 파라미터에 대한 설명과 예시 코드를 작성하여 pull request의 comments에 작성해주세요.

```jsx
<MusicBar albumCover={<React.ForwardRef />} />
```

| name | description | default | control |
| --- | --- | --- | --- |
|     |     |     |     |

## Pull request 보내기

1. 리포지토리를 포크하세요.
2. 포크를 로컬 컴퓨터에 복제하고 원격 저장소를 설정하세요:

```bash
git clone https://github.com.<your username>/Season-ui.git
cd Season-ui
git remote add upstream https://github.com/2024-opensource/Season-ui.git
```

3. 로컬 브랜치를 업스트림 브랜치와 동기화 여부.

```bash
git fetch upstream
git merge upstream/main
git push origin main
```

4. 코드를 수정하고, 완료하면 추가하세요:

```bash
git add .
git commit -m "commit message"
git push origin BRANCH NAME
```

5. 리포지토리(우리 프로젝트 링크)에 와서 풀 리퀘스트 버튼을 누르세요!


## commit message 규칙

1. commit message의 제목 앞에는 다음 중 하나의 헤더를 붙여야 합니다.

| Tag Name | Description |
| --- | --- |
| Feat | 새로운 기능을 추가 |
| Fix | 버그 수정 |
| Design | CSS 등 사용자 UI 디자인 변경 |
| Style | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
| Refactor | 프로덕션 코드 리팩토링 |
| Comment | 필요한 주석 추가 및 변경 |
| Docs | 문서 수정 |

2. 헤더의 첫 글자와 제목의 첫 글자를 모두 대문자로 작성해주세요.
3. 제목의 끝에는 점(.)을 붙이지 마세요.
