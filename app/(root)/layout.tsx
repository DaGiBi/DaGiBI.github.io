import Footer from "@/components/footer";
import { Header } from "@/components/header";

const HomepageLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
      <div className="h-screen">
        <main className="flex flex-col min-h-screen justify-between radius-large">
          <Header />
          {children}
          <Footer/>
        </main>
      </div>
     );
  }
   
  export default HomepageLayout;