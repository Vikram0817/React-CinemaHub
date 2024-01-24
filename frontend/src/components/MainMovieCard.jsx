import React from "react";

export default function MainMovieCard(){
    
    return(
        <div className="h-4/6">
            <div className="h-full relative">
                <img className="object-contain" src={`https://scontent.fdel1-4.fna.fbcdn.net/v/t39.30808-6/386339412_170941116060470_5632245724859690417_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=783fdb&_nc_ohc=awgFekhJJwAAX_wzKtI&_nc_ht=scontent.fdel1-4.fna&oh=00_AfBCSm_Oai9u9kCQi_fBffuV63EF6joVcvuuEhg3MiGHcw&oe=65B541BF`} alt="Random main movie" />
                <div className=" mt-40 absolute inset-0 bg-gradient-to-b from-transparent to-black mix-blend-gradient" />
            </div>
        </div>
    )
}