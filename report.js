// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submmyfit" eventListener , or else you will get 0 marks

    let formtag=document.querySelector("form")
    formtag.addEventListener("submit",myfunction)

    function myfunction(event){
        event.preventDefault()
        let avatar=formtag.image.value
        let name=formtag.name.value
        let batch=formtag.batch.value
        let dsa=formtag.dsa.value
        let skill=formtag.cs.value
        let coding=formtag.coding.value

         let tr=document.createElement('tr')
        let td1=document.createElement("td")
         let img= document.createElement("img")
          td1.setAttribute("img",avatar)
           td1.append(img)

         let td2=document.createElement("td")
           td2.innerText=name
         let td3=document.createElement("td")
         td3.innerText=batch
         let td4=document.createElement("td")
         td4.innerText=dsa
         let td5=document.createElement("td")
         td5.innerText=skill
         let td6=document.createElement("td")
         td6.innerText=coding
         let td7=document.createElement("td")
         let obtainedmarks=Number(dsa)+Number(skill)+Number(coding)
         let percentage=(obtainedmarks/30)*100
         td7.innerText=percentage
         let td8=document.createElement("td")
         if(percentage<=50){
             td8.innerText="async"
             td8.style.backgroundColor="red"
         }else{
             td8.innerText="regular"
             td8.style.color="green"
         }
         let td9=document.createElement("td")
           td9.innerText="delete"
           td9.style.cursor="pointer"
           td9.style.backgroundColor="red"
           
            document.addEventListener("click",deleterow)

         tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9)
         document.querySelector("tbody").append(tr)
         
    }
    function deleterow(event){
        event.target.parentNode.remove()
    }


    
