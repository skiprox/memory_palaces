'use strict'

class Browser {
  constructor() {
    this.elems = [].slice.call(document.querySelectorAll('.popup'))
    this.addListeners()
  }
  addListeners() {
    this.elems.forEach((item, index) => {
      this.elems[index].querySelector('.popup__close').addEventListener('click', () => {
        this.elems[index].classList.remove('active')
      })
    })
  }
}

new Browser()
