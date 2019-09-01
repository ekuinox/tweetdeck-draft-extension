import { Draft } from './draft'

export const draft_list = (drafts: Array<Draft>) => {

    const ul = document.createElement('ul')

    for (const draft of drafts) {
        const li = document.createElement('li')
        li.innerText = draft.text
        li.setAttribute('style', 'padding: 1px')

        ul.appendChild(li)
    }


    const modalDialogParentDiv = document.createElement('div')
    modalDialogParentDiv.setAttribute('style','position: absolute; width: 350px; border: 1px solid rgb(51, 102, 153); padding: 10px; background-color: #f0f8ff; z-index: 2001; overflow: auto; text-align: center; top: 149px; left: 497px;')

    const modalDialogSiblingDiv = document.createElement('div')

    const modalDialogTextDiv = document.createElement('div')
    modalDialogTextDiv.setAttribute('style' , 'text-align:center; color: black')

    modalDialogTextDiv.appendChild(ul)

    modalDialogSiblingDiv.appendChild(modalDialogTextDiv)
    modalDialogParentDiv.appendChild(modalDialogSiblingDiv)

    const closeButton = document.createElement('button')
    closeButton.innerText = 'close'
    closeButton.onclick = () => {
        document.body.removeChild(modalDialogParentDiv)
    }

    modalDialogParentDiv.appendChild(closeButton)

    document.body.appendChild(modalDialogParentDiv)
}
