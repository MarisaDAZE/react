import React from 'react';
import ReactDOM from 'react-dom';


class Table extends React.Component{
    render(){
        let colNames=['A','B','C'];
        let jsonDatas=[1,2,3]
        return(
            <div>
            <h3>这是表格{this.props.name}</h3>
            <table>
                <tr>
                    {colNames.map(function(colname){
                      return <th> {colname} </th>
                    })}
                </tr>
                <tr>
                    {jsonDatas.map(function(colname){
                      return <th> {colname} </th>
                    })}
                </tr>
            </table>
            </div>
        )
    }

}

export default Table;