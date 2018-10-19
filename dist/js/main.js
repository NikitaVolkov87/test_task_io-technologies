function fillInValues(){
	document.getElementById('githubUser').value = "thoughtbot";
	document.getElementById('userRepo').value = "guides";
}

function formSubmit(link) {
	let userName = document.getElementById('githubUser').value;
	let userRepo = document.getElementById('userRepo').value;
	let requestLink = "";
	if (link) {
		requestLink = link;
	} else {
		requestLink = 'https://markuzone:records0@api.github.com/repos/'+userName+'/'+userRepo+'/commits';
	}
	const req = new XMLHttpRequest();
	req.addEventListener("load", showCommits );
	req.open("GET", requestLink );
	req.send();
	req.onreadystatechange = function() {
		if(this.readyState == this.HEADERS_RECEIVED) {
			let responseLinks = req.getResponseHeader("Link").split(", ");
			responseLinks = responseLinks.map( item => item.split("; ") );
			let linksObj = {};
			let navLinks = "";
			responseLinks.forEach( (item,i) => {
				linksObj[item[1].replace(/rel=|"/gi,"")] = item[0];
				navLinks += `<li><a href="#" onclick="changePage('${item[0].slice(1,item[0].length-1)}')" > ${item[1].replace(/rel=|"/gi,"")} </a></li>`
			});
			// console.log(navLinks);
			document.getElementById("pageNav").innerHTML = navLinks;
		}
	}
}

function changePage(link){
	formSubmit(link);
}

function showCommits(event, data) {
	response = JSON.parse(this.responseText);
	const repoList = `<ul>${response.map((item,i) => '<li>' + '<a href="#" onclick="revealDetails('+i+')" >' + (i+1) + '. ' + item.sha.slice(0,5) + ' - ' + item.commit.message + '</li>' + '</a>').join('')}</ul>`
	document.getElementById("commits").innerHTML = repoList
}

function revealDetails(i) {
	document.getElementById('details').innerHTML = JSON.stringify(response[i], null, 4);
	alert(JSON.stringify(response[i], null, 4));
}

