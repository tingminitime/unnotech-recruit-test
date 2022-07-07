import emptyImage from '@img/empty-image.jpg'

export const focus = {
  mounted(el, binding) {
    if (binding.value) {
      el.focus()
    }
  }
}

export const longPress = {
  mounted(el, binding) {
    if (typeof binding.value != 'object') {
      console.error('v-longpress must bind a object')
      return
    }

    let pressTimer = null
    let startPress = (e) => {
      if (e.type === 'click' && e.button !== 0) {
        return
      }

      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          handler(e)
        }, 1000)
      }
    }

    let cancelPress = (e) => {
      if (pressTimer !== null) {
        clearTimeout(pressTimer)
        pressTimer = null
        binding.value.cancelPress(el)
      }
    }

    // Long press run function
    const handler = (e) => {
      binding.value.longPress(el)
    }

    // Start press
    el.addEventListener('mousedown', startPress)
    el.addEventListener('touchstart', startPress)

    // Cancel press
    el.addEventListener('click', cancelPress)
    el.addEventListener('mouseout', cancelPress)
    el.addEventListener('mouseup', cancelPress)
    el.addEventListener('touchend', cancelPress)
    el.addEventListener('touchcancel', cancelPress)
  },
}

export const press = {
  mounted(el, binding) {
    if (typeof binding.value != 'function') {
      console.error('v-press must bind a function')
      return
    }


  }
}

export const imgSrc = {
  mounted(el, binding) {
    el.classList.add('load')
    if (binding.value) {
      const img = new Image()
      img.src = binding.value
      img.onload = () => {
        el.classList.remove('load')
        el.src = binding.value
      }
      img.onerror = () => {
        el.classList.remove('load')
        el.src = emptyImage
      }
    }
  },
  updated(el, binding) {
    el.classList.add('load')
    if (binding.value) {
      const img = new Image()
      img.src = binding.value
      img.onload = () => {
        el.classList.remove('load')
        el.src = binding.value
      }
      img.onerror = () => {
        el.classList.remove('load')
        el.src = emptyImage
      }
    }
  }
}
