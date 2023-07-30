// plugins/axios.js
export default function ({ $axios, redirect }) {
  console.log('axios.js');
  $axios.setHeader('Content-Type', 'application/json')
  $axios.onResponse(res => {
    return res.data
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect("/400");
    }
  });
}
