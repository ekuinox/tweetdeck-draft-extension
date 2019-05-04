/*

{
    "<user_id: string>": [
        {
            "text": "<tweet_draft_text>",
            "date": "<date_string>"
        }
        {
            ...
        }
    ]
    "<user_id: string>": [
        ...
    ]
    ...
}

*/

export interface Draft {
    text: string
    created_at: number
}

export const getUserDrafts = (user_id: string, callback: (drafts: Array<Draft>) => void) => {
    chrome.storage.local.get(user_id, items => {
        const user_data: Array<Draft> = items[user_id]
        callback(user_data)
    })
}

export const createNewDraft = (user_id: string, text: string) => {
    const new_draft: Draft = { text: text, created_at: Date.now() }
    chrome.storage.local.get(user_id, items => {
        if (items[user_id] instanceof Array) {
            const user_data: Array<Draft> = items[user_id]
            user_data.push(new_draft)
        } else {
            items[user_id] = [ new_draft ]
        }
        chrome.storage.local.set(items)
    })
}

export const removeDraft = (user_id: string, created_at: number) => {
    chrome.storage.local.get(user_id, items => {
        if (!(items[user_id] instanceof Array)) return
        const user_data: Array<Draft> = items[user_id]
        items[user_id] = user_data.filter(draft => draft.created_at !== created_at)
        chrome.storage.local.set(items)
    })
}

export const clear = () => {
    chrome.storage.local.clear()
}
