import Calendar from '@/components/Calendar';
import HolidayForm from '@/components/HolidayForm';
import UserState from '@/components/UserState';
import styles from './home.module.scss';

export default function Home() {
    return (
        <div className={styles.wrap}>
            <Calendar />
            <div>
                <UserState />
                <HolidayForm />
            </div>
        </div>
    );
}
