import React, { useEffect} from "react";

const StaffPage = (props) => {
    var profile = props.staff;
    useEffect(() => {}, [props.username]);
    return (
        <div className="staffProfile">
            <div className="usernameField">
                <div className="staffPageUsername">{props.staff.username}</div>
                <div className="staffPageSkin">
                    <img
                        alt="Staff Members Skin"
                        src={`https://mc-heads.net/body/${props.staff.username}`}
                        height="550px"
                    />
                </div>
            </div>
            <div className="">
                <div className="bkm">
                    <fieldset className="bkmField">
                        <legend>Bans</legend>
                        <div className="staffPageBans">{profile.bans}</div>
                    </fieldset>
                    <fieldset className="bkmField">
                        <legend>Kicks</legend>
                        <div className="staffPageKicks">{profile.kicks}</div>
                    </fieldset>
                    <fieldset className="bkmField">
                        <legend>Mutes</legend>
                        <div className="staffPagemutes">{profile.mutes}</div>
                    </fieldset>
                </div>
                <div className="timefav">
                    <fieldset className="favservField">
                        <legend>Favorite Server</legend>
                        <div className="staffPageServer">
                            {profile.favServer}
                        </div>
                    </fieldset>
                    <fieldset className="utimeField">
                        <legend>Joined Staff</legend>
                        <div className="staffPageTime">
                            {profile.timeAsStaff}
                        </div>
                    </fieldset>
                </div>
                <fieldset className="aboutField">
                    <legend>About Me</legend>
                    <div className="staffPageAbout">{profile.about}</div>
                </fieldset>
            </div>
        </div>
    );
};

export default StaffPage;
