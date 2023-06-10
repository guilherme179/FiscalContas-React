import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTruck, faHouse, faPerson, faBoxesStacked, faDolly, faTruckRampBox, faReceipt, faFileInvoiceDollar, faBuildingColumns, faMoneyBill1Wave, faHandHoldingDollar} from '@fortawesome/free-solid-svg-icons';

export function Sidebar() {
return( 

    <div>
        <div className="flex flex-col h-sidebar p-3 bg-gradient-to-t from-navbar-0 to-navbar-700 text-white shadow w-60">
            <div className="space-y-3">
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-base">
                        <li className="rounded-sm">
                            <a
                                href="/"
                                className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                <FontAwesomeIcon icon={faHouse}/>
                                <span>Home</span>
                            </a>
                        </li>
                        <li className="rounded-sm">
                            <a
                                href="/clientes"
                                className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                <FontAwesomeIcon icon={faPerson}/>
                                <span>Clientes</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);
}