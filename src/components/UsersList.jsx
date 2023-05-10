import React from 'react';
import UserCard from './UserCard';

const UsersList = ({ users, deleteUser, handleClickEdit }) => {
  return (
    <section className="grid gap-10 auto-rows-auto grid-cols-[repeat(auto-fill,_250px)] justify-center">
      {users.length > 0 ? (
        users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            handleClickEdit={handleClickEdit}
          />
        ))
      ) : (
        <div className="mt-20">
          <h1 className="absolute text-4xl font-semibold">No hay usuarios creados</h1>
        </div>
      )}
    </section>
  );
};

export default UsersList;