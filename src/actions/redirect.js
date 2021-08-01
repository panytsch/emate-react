export const CleanPathAction = '[redirect] clean path';
export const RedirectToAction = '[redirect] redirect to path';

export const dispatchRedirectToPath = (path) => ({
    type: RedirectToAction,
    path,
});

export const dispatchCleanPath = () => ({
    type: CleanPathAction,
});