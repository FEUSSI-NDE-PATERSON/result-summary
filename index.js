let values = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg",
      "color":"#ff5757",
      "bg":"#ffcccc"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg",
      "color":"#ffb01f",
      "bg":"#ffe7bb"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg",
      "color":"#00bd91",
      "bg":"#e5f8f4"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg",
      "color":"#1125d4",
      "bg":"#e7e9fa"
    }
  ]
  let result = document.querySelector('#result')
  let k =""
  values.map((value)=>{
    k += `
    <div class="flex flex-col w-[250px]">
    <div class="flex flex-col">
    <div class="flex justify-between text-[${value.color}]  p-3 my-3 bg-[${value.bg}]"> 
    <div class="flex " >
     <img src="${value.icon}" alt="img not supported" />
     <p class="ml-3">${value.category}</p>
     </div>
     <div>
     <p class="text-[#303b5a]">${value.score} / <span class="text-[#c8c7ff] font-bold">100</span></p>
     <div>
     </div>
   </div>
    </div>
    
    
    `
    result.innerHTML = k
})