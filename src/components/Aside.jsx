import myimage from '/images/tree.jpg'
import { GiCalendar, GiClawSlashes, GiMailbox, GiPhone } from 'react-icons/gi'
const Aside = () => {
    return (
        <aside className='sidebar'>
            <div className='sidebar-info'>
                <figure className='avatar-box'>
                    <img src={myimage} alt="" width="80" />
                </figure>
                <div className='info-content'>
                    <h1 className='name'>Nitesh Khandelwal</h1>
                    <p className='title'>Web Developer</p>
                </div>
                <button className='info_more-btn'>
                    <span className=''>Show Contacts</span>
                    <GiClawSlashes />
                </button>
            </div>
            <div className='sidebar-info_more'>
                <hr className='separator2' />
                <ul className='contacts-list'>
                    <li className='contact-item'>
                        <div className='icon-box'>
                            <GiMailbox />
                        </div>
                        <div className='contact-info'>
                            <p className='contact-title'>Email</p>
                            <a href="mailto:niteshkhandelwal127@gmail.com" className='contact-link'>niteshkhandelwal127@gmail.com</a>
                        </div>
                    </li>
                    <li className='contact-item'>
                        <div className='icon-box'>
                            <GiPhone />
                        </div>
                        <div className='contact-info'>
                            <p className='contact-title'>Phone</p>
                            <a href="tel:+91 9001274590" className='contact-link'>+91 9001274590</a>
                        </div>
                    </li>
                    <li className='contact-item'>
                        <div className='icon-box'>
                            <GiCalendar />
                        </div>
                        <div className='contact-info'>
                            <p className='contact-title'>Birthday</p>
                            <time dateTime="2002-12-28" className='contact-link'>28 Dec 2002</time>
                        </div>
                    </li>
                    <li className='contact-item'>
                        <div className='icon-box'>
                            <GiMailbox />
                        </div>
                        <div className='contact-info'>
                            <p className='contact-title'>Location</p>
                            <address className='contact-link'>Jaipur, Rajasthan, India</address>
                        </div>
                    </li>

                </ul>
            </div>
        </aside>
    )
}

export default Aside
