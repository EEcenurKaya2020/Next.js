import Navigation from "./navigation";

export default function Layout({children}){
    return <div>
        <Navigation/>

        <main>
            {children}
        </main>

        <footer>
           Design by Ece
        </footer>
    </div>
}