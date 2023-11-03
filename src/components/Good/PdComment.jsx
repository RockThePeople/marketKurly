export default function PdInfo({Comments}) {

    const show = Object.keys(Comments).length;    

    return (
        <div>
            <p style={{fontSize:"15px", color:"gray", textAlign:"left"}}>
                💬 {show} 
            </p>
        </div>
    );
}