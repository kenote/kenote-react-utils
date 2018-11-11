interface Appliction extends Window {
  start?: Function
}

(function(): void {
  let app: Appliction = window
  let render: number = setTimeout( function (): void {
    app.start()
    clearTimeout(render)
    render = null
  }, 500)
})()

document.getElementById('root').innerHTML = `
  <div class="initial-pending">
    <div class="progress-span-initial">Loading...</div>
    <div class="layout-progress-bar">
      <div class="progress-bar-container">
        <div class="progress-bar-pending-initial" />
      </div>
    </div>
  </div>
`