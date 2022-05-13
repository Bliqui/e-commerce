import './Footer.scss'


export const Footer = () => {
    return (
        <footer className={'footer'}>
            <div className={'footerWrapper'}>
                <span className={'footerTextN'}>Bogdan Koykov</span>
                <span className={'footerTextC'}>Copyright © 2022 Banana Inc. All rights reserved.</span>
                <a href={'https://github.com/Bliqui'} target={'_blank'} className={'footerTextP'}>https://github.com/Bliqui</a>
            </div>
        </footer>
    )
};