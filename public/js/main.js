let notFakeEntries = document.querySelectorAll('.not-fake')
let fakeEntries = document.querySelectorAll('.fake')
let trashcans = document.querySelectorAll('.fa-trash-can')

notFakeEntries.forEach(entry => entry.addEventListener('click', markFake))
fakeEntries.forEach(entry => entry.addEventListener('click', unmarkFake))
trashcans.forEach(can => can.addEventListener('click', deleteEntry))

async function markFake() {
    try {
        let entryId = this.parentNode.dataset.id
        const response = await fetch('alliance/markFake', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                id: entryId
            })
        })

        const data = await response.json()
        console.log(data)
        location.reload()

    } catch (err) {
        console.log(err)
    }
}

async function unmarkFake() {
    try {
        let entryId = this.parentNode.dataset.id

        const response = await fetch('alliance/unmarkFake', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                id: entryId
            })
        })

        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

async function deleteEntry() {
    try {
        let entryId = this.parentNode.parentNode.dataset.id
        console.log(entryId)
        const response = await fetch('alliance/deleteEntry', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                id: entryId
            })
        })

        const data = await response.json()
        console.log(data)
        location.reload()

    } catch (err) {
        console.log(err)
    }
}