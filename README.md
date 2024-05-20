### [simple-image-carousel Demo WebSite](https://heeeete.github.io/simple-image-carousel/)

### [![image-slider](https://github.com/heeeete/simple-image-carousel/assets/101648575/b1bdd6a6-85a0-42f0-b25c-ddfa8ea4b007)](https://heeeete.github.io/simple-image-carousel/)

<br/>

## Install
```
npm i simple-image-carousel
```

<br/>

[Korea](#Korea)

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
| dotColor | 점의 색상을 설정합니다. | rgb(0, 114, 255) | string |
| dotHoverColor | 점을 마우스로 가리킬 때의 색상을 설정합니다. | rgb(135, 135, 135) | string |
| dotBorderColor | 점의 테두리 색상을 설정합니다. | rgb(152, 152, 152) | string |
| arrowColor | 화살표의 색상을 설정합니다. | white | string |
| arrowSize | 화살표의 크기를 설정합니다. | 50 | number |
| dotSize | 점의 크기를 설정합니다. | 13 | number |
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
{/* 넓이를 지정해 주지 않으면 기본적으로 부모 크기의 100%를 차지합니다 */}
   <div>
    <ImageSlider images={images} />
  </div>

{/* 아래와 같은 props를 사용할 수 있습니다. */}
  <div>
    <ImageSlider
      images={images}
      showArrows={true}
      showDots={true}
      enableDrag={true}
      enableLoop={true}
      width={600}
      height={400}
      objectFit="cover"
      dotColor="blue"
      dotHoverColor="lightblue"
      dotBorderColor="darkblue"
      dotSize={20}
      arrowColor="black"
      arrowSize={40}
      borderRadius={10}
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
| dotColor | Sets the color of the dots. | rgb(0, 114, 255) | string |
| dotHoverColor | Sets the color of the dots when hovered over. | rgb(135, 135, 135) | string |
| dotBorderColor | Sets the border color of the dots. | rgb(152, 152, 152) | string |
| arrowColor | Sets the color of the arrows. | white | string |
| arrowSize | Sets the size of the arrows. | 50 | number |
| dotSize | Sets the size of the dots. | 13 | number |
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
{/* If you don't specify a width, it defaults to 100% of the parent's size */}
   <div>
    <ImageSlider images={images} />
  </div>

{/* You can use the following props */}
  <div>
    <ImageSlider
      images={images}
      showArrows={true}
      showDots={true}
      enableDrag={true}
      enableLoop={true}
      width={600}
      height={400}
      objectFit="cover"
      dotColor="blue"
      dotHoverColor="lightblue"
      dotBorderColor="darkblue"
      dotSize={20}
      arrowColor="black"
      arrowSize={40}
      borderRadius={10}
      autoSlider={3000}
      duration={500}
    />
  </div>
);

export default App;
```
# Korea
