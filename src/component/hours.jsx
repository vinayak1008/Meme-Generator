import React from 'react';

const Page = () => {
    const date = new Date();
    const hours = date.getHours();
    let time;
    const styles = {fontSize: 30}

    if(hours < 12  && hours > 5) {
        time = "Good Morning"
        styles.color = "yellow"
    }
    else if(hours < 16) {
        time = "Good Afternoon"
        styles.color = "orange"
    }
    else if(hours < 20) {
        time="Good Evening";
        styles.color = "blue" 
    }
    else {
        time="Good Night";
        styles.color = "black"
    }

    return (
        <h1 style={styles} >Hello {time} </h1>
    );
}

export default Page;