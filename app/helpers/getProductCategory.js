const categoryColorMap = new Map()

categoryColorMap.set("Product Brand Review", "orange")
categoryColorMap.set("Product Durability", "green")
categoryColorMap.set("Product Features", "purple")
categoryColorMap.set("Product Efficiency", "grey");

const getProductCategory = (category)=> {
    return categoryColorMap.get(category)
}

export default getProductCategory;