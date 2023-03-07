// import { EllipsisVerticalIcon, QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import { MoreOutlined } from '@ant-design/icons';
import { Menu, Space, Dropdown, Button } from "antd";
import { FolderViewOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import {  Modal } from 'antd';
import { useState } from "react";


const DropdownMenu = ({  }) => {
  
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  const onClick = async ({ key }) => {
    console.log(key, " = Keyeyyyyy");
    if (key === "1") {
      // try {
      //   const projectDelete = await projectService.deleteProject(CID);
      //   console.log(projectDelete, "statusss");
      //   if (projectDelete.status == 200) {
      //     openCustomNotificationWithIcon(
      //       "success",
      //       "Project has been deleted successfully"
      //     );
      //     dispatch(getProjects());
      //   }
      // } catch (error) {
      //   openCustomNotificationWithIcon(
      //     "error",
      //     error.messages
      //   );
      // }
    } else {
      
      setOpen(true)

    }
  };

  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: "Delete",
          key: "1",
          icon: <DeleteOutlined />,
        },
        {
          label: "View more",
          key: "2",
          icon: <FolderViewOutlined />,
        },
      ]}
    />
  );

  return (
    <>
    <Dropdown overlay={menu}>
      <a onClick={(e) => e.preventDefault()} >
        <Space>
        <MoreOutlined
            className="-ml-0.5 mr-2 h-4 w-4  text-gray-400"
            aria-hidden="true"
          />
        </Space>
      </a>
    </Dropdown>
     <Modal
     centered
      
        title="Project Details"
        open={open}
        onCancel={handleCancel}
        keyboard
        footer={<Button  onClick={handleCancel}>Cancle</Button>}
      >
        <div>
        {/* Project ID: <h3>{project.id}</h3> 
        Project Name: <h3>{project.name}</h3> 
        Project CID: <h3>{project.CID}</h3> 
        Project Size: <h3>{project.size}</h3> 
        Project Type: <h3>{project.type}</h3> 
        Project Created: <h3>{project.createdAt}</h3>  */}
        </div>
      </Modal>
      </>
  );
};

export default DropdownMenu;
