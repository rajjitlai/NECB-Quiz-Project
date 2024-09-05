import { profileStats } from "@/app/constants";

const ProfileStats = () => {
    return (
        <div className="flex flex-col gap-5 mt-10">
            {profileStats.map((stat, index) => {
                if (index % 2 === 0) {
                    return (
                        <div key={index} className="flex flex-col lg:flex-row justify-between items-center w-full gap-5">
                            <div className="w-full lg:w-1/2 bg-slate-900 p-5 rounded-xl">
                                <p className="text-gray-600">{profileStats[index].label}</p>
                                <h2 className="text-lg lg:text-xl font-semibold">{profileStats[index].value}</h2>
                            </div>

                            {profileStats[index + 1] && (
                                <div className="w-full lg:w-1/2 bg-slate-900 p-5 rounded-xl">
                                    <p className="text-gray-600">{profileStats[index + 1].label}</p>
                                    <h2 className="text-lg lg:text-xl font-semibold">{profileStats[index + 1].value}</h2>
                                </div>
                            )}
                        </div>
                    );
                }
                
                return null;
            })}
        </div>
    );
};

export default ProfileStats;

