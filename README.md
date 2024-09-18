Here are several CSS animations that you can apply to an SVG image when hovered over:

### 1. **Scale Animation**
```css
img:hover {
  transform: scale(1.2);
  transition: transform 0.3s ease;
}
```

### 2. **Rotate Animation**
```css
img:hover {
  transform: rotate(360deg);
  transition: transform 0.5s ease;
}
```

### 3. **Fade In/Out Animation**
```css
img:hover {
  opacity: 0.5;
  transition: opacity 0.5s ease;
}
```

### 4. **Bounce Animation**
```css
img:hover {
  animation: bounce 0.6s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
```

### 5. **Skew Animation**
```css
img:hover {
  transform: skew(20deg, 10deg);
  transition: transform 0.4s ease;
}
```

### 6. **Pulse Animation**
```css
img:hover {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
```

### 7. **Flip Animation**
```css
img:hover {
  transform: rotateY(180deg);
  transition: transform 0.6s ease;
}
```

### 8. **Wobble Animation**
```css
img:hover {
  animation: wobble 0.8s ease;
}

@keyframes wobble {
  0% {
    transform: translateX(0%);
  }
  25% {
    transform: translateX(-5%);
  }
  50% {
    transform: translateX(5%);
  }
  75% {
    transform: translateX(-5%);
  }
  100% {
    transform: translateX(0%);
  }
}
```

Each animation can be applied to an SVG image by simply adding the `img:hover` styles.