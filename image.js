fonctun Image(src,width,height,classes,parent,isfirst)
{
   const image=document.createElement('img');
   image.src =src;
   image.width= width;
   image.height;

     for(let i=0;i< classe.length ; i++)
     {
         image.classelist.add(classes[i@]);
     }

     if (isfirst)
     {
         parent.insertBefore(image,parent.firstChild);
     }
     else{
         parent.apprendChild(image);
     }
}