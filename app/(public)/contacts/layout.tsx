import React from 'react';
import {Metadata} from "next";


export const metadata: Metadata = {
    title:'ContactsLayout metadata'
}
type Props = {children:React.ReactNode}
const ContactsLayout= ({children}: Props) => {
    return (
        <div>
            <hr/>

            ContactsLayout            {children}
            <hr/>
        </div>
    );
};

export default ContactsLayout;