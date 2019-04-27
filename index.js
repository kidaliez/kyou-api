const request = require('request');
const fs = require('fs');
let results = [];

request.get('https://production.api.kyou.id/api/items/search/paginate?query=PVC%20Figure&keyword=PVC%20Figure&page=', function(err, resp, body){
  const data = JSON.parse(body);
  data.data.forEach((result) => {
    results.push({
      name: result.name,
      character_name: result.character_name,
      description: result.description,
      price: result.get_info.fp,
      stock: result.stock,
      weight: result.weight,
      thumbnail: result.main_image.thumbnail,
      image: result.main_image.path,
      status: result.status,
    })
  });
  fs.writeFile('result.json', JSON.stringify(results, null, 4), (err) => {
    if(err) throw err;
    console.log('success write file, check result.json')
  })
});