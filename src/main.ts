import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Türkiye'nin 20 yıldır çektiği acıların son bulmasına</h1>
    <div id="timer"></div>
    <hr/>
    <h2>Eğer gerçekten bir şeylerin değişmesini istiyorsanız</h2>
    <ol class="needs">
    <li>Oyunuzu atmayı</li>
    <li>Eğer fırsatınız varsa sandık müşahitliği yapmayı</li>
    </ol>
    <p class="dont-forget">Unutmayınız</p>
    <h3>Eğer web sitesinde değişiklik önermek istiyorsanız</h3>
    <a href="https://github.com/Uzay-Sakinleri/ne-kadar-kaldi-gitmelerine" class="github-icon" target="_blank"><i class="fa-brands fa-github"></i></a>
  </div>
`
