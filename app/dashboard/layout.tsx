import React from 'react'


const DashboardLayout = ({children,reviews,reveniew,users,login}:{
    children: React.ReactNode;
    reviews: React.ReactNode;
    reveniew: React.ReactNode;
    users: React.ReactNode;
    login:React.ReactNode;
}) => {
  const islogin=true;
  return islogin ? (
    <>  
 <div> {children}</div>
    <div>{reviews}</div>
    <div>{reveniew}</div>
    <div>{users}</div>
    <div>{login}</div>
    </>
  ):(login);
}

export default DashboardLayout
