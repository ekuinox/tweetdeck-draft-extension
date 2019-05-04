import { add_buttons } from './add_buttons'

window.addEventListener('load', () => {
    setTimeout(() => {
        add_buttons()
        
        const element = document.getElementsByClassName('js-show-drawer js-show-tip Button Button--primary Button--large tweet-button margin-t--8 margin-b--10')[0] as HTMLButtonElement
        element.onclick = () => {
            setTimeout(add_buttons, 200) // 雑ァ！
        }

    }, 1000) // 雑にいくぞ
}, false)
