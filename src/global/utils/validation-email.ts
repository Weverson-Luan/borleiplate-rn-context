/**
/**
 * IMPORTS
 */

const validateEmail = (email: string) => {
  var regexEmail = /\S+@\S+\.\S+/;
  return regexEmail.test(email);
};

/**
 * EXPORTS
 */
export { validateEmail };
