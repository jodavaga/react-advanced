import Menu from "../molecules/Menu/Menu";

const WithDashboardLayout = () => (Component: any) => {
  return (componentProps: any) => {
    return (
      <div className="dashboard-layout">
        <Menu />

        <Component {...componentProps} />
      </div>
    );
  };
};

export default WithDashboardLayout;
