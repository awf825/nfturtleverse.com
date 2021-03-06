import Image from 'next/image';
import Link from 'next/link';

export default function TVIntro() {
    return (
        <div id="aboutUs" className="tv-intro">
            {/* <Image src="/mint_pic.png" layout="fill"/> */}
            <div className="tv-header">
                {/* <div className="tv-logo-header">
                    <Image className="tv-logo-header hidden-mobile" src="/TV_Logo_white.png" alt="tv-white" width="150" height="100" />    
                </div> */}
                <div className="tv-text-header">
                    <div className="white-divider hidden-mobile" style={{width: "10%"}}></div>
                    <h1>THE TURTLEVERSE</h1>
                    <div className="white-divider hidden-mobile" style={{width: "10%"}}></div>
                </div>
                {/* <div className="tv-logo-header">
                    <Image  src="/TV_Logo_white.png" alt="tv-white" width="150" height="100" />
                </div> */}
            </div>
            <div className="tv-blurb">
                <div className="turtle-img-blurb hidden-mobile">
                    <Image src="/B13.png" alt="tv-white" width="115" height="115" />
                </div>
                <div className="tv-text-blurb">
                    <p>
                        The TurtleVerse is a collection of 10,000 1/1 Turtles, each one algorithmically generated from 
                        over 160 unique traits — e.g. props, expressions, colors, etc. — so that no turtle is the same.
                        Turtles range in rarity, so cross your fingers! <Link href="/minter-page">CLICK HERE TO MINT</Link>
                    </p>
                </div>
                <div className="turtle-img-blurb hidden-mobile">
                    <Image src="/B11.png" alt="tv-white" width="115" height="115" />
                </div>
            </div>
            <div className="gallery-row gallery-row-one mobile-top-margin-lg">
                <div className="turtle-img-gallery-outer">
                    <Image className="turtle-img-gallery-one" src="/B2.png" alt="tv-white" width="115" height="115" />
                </div>
                <div className="turtle-img-gallery-inner hidden-mobile">
                    <Image className="turtle-img-gallery-one" src="/B3.png" alt="tv-white" width="115" height="115" />                
                </div>
                <div className="turtle-img-gallery-inner hidden-mobile">
                    <Image className="turtle-img-gallery-one" src="/B5.png" alt="tv-white" width="115" height="115" />
                </div>
                <div className="turtle-img-gallery-inner hidden-mobile">
                    <Image className="turtle-img-gallery-one" src="/B6.png" alt="tv-white" width="115" height="115" />
                </div>
                <div className="turtle-img-gallery-inner hidden-mobile">
                    <Image className="turtle-img-gallery-one" src="/B8.png" alt="tv-white" width="115" height="115" />
                </div>
                <div className="turtle-img-gallery-inner hidden-mobile">
                    <Image className="turtle-img-gallery-one" src="/B9.png" alt="tv-white" width="115" height="115" />
                </div>
                <div className="turtle-img-gallery-inner hidden-mobile">
                    <Image className="turtle-img-gallery-one" src="/B14.png" alt="tv-white" width="115" height="115" />
                </div>
                <div className="turtle-img-gallery-outer">
                    <Image className="turtle-img-gallery-one" src="/B4.png" alt="tv-white" width="115" height="115"/>
                </div>
            </div>
            <div className="gallery-row gallery-row-two hidden">
                <div className="turtle-img-gallery-outer">
                    <Image className="turtle-img-gallery-two" src="/B14.png" alt="tv-white" width="115" height="115" />
                </div>
                <div className="turtle-img-gallery-outer">
                    <Image className="turtle-img-gallery-one" src="/B8.png" alt="tv-white" width="115" height="115" />
                </div>
            </div>
        </div>
    )
}