import { Button, Form, Input, message, Upload } from 'antd';
import Gradient from '../Components/Gradient';
import { PlusOutlined, LoadingOutlined, UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewGameThunk } from '../Slices/game.slice';
import { ClipLoader } from 'react-spinners';
import { CustomNotification } from '../utils/Notification';



const validateMessages = {
    required: "${label} is required!",
    types: {
      number: "${label} is not a valid number!",
      email: "${label} is not a valid email!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
};


const AddNewGame = ({ close }) => {
  const [loader, setLoader] = useState(false);
  const [imageData, setImageData] = useState({ preview: false, fileList: [] });
  const [inputData, setInputData] = useState({ name: '', gameLink: '', });
  const dispatch = useDispatch();
  
  const props = {
    name: 'gameIcon',
    headers: {
      authorization: 'authorization-text',
    },
    accept: "image/png, image/jpeg, image/jpg",
    maxCount: 1,
    // listType: "picture",
    beforeUpload: () => false,
    fileList: imageData.fileList,
    onChange: ({ fileList }) => { 
      setImageData(prev => ({ ...prev, fileList, preview: URL.createObjectURL(fileList[0]?.originFileObj) })); 
    },
  }

  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  const handleSubmit = () => {
    setLoader(true);
    if(imageData?.fileList?.length !== 0){
      inputData.gameIcon = imageData?.fileList[0]?.originFileObj;
    }
    console.log(inputData, "AddNewGame: inputData");
    dispatch(addNewGameThunk(inputData)).unwrap().then(x => {
      console.log("addNewGameThunk: X", x);
      setLoader(false);
      CustomNotification("success", x.msg);
      close();
    }).catch(e => {
      console.log(e);
      CustomNotification("error", "Error On Adding Game");
      setLoader(false);
    })
  }

  return (
    <div className="fixed top-0 left-0 z-50 bg-[#141627]/[0.96] text-white h-screen overflow-hidden  flex flex-col justify-center items-center">
      <div className='w-screen  flex flex-col justify-center items-center'>
          <div className="w-[534px] min-h-[430px] relative rounded-lg bg-[#41445F]/[0.31] flex flex-col items-center mt-12">
              <Gradient />
              <div className="h-[70px] w-[90%] rounded-t-lg bg-gradient-to-r border-b-2 border-[#616176] flex justify-between items-center">
                  <h1 className='mt-[10px] text-white text-xl font-semibold'>Add New Game</h1>
                  <div className='text-white cursor-pointer z-10 w-[20px]' onClick={close}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                  </div>
              </div>
              <div className="z-10 w-full flex flex-col items-center mb-8 mt-8">
                  <Form
                      className="space-y-6"
                      validateMessages={validateMessages}
                      onFinish={handleSubmit}
                      style={{ width: '100%', display:'flex', flexDirection: 'column', alignItems: 'center' }}
                      >
                      <div className='myForm w-[65%]'>
                          <Form.Item
                          size="small"
                          name="Name"
                          rules={[{ required: true, min: 6 }]}
                          labelCol={{ span: 30 }}
                          wrapperCol={{ span: 30 }}
                          >
                          <div className="rounded-lg">
                              <Input
                              size="large"
                              name="name"
                              onChange={handleInputChange}
                              placeholder="Name"
                              style={{ borderRadius: "5px", background: "transparent", color: 'white', border: '1px solid #616176' }}
                              />
                          </div>
                          </Form.Item>
                      </div>
                      <div className='myForm w-[65%]'>
                          <Form.Item
                          size="small"
                          name="Game Link"
                          rules={[{ required: true, min: 6 }]}
                          labelCol={{ span: 30 }}
                          wrapperCol={{ span: 30 }}
                          >
                          <div className="rounded-lg">
                              <Input
                              size="large"
                              name="gameLink"
                              onChange={handleInputChange}
                              placeholder="Game Link"
                              style={{ borderRadius: "5px", background: "transparent", color: 'white', border: '1px solid #616176' }}
                              />
                          </div>
                          </Form.Item>
                      </div>
                      <div className="flex items-center w-[65%]">
                        
                            <div className="flex justify-center items-center border border-dashed text-white border-[#616176] h-[130px] w-[130px]">
                                {imageData.preview ? (<img src={imageData.preview} alt="" />) : (<>Upload Image</>)}
                            </div>
                            <div className='flex flex-col items-start ml-8'>
                                <div className="mb-2 ant__btn">
                                <Form.Item
                                  size="small"
                                  name="gameIcon"
                                  rules={[{ required: true }]}
                                  labelCol={{ span: 30 }}
                                  wrapperCol={{ span: 30 }}
                                >
                                    <Upload maxCount={1} {...props} style={{ border: '1px solid #616176' }}>
                                        <Button>
                                            <span style={{ color: 'white' }}>Click to Upload</span>
                                        </Button>
                                    </Upload>
                                    </Form.Item>
                                </div>
                                <p className='text-white text-sm'>jpg, png. Max file size 2 mb</p>
                            </div>
                      </div>
                      
                      <div className="w-[65%]" style={{ marginTop: '40px' }}>
                          <button type="submit" className={` ${!imageData.preview ? "disabled":""} text-white z-10 cursor-pointer rounded-md py-3 min-w-[180px] w-full flex items-center justify-center bg-gradient-to-br from-[#4A3AFF] to-[#CC00FF] hover:from-[#3f31df] hover:to-[#ae3eca]`}>
                              Create
                              <span className='ml-3'>
                                <ClipLoader
                                    color={"black"}
                                    loading={loader}
                                    cssOverride={{ display: "block", margin: "0 auto", borderColor: "white" }}
                                    size={24}
                                />
                            </span>
                          </button>
                      </div>
                  </Form>
              </div>
          </div>
      </div>
    </div>
  )
}

export default AddNewGame