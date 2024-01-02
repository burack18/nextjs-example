export default interface NavPage{
    name:string,
    url:string,
    active:boolean,
    type:NavPageType
}
export enum NavPageType{
    'MyRecipes',
    'FavoriteRecipes',
    'TrendRecipe'
}