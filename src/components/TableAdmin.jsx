import React,{Fragment,useState} from 'react'
import Layout from '../layout/Layout'
import { Modal } from './Modal'

export default function TableAdmin() {

  const [visible,setVisible] = useState(true)

  
  return (
    <Layout>
      <Fragment>
      <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-dark-purple dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-dark-purple dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Username
                      </th>
                      
                      <th scope="col" className="px-6 py-3">
                          Password
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Role
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-white dark:bg-blue-200">
                      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-black">
                          yuni
                      </th>
                      <td className="px-6 py-4 text-black">
                          yunicantik
                      </td>
                      <td className="px-6 py-4 text-black">
                          Admin
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>

      <button onClick={()=>{setVisible(true)}}>buka</button>

      <Modal visible={visible} setVisible={setVisible}/>
      </Fragment>

    </Layout>
      
    
  )
}
