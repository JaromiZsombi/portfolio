const urlData = 'https://raw.githubusercontent.com/JaromiZsombi/portfolio/refs/heads/master/data.json'

getData(urlData, renderWorks)

function renderWorks(data){
	document.getElementById('work').innerHTML=''
	data.forEach(obj=>{
		let temakorok = "";
		obj.topics.forEach(x => {
			temakorok += `<li>${x}</li>`
		})

		document.getElementById('work').innerHTML+=`
		
		
		<div class="card">
			<div class="kep_hely"><img class="work_images" src="${obj.photo_url}" alt="photo"></div>
			<div class="container2">
    				<h4><span>${obj.title}</span></h4>
					<p>Témakörök</p>
    				<ul id="workitems">
					${temakorok}
					</ul>
					<a target="_blank" href="${obj.repo_link}"><p class="buttonok">Github link</p></a>
					<a target="_blank" href="${obj.site_link}"><p class="buttonok">Weboldal link</p></a>
  				</div>
			</div>
		`

		//id = ${obj.id}, title = ${obj.title}, photo = <img src="${obj.photo_url}" alt="">, repo-link = ${obj.repo_link}, topics = ${obj.topics}, site-link = ${obj.site_link}
	})
}

