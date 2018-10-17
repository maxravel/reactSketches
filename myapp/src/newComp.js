import React from 'react';


//functional component - without state
const Newcomp = ({content}) =>{
// class Newcomp extends Component{
    // render(){
        //const {content} = props;
        const contentList = content.map(cont =>{
            return (
                <div className="newC" key={cont.id}>
                    <div>type: {cont.type}</div>
                    <div>gene: {cont.gene}</div>
                    <div>name: {cont.name}</div>
                </div>
            )
        });
        return(
            <div className="content-list">
                {contentList}
            </div>
        )
    // }
// } 
}


export default Newcomp;


        // const {type,gene,name} = this.props;
        // return(
        //     <div className="newC">
        //         <div>type: {type}</div>
        //         <div>gene: {gene}</div>
        //         <div>name: {name}</div>
        //     </div>
        // )