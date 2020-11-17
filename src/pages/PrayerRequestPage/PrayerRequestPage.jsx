import React from 'react';

import TextInput from '../../components/TextInput/TextInput';
import withForm from '../../utils/hocs/withForm';

import './PrayerRequestPage';

const PrayerRequestPage = ({handleChange}) => {

    return(
        <div>
            <form>
                <TextInput
                    name = 'Name'
                    label = 'Name'
                />
            </form>
        </div>
    );
};

export default withForm(PrayerRequestPage);