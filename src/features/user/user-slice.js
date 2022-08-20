import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit';
import {
  login,
  logout
} from '../../api/user';
import {
  register
} from '../../api/user/user-register';
import {
  update
} from '../../api/user/user-update';

const initialState = {
  user: null,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
const logUserIn = createAsyncThunk(
  'user/login',
  async (loginData) => {
    const user = await login(loginData);
    // The value we return becomes the `fulfilled` action payload
    return {
      username: user.displayName,
      email: user.email,
      picture: user.photoURL,
    };
  }
);

const registerUser = createAsyncThunk(
  'user/register',
  async (registerData) => {
    const user = await register(registerData);
    update(user, registerData.name, register.picture)
    // The value we return becomes the `fulfilled` action payload
    return {
      username: user.displayName,
      email: user.email,
      picture: user.photoURL,
    };
  }
);

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    signout: (state) => {
      state.user = null;
      logout();
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(logUserIn.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logUserIn.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
      });
  },
});

export const {
  signout
} = UserSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state) => state.user.user;

export const SignInUser = logUserIn;

export const signUpUser = registerUser;

export default UserSlice.reducer;