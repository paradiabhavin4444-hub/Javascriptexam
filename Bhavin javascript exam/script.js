let formdata = document.querySelector('#formdata')
let area = document.querySelector('#area')
let clientName = document.querySelector('#Details')
let illness = document.querySelector('#Illness')
let client = JSON.parse(localStorage.getItem('client')) || []

formdata.addEventListener('submit', (e) => {
    e.preventDefault()

    const New = {
        clientName: clientName.value,
        details: illness.value
    }

    client.push(New)
    refresh()
    formdata.reset()
})


function show() {
    let output = ""

    client.forEach((blog, index) => {
        output += `
            <tr>
                <td>${index + 1}</td>
                <td>${blog.clientName}</td>
                <td>${blog.illness}</td>
                <td>
                    <button onclick="present(${index})" class="btn btn-success">Present</button>
                    <button onclick="updateClient(${index})" class="btn btn-warning">Update</button>
                    <button onclick="trash(${index})" class="btn btn-danger">Absent</button>
                </td>
            </tr>
        `
    })

    document.querySelector('#show').innerHTML = output
}

function trash(index) {
    if (confirm("Do you want to delete this record?")) {
        client.splice(index, 1)
        refresh()
    }
}


function refresh() {
    localStorage.setItem('client', JSON.stringify(client))
    show()
}
show()
