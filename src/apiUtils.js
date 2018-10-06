export const parseApiErrors = (error) => {
  return error.response.body.violations.reduce(
    (parsedErrors, violation) => {
      parsedErrors[violation['propertyPath']] = violation['message'];
      return parsedErrors;
    },
    {}
  );
};

export const hydraPageCount = (collection) => {
  if (!collection['hydra:view']) {
    return 1;
  }

  return Number(
    collection['hydra:view']['hydra:last'].match(/page=(\d+)/)[1]
  );
};

const canWriteBlogPostRoles = ['ROLE_WRITER', 'ROLE_ADMIN', 'ROLE_SUPERADMIN'];

export const canWriteBlogPost = (userData) => {
  return null !== userData
    && userData.roles.some(
      userRoles => canWriteBlogPostRoles.includes(userRoles)
    );
};
