const BlogPageLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
      <div className="w-full">
          {children}
      </div>
     );
  }
   
  export default BlogPageLayout;