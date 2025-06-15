/*
  You have a Form type that contains information about a form, including the errors field.
  You want to create a new type Params that includes all fields from Form except errors.
*/

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Implement Params so that the 'errors' field from the Form type is excluded
type Params = Omit<Form, 'errors'>;

export {};