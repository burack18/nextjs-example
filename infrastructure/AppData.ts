import NavPage, { NavPageType } from "@/types/infrastructure/NavPage"

interface IAppData {
    navPages: NavPage[]
}
class AppData implements IAppData {
    timestampCreated:Date=new Date();
    navPages: NavPage[] = [
        {
            name: 'My Recipes',
            url: '/recipes/myrecipes',
            active: false,
            type: NavPageType.MyRecipes
        },
        {
            name: 'Favorite Recipes',
            url: '/recipes/favorite',
            active: false,
            type: NavPageType.FavoriteRecipes
        },
        {
            name: 'Trend Recipes',
            url: '/recipes/trend',
            active: false,
            type: NavPageType.TrendRecipe
        }
    ];
    constructor() {
        this.getUrlByType=this.getUrlByType.bind(this);
    }
    
    getUrlByType(pageType: NavPageType) {
        return this.navPages.find(x=>x.type==pageType)?.url || '/';
    }
    get getNavPages(){
        return this.navPages;
    }
    static instance:AppData;
    static getInstance():AppData{
        if(AppData.instance){
            return AppData.instance;
        }
        
        return AppData.instance=new AppData();
    }
}


export default AppData.getInstance();