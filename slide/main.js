const COLORS = {
    '--color-bg': '#0F0F13',
    '--slide-button-color-bg': '#FF5524',
    '--slide-button-completed-color-bg': '#1ddb4f',
    '--slide-button-color-text': '#FFF',
    '--slide-button-control-control-bg': '#0F0F13'
  }
  
  const $container = document.querySelector('.slide-button__container');
  const $control = document.querySelector('.slide-button__control');
  const $text = document.querySelector('.slide-button__text');
  const $completedOverlay = document.querySelector('.slide-button__completed-overlay');
  const $completedArrow = document.querySelector('.arrow.arrow__completed')
  const slidingWidth = $container.getBoundingClientRect().width - 8 
  let drag, animInterval;
  
  setColors();
  animateShake();
  setContinuousAnimation();
  
  [drag] = Draggable.create($control, {
          bounds: {
        left: 4,
        width: slidingWidth
      },
      type: 'x',
      onDrag() {
        const percent = this.x / this.maxX
        const completedOpacity = Math.pow(percent, 4)
  
        $text.style.opacity = 1 - percent * 1.5;
        $completedOverlay.style.opacity = completedOpacity;
        $completedArrow.style.opacity = completedOpacity;
        stopContinuousAnimation();
      },
      onDragEnd(event) {
        const isSlideCompleted = this.x > this.maxX * 0.4;
        const destinationX = isSlideCompleted ? this.maxX : this.minX;
        const duration = isSlideCompleted ? .2 : .5;
        const toCompleteOpacity = isSlideCompleted ? 0 : 1;
        const completedOpacity = isSlideCompleted ? 1 : 0;
        const ease = isSlideCompleted ? '' : 'back.out(1.05)'
        
        if (isSlideCompleted) {
          drag.disable();
        }
        TweenMax.to(this.target, duration, {
          x: destinationX,
          opacity: toCompleteOpacity,
          ease
        });
        TweenMax.to($text, .2, { opacity: toCompleteOpacity });
        TweenMax.to($completedOverlay, .2, { opacity: completedOpacity });
        TweenMax.to($completedArrow, .2, { opacity: completedOpacity });
   
        if (!isSlideCompleted) {
          setContinuousAnimation();
        }
      }
  });
  
  function setColors() {
    const root = document.documentElement;
  
    for (const prop in COLORS) {
        root.style.setProperty(prop, COLORS[prop]);
    }
  }
  
  function setContinuousAnimation() {
    animInterval = setInterval(animateShake, 4000);
  }
  
  function stopContinuousAnimation() {
    clearInterval(animInterval);
  }
  
  function animateShake() {
    if (drag && drag.isDragging) {
      return;
    }
    TweenMax.to($control, .2, {
      x: 20,
      ease: 'power1.in',
      onComplete() {
        TweenMax.to($control, .5, {
          x: 0,
          ease: 'bounce.out',
        })
      }
    });
  }
  
  