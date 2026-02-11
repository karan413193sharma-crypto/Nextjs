export const  Card = ({children}:{children:React.ReactNode})=>{
   const cardStyle = {
  width: "300px",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#ffffff",
  fontFamily: "Arial, sans-serif",
  color:"black"
};
    return <div style={cardStyle}>{children}</div>
}