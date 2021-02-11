async function init () {
  const node = document.querySelector("#type-text")

  await sleep(1000)
  node.text = ""
  await node.type('I am ')

  while (true) {
    await node.type('an introvert')
    await sleep(2000)
    await node.delete('an introvert')
    await node.type('a Lord of the Rings fanatic')
    await sleep(2000)
    await node.delete('a Lord of the Rings fanatic')
    await node.type('a musician')
    await sleep(2000)
    await node.delete('a musician')
    await node.type('a DIY advocate')
    await sleep(2000)
    await node.delete('a DIY advocate')
    await node.type('non-confrontational')
    await sleep(2000)
    await node.delete('non-confrontational')
    await node.type('a son')
    await sleep(2000)
    await node.delete('a son')
    await node.type('a husband')
    await sleep(2000)
    await node.delete('a husband')
    await node.type('a father')
    await sleep(2000)
    await node.delete('a father')
    await node.type('a developer')
    await sleep(2000)
    await node.delete('a developer')
    await node.type('a designer')
    await sleep(2000)
    await node.delete('a designer')
  }
}


// Source code

const sleep = time => new Promise(resolve => setTimeout(resolve, time))

class TypeAsync extends HTMLSpanElement {
  get text () {
    return this.innerText
  }
  set text (value) {
    return this.innerHTML = value
  }

  get typeInterval () {
    const randomMs = 100 * Math.random()
    return randomMs < 50 ? 10 : randomMs
  }

  async type (text) {
    for (let character of text) {
      this.text += character
      await sleep(this.typeInterval)
    }
  }

  async delete (text) {
    for (let character of text) {
      this.text = this.text.slice(0, this.text.length -1)
      await sleep(this.typeInterval)
    }
  }
}

customElements.define('type-async', TypeAsync, { extends: 'span' })


init()
