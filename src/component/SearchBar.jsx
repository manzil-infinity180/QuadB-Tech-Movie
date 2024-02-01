import style from "./SearchBar.module.css"
export function SearchBar(){
return <input
className={style.search}
type="text"
placeholder="Search movies..."
/>
}