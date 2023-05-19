import axios from 'axios'

export function getIPv4Address(hostname) {
    let ip = "";
    const pattern = /^\d+\.\d+\.\d+\.\d+$/;
    if (hostname.match(pattern)) {
        ip = hostname;
    } else {
        const regex = /(\d+\.\d+\.\d+\.\d+)/gm;
        const match = regex.exec(hostname);
        if (match && match.length > 1) {
            ip = match[1];
        }
    }
    return ip;
}

export function getReqUrlAddress() {
    let local_ip="http://localhost:8001"
    return axios.get(`${local_ip}/api/get_req_url/`)
    .then(response => {
      return response.data.req_url; // change 'ip_address' to 'req_url'
    })
    .catch(error => {
      console.log(error);
    });
}
