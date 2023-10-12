React Weather App

**React Weather App**은 React를 사용하여 구현된 간단한 날씨 애플리케이션입니다. 
>이 애플리케이션을 사용하여 특정 도시의 날씨 정보를 확인할 수 있습니다.

<img width="300" alt="스크린샷 2023-10-12 오전 9 41 35" src="https://github.com/nimosarang/React-WeatherApp/assets/111734043/07a3f93b-a56e-4d7e-966e-504997b1cfa0">
<img width="300" alt="스크린샷 2023-10-12 오전 9 47 11" src="https://github.com/nimosarang/React-WeatherApp/assets/111734043/f053e7bd-edcc-4b99-b368-468a5ce5b771">
<img width="300" alt="스크린샷 2023-10-12 오전 9 48 08" src="https://github.com/nimosarang/React-WeatherApp/assets/111734043/35492c1d-e856-4004-980f-d3ab651c7da4">

앱 구조
애플리케이션은 다음과 같은 주요 컴포넌트로 구성됩니다.

1. **App 컴포넌트**
   - App 컴포넌트는 애플리케이션의 진입점입니다. 이 컴포넌트는 다음과 같은 주요 기능을 수행합니다.
   사용자로부터 도시 이름을 입력받아 날씨 정보를 검색합니다.
   검색 결과에 따라 날씨 정보를 표시하거나 "No search results..." 메시지를 표시합니다.
   OpenWeatherMap API를 사용하여 날씨 정보를 가져옵니다.

2. **WeatherBox 컴포넌트**
   - WeatherBox 컴포넌트는 날씨 정보를 표시하는 역할을 합니다. 이 컴포넌트는 다음 정보를 표시합니다.
   현재 온도
   날씨 설명
   날씨 아이콘 (아이콘은 OpenWeatherMap에서 가져옵니다)

3. **SearchBox 컴포넌트**
   - SearchBox 컴포넌트는 도시 이름을 입력하고 검색하는 데 사용됩니다. 이 컴포넌트는 다음과 같은 요소를 포함합니다.
   도시 이름을 입력하는 입력란
   "Search" 버튼을 클릭하여 날씨 정보를 검색하는 기능

4. **NotFound 컴포넌트**
   - NotFound 컴포넌트는 검색 결과가 없을 때 표시됩니다. "No search results..." 메시지와 "Please try again!" 메시지가 포함되어 있습니다.

5. 사용된 기술
   - React: 애플리케이션은 React 라이브러리를 사용하여 개발되었습니다.
   - OpenWeatherMap API: 날씨 정보를 가져오기 위해 OpenWeatherMap API를 사용합니다.
   - react-icons 라이브러리: 검색란과 검색 버튼에 아이콘을 추가하기 위해 react-icons 라이브러리를 사용합니다.
