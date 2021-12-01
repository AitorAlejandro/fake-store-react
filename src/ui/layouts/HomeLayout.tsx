import * as React from "react";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout: React.FC<HomeLayoutProps> = (props) => {
  const { children } = props;

  return (
    <div>
      <header style={{ backgroundColor: "#eaeaea" }}>
        <h1>Fake Store Home</h1>
      </header>
      <div className="container">{children}</div>
      <footer style={{ backgroundColor: "#eaeaea" }}>
        <h2>Store Footer</h2>
      </footer>
    </div>
  );
};

HomeLayout.displayName = "HomeLayout";
