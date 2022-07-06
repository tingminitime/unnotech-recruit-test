export const focus = {
  mounted(el, binding) {
    if (binding.value) {
      el.focus()
    }
  }
}

// let pressTimer = null
// let handler
// let startPress = (e) => {
//   if (e.type === 'click' && e.button !== 0) {
//     return
//   }

//   if (pressTimer === null) {
//     pressTimer = setTimeout(() => {
//       handler(e)
//     }, 1000)
//   }
// }

// let cancelPress = (e) => {
//   if (pressTimer !== null) {
//     clearTimeout(pressTimer)
//     pressTimer = null
//   }
// }

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

export const skeletonSrc = {
  mounted(el, binding) {
    // Press run function
    const clickHandler = (e) => {
      binding.value(el)
    }

    el.addEventListener('click', clickHandler)
  }
}
