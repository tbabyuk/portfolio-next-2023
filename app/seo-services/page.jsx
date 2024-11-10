import { PageHeader } from "../components/PageHeader";
import { FaCheckCircle } from "react-icons/fa";



const SEOServicesPage = () => {


    return(
        <>
        <PageHeader title="SEO SERVICES" />
        <div className="flex justify-center py-20">
            <table className="seo-plans-table">
                <thead>
                    <tr>
                        <th>SERVICE</th>
                        <th>STARTER PLAN</th>
                        <th className="relative">GROWTH PLAN<span className="absolute bottom-[105%] text-green-600 block">(Most Popular)</span></th>
                        <th>ELITE PLAN</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>$800 / month</th>
                        <th>$1,100 / month</th>
                        <th>$1,300 / month</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Full Website Audit</td>
                        <td><FaCheckCircle className="text-green-500 mx-auto" /></td>
                        <td><FaCheckCircle className="text-green-500 mx-auto" /></td>
                        <td><FaCheckCircle className="text-green-500 mx-auto" /></td>
                    </tr>
                    <tr>
                        <td>New SEO-optimized website pages</td>
                        <td className="text-center">5</td>
                        <td className="text-center">10</td>
                        <td className="text-center">15</td>
                    </tr>
                    <tr>
                        <td>Ongoing optimization of all website content</td>
                        <td><FaCheckCircle className="text-green-500 mx-auto" /></td>
                        <td><FaCheckCircle className="text-green-500 mx-auto" /></td>
                        <td><FaCheckCircle className="text-green-500 mx-auto" /></td>
                    </tr>
                    <tr>
                        <td>Ongoing Google Business Profile Optimization</td>
                        <td><FaCheckCircle className="text-green-500 mx-auto" /></td>
                        <td><FaCheckCircle className="text-green-500 mx-auto" /></td>
                        <td><FaCheckCircle className="text-green-500 mx-auto" /></td>
                    </tr>
                    <tr>
                        <td>Keyword Research</td>
                        <td className="text-center">ulimited</td>
                        <td className="text-center">ulimited</td>
                        <td className="text-center">ulimited</td>
                    </tr>
                    <tr>
                        <td>Monthly Blog Articles</td>
                        <td className="text-center">2</td>
                        <td className="text-center">3</td>
                        <td className="text-center">4</td>
                    </tr>
                    <tr>
                        <td>Monthly Local Citations</td>
                        <td className="text-center">20</td>
                        <td className="text-center">40</td>
                        <td className="text-center">70</td>
                    </tr>
                    <tr>
                        <td>Monthly Progress Report</td>
                        <td><FaCheckCircle className="text-green-500 mx-auto" /></td>
                        <td><FaCheckCircle className="text-green-500 mx-auto" /></td>
                        <td><FaCheckCircle className="text-green-500 mx-auto" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}


export default SEOServicesPage;