import React from 'react'

const stockTable = () => {
  return (
    <>
    <h3>Top selling stock</h3>
    <table>
        <thead>
            <th>Name</th>
            <th>Sold Quantity</th>
            <th>Remaining Quantity</th>
            <th>Price</th>
        </thead>
        <tbody>
            <tr>
                <td>Surf Excel</td>
                <td>30</td>
                <td>12</td>
                <td>100$</td>
            </tr>
            <tr>
                <td>Rin</td>
                <td>25</td>
                <td>15</td>
                <td>80$</td>
            </tr>
            <tr>
                <td>Parle G</td>
                <td>18</td>
                <td>26</td>
                <td>99$</td>
            </tr>
                 
        </tbody>
    </table>
    </>
  )
}

export default stockTable