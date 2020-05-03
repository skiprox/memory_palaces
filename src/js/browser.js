'use strict'

class Browser {
  constructor() {
    this.elems = []
    this.elems.push(document.querySelector('.moo-text'))
    this.elems.push(document.querySelector('.bear'))
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
