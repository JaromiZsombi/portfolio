const urlData = 'https://raw.githubusercontent.com/JaromiZsombi/portfolio/refs/heads/master/data.json'

getData(urlData, renderWorks)

function renderWorks(data){
	console.log(data)
	document.getElementById('work').innerHTML=''
	data.forEach(obj=>{
		document.getElementById('work').innerHTML+=`
		
		
		<div class="card">
			<div class="kep_hely"><img class="work_images" src="${obj.photo_url}" alt="photo"></div>
			<div class="container2">
    				<h4><b>${obj.title}</b></h4>
    				<p>${obj.topics}</p>
  				</div>
  			
  			
		</div>
		`

		//id = ${obj.id}, title = ${obj.title}, photo = <img src="${obj.photo_url}" alt="">, repo-link = ${obj.repo_link}, topics = ${obj.topics}, site-link = ${obj.site_link}
	})
}

