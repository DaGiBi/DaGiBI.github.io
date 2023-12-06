import Footer from "@/components/footer";
import { Header } from "@/components/header";

const HomepageLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
      <div className="h-full">
        <main className="flex flex-col min-h-screen justify-between">
        <Header />
          {children}
        <Footer/>
        </main>
      </div>
     );
  }
   
  export default HomepageLayout;