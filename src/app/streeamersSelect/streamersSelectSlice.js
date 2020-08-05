import { createSlice } from '@reduxjs/toolkit';
import streamersConfig from '../../assets/json/streamers.json';

const getStreamersConfig = () => {
    const config = streamersConfig.streamers
    const streamers = Object.keys(streamersConfig.streamers).map((streamer) => ({
        id: streamer,
        name: config[streamer].name,
        color: config[streamer].color,
        description: config[streamer].description
    }))
    while(streamers.length < 24){
        streamers.push({id: streamers.length, name: undefined, color: undefined, description: undefined})
    }

    return streamers
}

export const streamersSelectSlice = createSlice({
  name: 'streamersSelect',
  initialState: {
    selected: [],
    lastOne: undefined,
    streamers: getStreamersConfig()
  },
  reducers: {
    add: (state, action) => {
        state.selected.push(action.payload)
        state.lastOne = action.payload
    },
    remove: (state, action) => {
        const index = state.selected.findIndex((streamer) => streamer.id === action.payload.id)
        if(index > -1){
            state.selected.splice(index, 1)
        }
    }
  },
});

export const { add, remove } = streamersSelectSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const streamersSelector = state => {
    console.log(state.streamersSelect)
    return state.streamersSelect.streamers
};
export const selectedStreamersSelector = state => state.streamersSelect.selected;
export const lastOneSelector = state => state.streamersSelect.lastOne;


export default streamersSelectSlice.reducer;
