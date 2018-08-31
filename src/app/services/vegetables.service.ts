import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class VegetablesService {


	private vegetablesList:Vegetable[] =[
	{
		id: 0,
		name: "Corn",
		abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae.",
		img: "assets/img/vegetable-03.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	},
	{
		id: 1,
		name: "Cucumber",
		abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae.",
		img: "assets/img/vegetable-07.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	},
	{
		id: 2,
		name: "Carrot",
		abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae.",
		img: "assets/img/vegetable-08.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	},
	{
		id: 3,
		name: "Eggplant",
		abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae.",
		img: "assets/img/vegetable-10.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	},
	{
		id: 4,
		name: "Red capsicum",
		abstract: "Cconsectetur adipisicing elit. Magnam officiis ex molestias.",
		img: "assets/img/vegetable-12.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	},
	{
		id: 5,
		name: "Lettuce",
		abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae.",
		img: "assets/img/vegetable-14.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	},
	{
		id: 6,
		name: "Mushroom",
		abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae.",
		img: "assets/img/vegetable-17.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	},
	{
		id: 7,
		name: "Tomato",
		abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae.",
		img: "assets/img/vegetable-18.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	},
	{
		id: 8,
		name: "Potato",
		abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae.",
		img: "assets/img/vegetable-19.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	},
	{
		id: 9,
		name: "Chilli",
		abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae.",
		img: "assets/img/vegetable-22.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	},
	{
		id: 10,
		name: "Garlic",
		abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae.",
		img: "assets/img/vegetable-23.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	},
	{
		id: 11,
		name: "Onion",
		abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae.",
		img: "assets/img/vegetable-25.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	}
	
	];
	constructor() { }

	getVegetables(){
		return this.vegetablesList;
	}

	getVegetable(id){

		for(let x of this.vegetablesList){
			if(x.id == id){
				return x;
			}
		}

	}

	listRandom:Vegetable[] = [];
	getRandomVegetables(idx:number){

		while(this.listRandom.length < 3){
			let random = Math.floor(Math.random()*(11)+0);

			// To not add the same element
			if(random != idx){
				if(!this.isInTheArrayVegetable(this.listRandom, this.vegetablesList[random])){
					this.listRandom.push(this.vegetablesList[random]);
					// console.log("This was added:", this.vegetablesList[random].id,this.vegetablesList[random].name);
				}else{
					console.log("Do nothing");
				}
			}
		}
		return this.listRandom; 
	}

	isInTheArrayVegetable(listRandom, vegetable){
		let isIn:boolean = false;

		for(var i=0; i< listRandom.length; i++){
			if(listRandom.length != 0){
				if(vegetable.id==listRandom[i].id){
					// console.log("Don´t add it");
					return true;
					break;
				}else if(vegetable.id!=listRandom[i].id){
					// console.log("Add it");
					isIn = false;
				}
			}
		}
		return isIn;
	}

	clearRandomList(){
		this.listRandom = [];
	}

	findVegetables(txt:string){
		let listResult:any[] = []; 

		txt = txt.toLowerCase(); 

		for( let x of this.vegetablesList){ 
			
			let name = x.name.toLowerCase(); 

			if(name.indexOf(txt) >=0){ 
				listResult.push(x); 
			}

		}
		console.log(listResult);
		
		return listResult;
	}

}


export interface Vegetable {
	id: number,
	name: string,
	abstract: string,
	img: string,
	description,
	status: boolean
}