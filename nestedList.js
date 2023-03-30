import Table from 'react-bootstrap/Table';
function NestedList() {
    let Students = [
        {
            name: "sumit", email: "Sumit@gmail.com", address: [{ houseNumber: "2344", city: "delhi", pincode: "3663", district: "samastipur" },
            { houseNumber: "2344", city: "delhi", pincode: "3663", district: "samastipur" },
            { houseNumber: "2344", city: "delhi", pincode: "3663", district: "samastipur" },
            { houseNumber: "2344", city: "delhi", pincode: "3663", district: "samastipur" },
            { houseNumber: "2344", city: "delhi", pincode: "3663", district: "samastipur" }]
        },
        {
            name: "sandeep", email: "sandeep@gmail.com", address: [{ houseNumber: "3646", city: "patna", pincode: "9860", district: "Hazipur" },
            { houseNumber: "3646", city: "patna", pincode: "9860", district: "Hazipur" },
            { houseNumber: "3646", city: "patna", pincode: "9860", district: "Hazipur" },
            { houseNumber: "3646", city: "patna", pincode: "9860", district: "Hazipur" },
            { houseNumber: "3646", city: "patna", pincode: "9860", district: "Hazipur" }]
        },
        {
            name: "rohan", email: "rohan@gmail.com", address: [{ houseNumber: "7038", city: "gwalior", pincode: "7691", district: "datia" },
            { houseNumber: "7038", city: "gwalior", pincode: "7691", district: "datia" },
            { houseNumber: "7038", city: "gwalior", pincode: "7691", district: "datia" },
            { houseNumber: "7038", city: "gwalior", pincode: "7691", district: "datia" },
            { houseNumber: "7038", city: "gwalior", pincode: "7691", district: "datia" }]
        },
        {
            name: "Amit", email: "amit@gmail.com", address: [{ houseNumber: "5791", city: "lucknow", pincode: "3663", district: "jhansi" },
            { houseNumber: "5791", city: "lucknow", pincode: "3663", district: "jhansi" },
            { houseNumber: "5791", city: "lucknow", pincode: "3663", district: "jhansi" },
            { houseNumber: "5791", city: "lucknow", pincode: "3663", district: "jhansi" },
            { houseNumber: "5791", city: "lucknow", pincode: "3663", district: "jhansi" }]
        }]
    return (
        <div>
            <h1>Students List:</h1>
            <Table border={1}>
                <tbody>
                    <tr key="1">
                        <th>S.N</th>
                        <th>name</th>
                        <th>email</th>
                        <th>address</th>
                    </tr>
                    {
                        Students.map((item,i) => {
                            return <tr key="3">
                                <td>{i+1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                <Table border={1} variant="dark">
                                   <tbody>
                                    {
                                        item.address.map((data) => {
                                            return <tr>
                                                <td>{data.houseNumber}</td>
                                                <td>{data.city}</td>
                                                <td>{data.pincode}</td>
                                                <td>{data.district}</td>
                                            </tr>

                                        })
                                    }
                                     </tbody>
                                      </Table>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </div>
    )

}
export default NestedList