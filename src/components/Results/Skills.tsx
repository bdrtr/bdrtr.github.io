export default function Skill({skill} : {skill : string | undefined}) {



    return (<div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">{skill}</div></div>);
}