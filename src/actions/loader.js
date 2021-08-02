export const EnableLoaderAction = '[loader] loader started';
export const DisableLoaderAction = '[loader] loader stopped';

export const dispatchEnableLoader = () => ({
    type: EnableLoaderAction,
});

export const dispatchDisableLoader = () => ({
    type: DisableLoaderAction,
});
