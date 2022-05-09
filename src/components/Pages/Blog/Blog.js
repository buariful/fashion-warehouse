import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="w-11/12 mt-8 mx-auto">
                {/* 1st question---------- */}
                <h1 className='text-2xl'>Difference between <span className='text-orange-600 font-semibold uppercase'>javascript</span>  and <span className='text-orange-600 font-semibold uppercase'>nodejs</span></h1>

                <div className="md:w-1/2 w-10/12 mx-auto mt-4">
                    <table className="border-collapse border border-slate-400 mx-auto text-center">
                        <thead>
                            <tr>
                                <th className='border border-slate-300 ...'>Javascript</th>
                                <th className='border border-slate-300 ...'>Nodejs</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-slate-300 ...'>Javascript is a programming language that is used for writing scripts on the website.</td>

                                <td className='border border-slate-300 ...'>NodeJS is a Javascript runtime environment.</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-300 ...'>Javascript can only be run in the browsers.</td>

                                <td className='border border-slate-300 ...'>We can run Javascript outside the browser with the help of NodeJS.</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-300 ...'>It is basically used on the client-side.</td>
                                <td className='border border-slate-300 ...'>It is mostly used on the server-side.</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-300 ...'>Javascript is capable enough to add HTML and play with the DOM.</td>
                                <td className='border border-slate-300 ...'>Nodejs does not have capability to add HTML tags.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* -------------------- */}

                {/* 2nd question */}
                <h1 className='text-2xl mt-8'>When should you use <span className='text-orange-600 font-semibold uppercase'>nodejs</span>  and when should you use <span className='text-orange-600 font-semibold uppercase'>mongodb</span></h1>

                <p className="w-11/12 mt-4 mx-auto text-justify">
                    Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc…
                    So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.

                    If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.
                </p>
                {/* ------------ */}

                {/* 3rd question */}
                <h1 className='text-2xl mt-8'>Differences between <span className='text-orange-600 font-semibold uppercase'>sql</span>  and <span className='text-orange-600 font-semibold uppercase'>nosql</span> databases.</h1>

                <div className="md:w-1/2 w-10/12 mx-auto mt-4">
                    <table className="border-collapse border border-slate-400 mx-auto text-center">
                        <thead>
                            <tr>
                                <th className='border border-slate-300 ...'>SQL</th>
                                <th className='border border-slate-300 ...'>NoSQL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-slate-300 ...'>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>

                                <td className='border border-slate-300 ...'>Non-relational or distributed database system.</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-300 ...'>These databases have fixed or static or predefined schema.</td>

                                <td className='border border-slate-300 ...'>They have dynamic schema</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-300 ...'>These databases are not suited for hierarchical data storage</td>
                                <td className='border border-slate-300 ...'>These databases are best suited for hierarchical data storage.</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-300 ...'>Vertically Scalable</td>
                                <td className='border border-slate-300 ...'>Horizontally scalable</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* ----------- */}

                {/* 4rth question */}
                <h1 className='text-2xl mt-8'>What is the purpose of  <span className='text-orange-600 font-semibold uppercase'>jwt</span>  and how does it work ?</h1>

                <p className="w-11/12 mt-4 mx-auto text-justify mb-10">
                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                    Once decoded, you will get two JSON strings:
                    1. The header and the payload.
                    2. The signature.
                    The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.
                    The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
                    There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.
                    The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                </p>
                {/* ------------ */}
            </div>
        </div>
    );
};

export default Blog;