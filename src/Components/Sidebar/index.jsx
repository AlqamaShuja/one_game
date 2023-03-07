import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  RxDashboard,
  RxDoubleArrowLeft,
  RxDoubleArrowRight,
} from "react-icons/rx";
import { RiSettings5Line } from "react-icons/ri";
import { IoWalletOutline ,IoDiamondOutline} from "react-icons/io5";
import { CgShoppingBag } from "react-icons/cg";
import { Layout, Menu, theme } from "antd";

const { Sider, Content } = Layout;

const Sidebar = ({ children, active, setActive }) => {
  console.log(active, "activveeeeeeeeee");
  const [collapsed, setCollapsed] = useState(true);
  const SidebarItems = [
    {
      label: collapsed ? <p className="text-center">DA</p> : <p>D-App</p>,
      className:
        "font-semibold text-[25px] !mt-[25%] !mb-16 text-center text-white	pointer-events-none",
    },
    {
      key: "1",
      className: `text-[20px] !mb-16 !rounded-none ${
        active === "1"
          ? "bg-sidebarSel bg-cover bg-no-repeat !shadow-lg !shadow-[#CC00FF] "
          : ""
      } !bg-transparent ${
        collapsed && active === "1"
          ? "!bg-circlebg !bg-contain bg-no-repeat !px-[15px] !mx-[15px] !shadow-none"
          : ""
      }  text-center  `,

      label: "Dashboard",
      link: "/dashboard",
      icon: <RxDashboard size={20} className="!ml-[-5px]" />,
      onClick: () => {
        setActive("1");
        navigate("/dashboard");
      },
    },
    {
      key: "2",
      className: `!disabled text-[20px] !mb-16 !rounded-none ${
        active === 2
          ? "bg-sidebarSel bg-cover bg-no-repeat !shadow-lg !shadow-[#CC00FF] "
          : ""
      } !bg-transparent ${
        collapsed && active === 2
          ? " bg-circlebg bg-contain bg-no-repeat !px-[15px] !mx-[15px] !shadow-none"
          : ""
      }  text-center  `,

      icon: <CgShoppingBag size={22} className="!ml-[-5px]" />,
      label: "Liquidity Pool",
    //   onClick: () => {
    //     setActive(2);
    //     navigate("/LiquidityPool");
    //   },
    },
    // {
    //   key: "3",
    //   className: `text-[20px] !mb-16 !rounded-none ${
    //     active === 3
    //       ? "bg-sidebarSel bg-cover bg-no-repeat !shadow-lg !shadow-[#CC00FF] "
    //       : ""
    //   } !bg-transparent ${
    //     collapsed && active === 3
    //       ? " bg-circlebg bg-contain bg-no-repeat !px-[15px] !mx-[15px] !shadow-none"
    //       : ""
    //   }  text-center  `,
    //   icon: <IoWalletOutline size={25} className="!ml-[-5px]" />,
      
    //   label: "Staking",
    //   onClick: () => {
    //     setActive(3);
    //     navigate("/Staking");
    //   },
    // },
    // {
    //   key: "4",
    //   className: `text-[20px] !mb-16 !rounded-none ${
    //     active === 4
    //       ? "bg-sidebarSel bg-cover bg-no-repeat !shadow-lg !shadow-[#CC00FF] "
    //       : ""
    //   } !bg-transparent ${
    //     collapsed && active === 4
    //       ? " bg-circlebg bg-contain bg-no-repeat !px-[15px] !mx-[15px] !shadow-none"
    //       : ""
    //   }  text-center  `,
    //   icon: <IoDiamondOutline size={25} className="!ml-[-5px]" />,
      
    //   label: "Gem Vault",
    //   onClick: () => {
    //     setActive(4);
    //     navigate("/GemVault");
    //   },
    // },
    {
      key: "5",
      className: `!disabled text-[20px] !mb-16 !rounded-none ${active === 5 ? "bg-sidebarSel bg-cover bg-no-repeat !shadow-lg !shadow-[#CC00FF] ": ""} !bg-transparent ${
        collapsed && active === 5
          ? " bg-circlebg bg-contain bg-no-repeat !px-[15px] !mx-[15px] !shadow-none"
          : ""
      }  text-center  `,
      icon: <RiSettings5Line size={25} className="!ml-[-5px]" />,
      
      label: "Settings",
    //   onClick: () => {
    //     setActive(5);
    //     navigate("/Settings");
    //   },
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          theme="dark"
          mode="inline"
          className=" min-h-screen max-h-full bg-sidebar-img bg-cover w-[220px]"
          defaultSelectedKeys={["1"]}
          items={SidebarItems}
        />
      </Sider>
      <Layout>
        <Content>
          <div className="absolute ">
            {React.createElement(
              collapsed ? RxDoubleArrowRight : RxDoubleArrowLeft,
              {
                className: collapsed
                  ? "trigger text-white mt-10 ml-3"
                  : "trigger text-white mt-10 ",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </div>
          <main>{children}</main>
        </Content>
      </Layout>
    </Layout>
  );
};

export { Sidebar };
