/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type {
  ProductionReport,
  Extras,
  CastTimeLog,
  Scenes,
  scheduleForDay,
  ActualSchedule,
  Rolls,
} from "@prisma/client";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ProductionReportReduxProp = {
  data: ProductionReport;
};

const initialState = {
  data: {
    scheduleForDay: {
      breakfastFrom: null,
      breakfastTo: null,
      crewCallFrom: null,
      crewCallTo: null,
      shootingCallFrom: null,
      shootingCallTo: null,
      lunchFrom: null,
      lunchTo: null,
    },
    startDate: null,
    actualSchedule: {
      firstUnitInput: {
        schedule: null,
        actual: null,
      },
      secondUnitInput: {
        schedule: null,
        actual: null,
      },
      prep: {
        schedule: null,
        actual: null,
      },
      travel: {
        schedule: null,
        actual: null,
      },
      idle: {
        schedule: null,
        actual: null,
      },
      holiday: {
        schedule: null,
        actual: null,
      },
    },
    rolls: {},
    extras: Array<Extras>(),
    castTimeLog: Array<CastTimeLog>(),
    shotScene: Array<Scenes>(),
  } as ProductionReport,
} as ProductionReportReduxProp;

export const productionReport = createSlice({
  name: "productionReport",
  initialState,
  reducers: {
    setProductionReport: (state, action: PayloadAction<ProductionReport>) => {
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
    updateScheduleForDay: (state, action: PayloadAction<scheduleForDay>) => {
      state.data = {
        ...state.data,
        scheduleForDay: {
          ...action.payload,
        },
      };
    },
    updateActualSchedule: (state, action: PayloadAction<ActualSchedule>) => {
      console.log("Updating actualSchedule", action.payload);
      state.data = {
        ...state.data,
        actualSchedule: {
          ...action.payload,
        },
      };
    },
    updateCastTimeLog: (state, action: PayloadAction<Array<CastTimeLog>>) => { 
      console.log("Updating castTimeLog", action.payload);

      state.data = {
        ...state.data,
        castTimeLog: action.payload
      };

    }
  },
});

export const {
  setProductionReport,
  updateScheduleForDay,
  updateActualSchedule,
  updateCastTimeLog
} = productionReport.actions;

export default productionReport.reducer;
