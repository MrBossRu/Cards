
export const state = {
    path : '',
    data : {},
    ReRender : () => {},
    Init : () => {
        return {...state}
    },
    SetData : function (data) {
      this.data = data
      this.isLoading = false
      this.ReRender()

    },
    Update : async function (url, method = 'GET', body = null, headers = {}, path) {
        try {
            this.isLoading = true
            this.path = path
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            const response = await fetch(url, {method, body, headers})
            const rdata = await response.json()
            if (!response.ok) {
                throw new Error(rdata.message || 'Что-то пошло не так')
            }
            this.SetData(rdata)
            this.isLoading = false
        } catch (e) {
            console.log(e)
            this.isLoading = false
            throw e
        }
    },
    Send : async function(url, method = 'GET', body = null, headers = {}){
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            const response = await fetch(url, {method, body, headers})
            const rdata = await response.json()
            if (!response.ok) {
                throw new Error(rdata.message || 'Что-то пошло не так')
            }
        } catch (e) {
            console.log(e)
            throw e
        }
    },
    isLoading: false
}