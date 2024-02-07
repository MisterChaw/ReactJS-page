import './Styles/Footer.css';

function Footer() {
    return (
        <>
        <div className='footerBox'>
            <div>
                <ul>
                    <li className='links'>About</li>
                    <li className='links'>Store Hours</li>
                    <li className='links'>Contact</li>
                    <li className='links'>Blog</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='links'>Facebook</li>
                    <li className='links'>Twitter</li>
                    <li className='links'>Instagram</li>
                    <li className='links'>Youtube</li>
                </ul>
            </div>
        </div>
        </>
    )
};

export default Footer;