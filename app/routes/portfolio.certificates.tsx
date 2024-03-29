import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { getCertificates } from "../certificates.server";

export async function loader() {
//export const loader = async () => {
    const certificates = await getCertificates()
    return json(certificates)
}

export default function PortfolioCertificatesRoute() {
    const certificates: any[] = useLoaderData();
    return (
        <ul>
        {certificates.map(({ blockchainId, title }) => (
            <li className="truncate-list-item" key={blockchainId}>{title}</li>
        ))}
        </ul>
    );
}
