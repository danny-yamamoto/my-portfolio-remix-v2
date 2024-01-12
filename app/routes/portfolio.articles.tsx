import { json } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { getArticles } from "../articles.server";

export const loader = async () => {
    const articles = await getArticles(20);
    return json(articles)
}

export default function PortfolioArticlesRoute() {
    const articles: any[] = useLoaderData();
    return (
        <ul>
            {articles && articles.map(({ title, url, id }) => (
            <li key={id} className="truncate-list-item">
                <Link key={id} to={url} target="_blank">{title}</Link>
            </li>
            ))}
        </ul>
    )
}
