import Footer from "@/components/footer";
import { Header } from "@/components/header";

const HomepageLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
      <div className="h-full">
        <Header />
        <main className="md:pl-56 pt-[80px] h-full">
          {children}
        </main>
        <Footer/>
      </div>
     );
  }
   
  export default HomepageLayout;