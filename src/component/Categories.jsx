import React from 'react';
import './categories.css';

function Categories() {
    const Category = [
    {
        image:"https://png.pngtree.com/png-vector/20230905/ourmid/pngtree-composition-with-grocery-products-in-shopping-basket-diet-png-image_9948113.png",   name:"GROCERY"
    },
    {
        image:"https://img.freepik.com/premium-vector/vector-illustration-set-clothes-fashion-design-isolated-collection-apparel-textile-cloth_1013341-516025.jpg",
        name:"CLOTHING"
    },
    {
        image:"https://content3.jdmagicbox.com/comp/rajkot/f2/0281px281.x281.140226113125.n1f2/catalogue/real-senitation-kalawad-road-rajkot-bathroom-accessory-distributors-j4qk62.jpg",
        name:"SANITATION"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl-g8Wh6XyXqoPb710U7j2vcyH-2RdtKgOeQ&s",
        name:"ELECTRONICS"
    },
    {
        image:"https://www.eshoper.in/wp-content/uploads/2022/08/IMG-20220829-WA3870.jpg",
        name:"JEWELLERY"
    },
    {
        image:"https://www.khaticraft.com/cdn/shop/files/Set_161734069_2048px_lbfgt.png?v=1696399943&width=2048",
        name:"FURNITURE"
    },
    {
        image:"https://5.imimg.com/data5/CT/YG/IJ/SELLER-13685268/stationery-500x500.png",
        name:"STATIONARY"
    },
    {
        image:"https://okcredit-blog-images-prod.storage.googleapis.com/2020/12/footwear2.jpg",
        name:"MORE"
    },
    {
        image:"",
        name:"footwear"
    }

















]
  return (
    <>
    <div className="category">
        
            {Category.map((item)=>(
                <div id="items">
                    <img src={`${item.image}`} alt="img" />
                    <h5>{item.name}</h5>
                    {console.log(item.name)}
                    </div>    
                
            ))}
  

    </div>
    </>
  )
}

export default Categories;