import NextLink from 'next/link';

export default function Link({children, href, ...props}){

    // Os components ficam na pasta src pois o next precisa utilizar a pages para fazer já a troca de páginas

    return(
        <NextLink href={href} passHref>
            <a>{children}</a>
        </NextLink>
    )
}