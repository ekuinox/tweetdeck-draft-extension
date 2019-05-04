import { Draft, createNewDraft, getUserDrafts, clear, removeDraft } from './draft'

window.addEventListener('load', () => {
    setTimeout(() => {
        const button1 = document.createElement('button')
        button1.textContent = '下書きに保存'
    
        button1.onclick = () => {
            const textarea = <HTMLInputElement>document.getElementsByClassName('js-compose-text compose-text bg-color-twitter-white txt-size--14 scroll-v scroll-styled-v scroll-styled-h scroll-alt padding-a--0')[0]
            const selected_account: any = document.getElementsByClassName('js-account-item js-show-tip compose-account is-actionable is-selected  link-clean')[0]
            const account_key:string = selected_account.dataset.accountKey
            const user_id = account_key.replace('twitter:', '')
            if (textarea.value.length != 0) {
                createNewDraft(user_id, textarea.value)
                textarea.value = ''
            }
        }

        document.getElementsByClassName('cf margin-t--12 margin-b--30')[0].appendChild(button1)

        const button2 = document.createElement('button')
        button2.textContent = '下書き一覧'
        button2.onclick = () => {
            const selected_account: any = document.getElementsByClassName('js-account-item js-show-tip compose-account is-actionable is-selected  link-clean')[0]
            const account_key:string = selected_account.dataset.accountKey
            const user_id = account_key.replace('twitter:', '')
            getUserDrafts(user_id, console.log)
        }
        
        document.getElementsByClassName('cf margin-t--12 margin-b--30')[0].appendChild(button2)

    }, 1000) // 雑にいくぞ
}, false)
