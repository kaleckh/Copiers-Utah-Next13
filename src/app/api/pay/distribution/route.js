
import axios from 'axios';
import { NextResponse } from 'next/server'

export async function POST(req, res) {
    const newData = await req.json()

    const url = 'https://uat.portal.suppliesnet.net/PurchaseOrders/PurchaseOrder.asmx';

    const items = newData.cart.map((item, index) => {
        return ` 
        <dmi:PurchaseOrderLine>
            <dmi:Rank>${index + 1}</dmi:Rank>
            <dmi:OEMNumber>${item.oem}</dmi:OEMNumber>
            <dmi:OrderQuantity>${item.quantity}</dmi:OrderQuantity>
            <dmi:UOM>EA</dmi:UOM>
            <dmi:UnitPrice>${item.price}</dmi:UnitPrice>
        </dmi:PurchaseOrderLine>`
    })


    const headers = {
        'Content-Type': 'text/xml',
        'SOAPAction': "http://portal.suppliesnet.net/PlaceOrder"
    };

    const data = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:dmi="http://portal.suppliesnet.net">
    <soapenv:Body>
        <dmi:PlaceOrder>
            <dmi:PurchaseOrders>
                <dmi:PurchaseOrders TestIndicator="T" SenderID="4012025D2D" ReceiverID="DMID" APIKey="0751E703-3D4D-4B37-9156-088F43AECBDB" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dmi="http://portal.suppliesnet.net">
                    <dmi:PurchaseOrder>
                        <dmi:OrderType>Dealer DropShip</dmi:OrderType>
                        <dmi:CustomerPONumber>${newData.personInfo.id}</dmi:CustomerPONumber>
                        <dmi:DealerPONumber>${newData.personInfo.id}</dmi:DealerPONumber>
                        <dmi:ShipTo>
                            <dmi:Name>${newData.personInfo.firstName}</dmi:Name>
                            <dmi:Attn>John Doe</dmi:Attn>
                            <dmi:Address1>${newData.personInfo.address}</dmi:Address1>
                            <dmi:Address2 />
                            <dmi:City>${newData.personInfo.city}</dmi:City>
                            <dmi:State>${newData.personInfo.state}</dmi:State>
                            <dmi:ZipCode>${newData.personInfo.zip}</dmi:ZipCode>
                        </dmi:ShipTo>
                        <dmi:ShippingInformation>
                            <dmi:ImmediateOrderShipper>Standard Shipping</dmi:ImmediateOrderShipper>
                            <dmi:BackOrderShipper>Standard Shipping</dmi:BackOrderShipper>
                        </dmi:ShippingInformation>
                        <dmi:Comment>Test comment</dmi:Comment>
                        <dmi:PurchaseOrderLines>
                        ${items}
                        </dmi:PurchaseOrderLines>
                    </dmi:PurchaseOrder>
                </dmi:PurchaseOrders>
            </dmi:PurchaseOrders>
        </dmi:PlaceOrder>
    </soapenv:Body>
</soapenv:Envelope>`



    try {
        const response = await axios.post(url, data, { headers })


        return NextResponse.json({ "succesful": response.status })
    } catch (error) {
        console.error('Error creating payment link:', error);
    }
}
