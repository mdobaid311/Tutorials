type headingProps = {
  children: string;
};

const Heading = ({ children }: headingProps) => {
  return <div>{children}</div>;
};

export default Heading;
