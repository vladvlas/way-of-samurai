import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://i2.wp.com/img-fotki.yandex.ru/get/68556/191606791.2e/0_e3ca6_1e84c9b8_orig.jpg"></img>
            </div>
            <div className={styles.description}>ava + descr</div>
        </div>
    )
}

export default ProfileInfo