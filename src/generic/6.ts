/*
  You have a user registration form.
  Sometimes you need to pre-fill the form with user data to update their profile.
  However, you don't always need to fill in all the fields. For example, a user may want to update only their email and password,
  leaving their name and surname unchanged.

  Fix the type in the function argument so that there are no type errors.
*/

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>) {
  // Оновлення користувача
}

createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });

export {};