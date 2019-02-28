const fetchServices = async callback => {
    fetch('//localhost:60850/api/services')
        .then(response => {
            return response
                ? response.json()
                : 'Something went wrong getting the response';
        })
        .then(function(services) {
            if (callback && typeof callback === 'function') {
                callback(services);
            }
        })
        .catch(console.log);
};

export { fetchServices };
