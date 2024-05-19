[Demo](https://heeeete.github.io/huipark-image-slider-demo/)

### [Image Slider Demo WebSite](https://heeeete.github.io/huipark-image-slider-demo/)

### [![image-slider](https://github.com/heeeete/huipark-image-slider/assets/101648575/ecbb7994-4dd2-437e-a738-ea5eabb6c54e)](https://heeeete.github.io/huipark-image-slider-demo/)

<br/>

## Install

```
npm i simple-image-carousel
```

# Language

- [Korea](#Korea)
- [English](#English)

<br/>

# 🇰🇷

이미지 슬라이더는 기본적으로 lazy loading을 지원하여, 스크롤 시점에 이미지를 로드합니다.
| **Props** | **설명** | **기본값** | **타입** |
|---------------------|----------------------------------------------------------------------------|--------------------|---------------------|
| images | `{ url: string }` 형식의 객체 배열로, 슬라이더에 표시할 이미지 URL을 포함합니다. | - | { url: string }[] |
| showArrows | 슬라이더 양 옆에 화살표를 표시할지 여부를 설정합니다. | true | boolean |
| showDots | 슬라이더 하단에 점을 표시할지 여부를 설정합니다. | true | boolean |
| enableDrag | 드래그 기능을 활성화할지 여부를 설정합니다. | true | boolean |
| enableLoop | 슬라이더의 루프 기능을 활성화할지 여부를 설정합니다. 자동 슬라이드가 활성화 돼있으면 해당 값은 true가 됩니다. | true | boolean |
| width | 슬라이더의 너비를 설정합니다. | null | number \| null |
| height | 슬라이더의 높이를 설정합니다. | null | number \| null |
| objectFit | 이미지를 맞추는 방식을 설정합니다. | fill | "fill" \| "contain" \| "cover" \| "none" \| "scale-down" |
| dotColor | 점의 색상을 설정합니다. | rgb(1,111,255) | string |
| dotHoverColor | 점을 마우스로 가리킬 때의 색상을 설정합니다. | rgb(78,78,78) | string |
| dotBorderColor | 점의 테두리 색상을 설정합니다. | rgb(78,78,78) | string |
| arrowColor | 화살표의 색상을 설정합니다. | white | string |
| arrowSize | 화살표의 크기를 설정합니다. | 50 | number |
| borderRadius | 슬라이더의 모서리 반경을 설정합니다. | 0 | number |
| autoSlider | 자동 슬라이드 시간(밀리초)을 설정합니다. | 0 | number |
| duration | 슬라이드 애니메이션 지속 시간(밀리초)을 설정합니다. | 300 | number |

### 사용 예제

```
import React from 'react';
import ImageSlider from 'simple-image-carousel';

const images = [
  { url: 'https://example.com/image1.jpg' },
  { url: 'https://example.com/image2.jpg' },
  { url: 'https://example.com/image3.jpg' },
];

const App = () => (
  <div>
    <ImageSlider
      images={images}
      showArrows
      showDots
      enableDrag
      enableLoop
      width={600}
      height={400}
      objectFit="cover"
      dotColor="blue"
      arrowColor="black"
      autoSlider={3000}
      duration={500}
    />
  </div>
);

export default App;
```

# 🇺🇸

The image slider supports lazy loading by default, loading images as they come into view during scrolling.
| **Props** | **Description** | **Default** | **Type** |
|---------------------|----------------------------------------------------------------------------|--------------------|---------------------|
| images | An array of objects `{ url: string }` containing image URLs to be displayed in the slider. | - | { url: string }[] |
| showArrows | Determines whether arrows are shown on the sides of the slider. | true | boolean |
| showDots | Determines whether dots are shown at the bottom of the slider. | true | boolean |
| enableDrag | Enables or disables the drag functionality. | true | boolean |
| enableLoop | Enables or disables the loop functionality of the slider. If auto slider is enabled, this value will be set to true. | true | boolean |
| width | Sets the width of the slider. | null | number \| null |
| height | Sets the height of the slider. | null | number \| null |
| objectFit | Sets the object fit mode for the images. | fill | "fill" \| "contain" \| "cover" \| "none" \| "scale-down" |
| dotColor | Sets the color of the dots. | rgb(1,111,255) | string |
| dotHoverColor | Sets the color of the dots when hovered over. | rgb(78,78,78) | string |
| dotBorderColor | Sets the border color of the dots. | rgb(78,78,78) | string |
| arrowColor | Sets the color of the arrows. | white | string |
| arrowSize | Sets the size of the arrows. | 50 | number |
| borderRadius | Sets the border radius of the slider. | 0 | number |
| autoSlider | Sets the automatic slider interval time in milliseconds. | 0 | number |
| duration | Sets the duration of the slide animation in milliseconds. | 300 | number |

### Example Usage

```
import React from 'react';
import ImageSlider from 'simple-image-carousel';

const images = [
  { url: 'https://example.com/image1.jpg' },
  { url: 'https://example.com/image2.jpg' },
  { url: 'https://example.com/image3.jpg' },
];

const App = () => (
  <div>
    <ImageSlider
      images={images}
      showArrows
      showDots
      enableDrag
      enableLoop
      width={600}
      height={400}
      objectFit="cover"
      dotColor="blue"
      arrowColor="black"
      autoSlider={3000}
      duration={500}
    />
  </div>
);

export default App;
```
