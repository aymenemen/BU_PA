import React from 'react'

const ClientList = (props) => {
  

    const sample=[
        {
          "name": "John Doe",
          "address": "123 Main Street",
          "email": "johndoe@example.com"
        },
        {
          "name": "Jane Smith",
          "address": "456 Elm Avenue",
          "email": "janesmith@example.com"
        },
        {
          "name": "Mike Johnson",
          "address": "789 Oak Drive",
          "email": "mikejohnson@example.com"
        }
      ]
  
    return (
    <>
    

<div className={`${props.className} relative overflow-x-auto `}>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Client Name
                </th>
                <th scope="col" className="px-6 py-3">
                    email
                </th>
                <th scope="col" className="px-6 py-3">
                    adresse
                </th>
                
            </tr>
        </thead>
        <tbody>
        {sample.map((item, index) => (
          <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.name}</td>
            <td className="px-6 py-4">{item.address}</td>
            <td className="px-6 py-4">{item.email}</td>
          </tr>
        ))}
        </tbody>
    </table>
</div>

    </>
  )
}

export default ClientList