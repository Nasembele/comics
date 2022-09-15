export interface IOpenComic {
    alt: string,
    num: number,
    day: string,
    month: string,
    year: string,
    link: string,
    img: string,
    news: string,
    safe_title: string,
    title: string,
    transcript: string,
}

export interface IComics {
    openComic?: IOpenComic,
}