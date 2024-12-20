import React from 'react';


interface User {
  name: string;
  image: string;
}

interface OverlappingImagesProps {
  users: User[];
}

const OverlappingImages: React.FC<OverlappingImagesProps> = ({ users }) => {
    const limitedUsers = users.slice(0, 3);

  return (
    <div className="flex -space-x-6">
      {limitedUsers.map((user, index) => (
        <img
          key={index}
          src={user.image}
          alt={user.name}
          className="w-9 h-9 rounded-full object-cover"
          style={{ zIndex: limitedUsers.length - index }}
        />
      ))}

        {users.length > 3 && (
            <div className="w-9 h-9 flex items-center justify-center text-black dark:text-white pl-10" style={{ zIndex: 0 }}>
            +{users.length - 3}
            </div>
        )}
    </div>
  );
};

export default OverlappingImages;