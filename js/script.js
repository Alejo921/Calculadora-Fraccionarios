function sumarfraccionario()
  {
   var f1n= parseInt(document.forms[0].f1n.value);
   var f1d= parseInt(document.forms[0].f1d.value);
   var f2n= parseInt(document.forms[0].f2n.value);
   var f2d= parseInt(document.forms[0].f2d.value);
   var f1= new Fraccionario(f1n,f1d);
   var f2= new Fraccionario(f2n,f2d);
   var f3= f1.Sumar(f2);
   alert('f3=' + f3.Num + '/' + f3.Den);
   delete f1;
   delete f2;
   delete f3;
   document.close();
  }     
  function restarfraccionario()
  {
   var f1n= parseInt(document.forms[0].f1n.value);
   var f1d= parseInt(document.forms[0].f1d.value);
   var f2n= parseInt(document.forms[0].f2n.value);
   var f2d= parseInt(document.forms[0].f2d.value);
   var f1= new Fraccionario(f1n,f1d);
   var f2= new Fraccionario(f2n,f2d);
   var f3= f1.Restar(f2);
   alert('f3=' + f3.Num + '/' + f3.Den);
   delete f1;
   delete f2;
   delete f3;
   document.close();
  } 
  function multipfraccionario()
  {
   var f1n= parseInt(document.forms[0].f1n.value);
   var f1d= parseInt(document.forms[0].f1d.value);
   var f2n= parseInt(document.forms[0].f2n.value);
   var f2d= parseInt(document.forms[0].f2d.value);
   var f1= new Fraccionario(f1n,f1d);
   var f2= new Fraccionario(f2n,f2d);
   var f3= f1.Multiplicar(f2);
   alert('f3=' + f3.Num + '/' + f3.Den);
   delete f1;
   delete f2;
   delete f3;
   document.close();
  }
  function dividirfraccionario()
  {
   var f1n= parseInt(document.forms[0].f1n.value);
   var f1d= parseInt(document.forms[0].f1d.value);
   var f2n= parseInt(document.forms[0].f2n.value);
   var f2d= parseInt(document.forms[0].f2d.value);
   var f1= new Fraccionario(f1n,f1d);
   var f2= new Fraccionario(f2n,f2d);
   var f3= f1.Dividir(f2);
   alert('f3=' + f3.Num + '/' + f3.Den);
   delete f1;
   delete f2;
   delete f3;
   document.close();
  }
  function Fraccionario(N,D)
  {
   this.Num=N;
   this.Den=D;
   this.Sumar=Sumar;
   this.Restar=Restar;
   this.Multiplicar=Multiplicar;
   this.Dividir=Dividir;
   this.Simplificar=Simplificar;
  } 
  function Sumar(F)
  {
   var R= new Fraccionario(this.Num * F.Den + this.Den * F.Num, this.Den * F.Den);
   R.Simplificar();
   return R;
  }
  function Restar(F)
  {
   var R= new Fraccionario(this.Num * F.Den - this.Den * F.Num, this.Den * F.Den);
   R.Simplificar();
   return R;
  }
  function Multiplicar(F)
  {
   var R= new Fraccionario(this.Num * F.Num, this.Den * F.Den);
   R.Simplificar();
   return R;
  }
  function Dividir(F)
  {
   var R= new Fraccionario(this.Num * F.Den, this.Den * F.Num);
   R.Simplificar();
   return R;
  }
  function Simplificar()
  {
   var M = mcd(this.Num,this.Den);
   this.Num /= M;
   this.Den /= M;
  }
  function mcd(a,b)
  {
   var r = a % b;
   if(r==0)
   {
    return b;
   }
   else
   {
    return mcd(b,r);
   }
  }
