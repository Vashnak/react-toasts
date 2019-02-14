interface IColor {
  [key: string]: {
    backgroundColor: string,
    borderColor: string,
    color: string,
  }
}

export const LightColors: IColor = {
  error: {
    backgroundColor: '#f2dede',
    borderColor: '#eed3d7',
    color: '#b94a48',
  },
  info: {
    backgroundColor: '#d9edf7',
    borderColor: '#bce8f1',
    color: '#3a87ad',
  },
  success: {
    backgroundColor: '#dff0d8',
    borderColor: '#d6e9c6',
    color: '#468847',
  },
  warning: {
    backgroundColor: '#fcf8e3',
    borderColor: '#fbeed5',
    color: '#c09853',
  },
};

export const DarkColors: IColor = {
  error: {
    backgroundColor: '#e74c3c',
    borderColor: '#00000000',
    color: '#000000',
  },
  info: {
    backgroundColor: '#ecf0f1',
    borderColor: '#00000000',
    color: '#000000',
  },
  success: {
    backgroundColor: '#2ecc71',
    borderColor: '#00000000',
    color: '#000000',
  },
  warning: {
    backgroundColor: '#f1c40f',
    borderColor: '#00000000',
    color: '#000000',
  },
};