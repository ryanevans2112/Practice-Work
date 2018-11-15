const api = axios.create({
    baseURL: 'url link with ip'
    headers: { 'authorization': 'name'}
    });

(async () => {

const res = await api.get('/clients');

const accounts = await api.get('/accounts/${res.data[0._id'])

{ 
this.setState({accounts: accounts.data});

})();

};


