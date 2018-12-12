import axios from 'axios';

const users = (data) => {
  data.forEach((v,i) => v.id = ++i)
  data.forEach(v => v.name = v.name.first + ' ' + v.name.last)

  localStorage.setItem('data', JSON.stringify(data) );
}

const mounted = () => {
  axios
    .get(`https://randomuser.me/api/?results=20`)
    .then(response => users(response.data.results));
};
mounted()

export default mounted;