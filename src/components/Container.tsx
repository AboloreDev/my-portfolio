interface ComponentProps {
  children: React.ReactNode;
}

const Container = ({ children }: ComponentProps) => {
  return <div className="container max-w-7xl mx-auto">{children}</div>;
};

export default Container;
