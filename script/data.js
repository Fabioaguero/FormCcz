function capdata(){

  ​      var dn = document.getElementById('dia')
        var res = document.getElementById('res')
        var n1 = Number(dn.value)
        var data = new Date()
        var mes = data.getMonth()
        var ano = data.getFullYear()
  
  ​      res.innerHTML = `o dia ${n1} do ${mes} de ${ano} ` 
  
  
  
  ​      if(n1 > 31){
  
  ​        window.alert("[ERROR] Verifique a data inserida!")
  
  ​      }
  
  ​    }