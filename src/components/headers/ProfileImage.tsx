export default function ProfileImage({ppath} : {ppath : string}) {



    return (

        <div className="d-flex justify-content-center mt-5 mt-xxl-0">
            <div className="profile bg-gradient-primary-to-secondary">
                <img className="profile-img" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    'borderRadius' : '10%',

                }} src={ppath} />
            </div>
        </div>
    )
}