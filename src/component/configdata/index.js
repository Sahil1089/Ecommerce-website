import { MdDashboard } from "react-icons/md";
import { RiAlignItemLeftLine } from "react-icons/ri";
import { FaCartArrowDown } from "react-icons/fa";

export const Adminsmenuitem = [
    {
        Id:'dashboard',
        label:'dashboard',
        path:"/admin/dashboard",
        icon:<MdDashboard />
    },
    {
        Id:'product',
        label:'products',
        path:"/admin/product",
        icon:<RiAlignItemLeftLine />
    },
    {
        Id:'orders',
        label:'Orders',
        path:"/admin/order",
       icon:<FaCartArrowDown />
    }




]

export const Addproducts = [
    {
        label:"title",
        name:"title",
        componenttype:"input",
        type:"text",
        placeholder:"enter product title"},

        {
            label:"discription",
            name:"discription",
            componenttype:"textarea",
            placeholder:"enter product discription"
        },{

            label:"category",
            name:"category",
            componenttype:"select",
            options:[
                {id:"men",label:"men"},
                {id:"women",label:"women"},
                {id:"kids",label:"kids"}
                , {id:"electronics",label:"electronics"}
                , {id:"jewellery",label:"jewellwery"}
            ]

        },
        {
            label:"brand",
            name:"brand",
            componenttype:"select",
            options:[
                {id:"nike",label:"nike"},
                {id:"addidas",label:"addidas"},
                {id:"puma",label:"puma"}
                , {id:"zara",label:"zara"}
                , {id:"siyaram",label:"siyaram"}
            ]

        },
        {
            label:"price",
            name:"price",
            componenttype:"input",
            type:"number",
            placeholder:"enter product price"},
            {
                label:"sale price",
                name:"sale price",
                componenttype:"input",
                type:"number",
                placeholder:"enter product sale price"},
                {
                    label:"stock",
                    name:"total stock",
                    componenttype:"input",
                    type:"number",
                    placeholder:"enter total stock"},


















]