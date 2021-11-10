import "./stylee.css";
const Dp = (data: any) => {
  const { image, label,mic } = data;
  return (
    <>
      <div className="dplabel">
        <div style={{display:"flex",flexDirection:"column",padding:"10px"}}>
            
            
          <div className="imgplate">
          <div className="svg-plate">
            <img className="svg" src={mic} alt="mic" />
            </div>
            <img  className="imga" src={image} alt="dp" />
            <div className="label">
              <span>{label}</span>
            </div>
          </div>

          
        </div>
        <div style={{display:"flex",flexDirection:"column",padding:"10px"}}>
            
            
          <div className="imgplate">
          <div className="svg-plate">
            <img className="svg" src={mic} alt="mic" />
            </div>
            <img  className="imga" src={image} alt="dp" />
            <div className="label">
              <span>{label}</span>
            </div>
          </div>

          
        </div>
        {/* <div style={{marginTop:"20px"}} >
          <div className="imgplate">
            <img src={image} alt="dp" />
            <div className="label">
              <span>{label}</span>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div style={{ margin: '10px' }}>
            <div style={{ padding: '20px', border: '1px solid silver' }}>
                <img width={100} src={image} alt={label} />
            </div>
            <div style={{ marginTop: '20px' }}>
                
            </div>
        </div> */}
    </>
  );
};
export default Dp;
