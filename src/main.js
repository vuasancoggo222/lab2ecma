import '../style.css'
import Navigo from "navigo"
import HomePage from "./pages/home"
import AboutPage from "./pages/about"
import DetailsNewsPage from "./pages/detail"
const router = new Navigo("/",{linksSelector:"a"})
const print = (content) => {
    document.getElementById('app').innerHTML = content
}
router.on({
    "/": ()=>{
       print(HomePage.render())
    },
    "/about": () => {
        print(AboutPage.render())
    },
    "/news/:id":(value)=>{
     print(DetailsNewsPage.render(value.data.id))
    }
});

router.resolve()
