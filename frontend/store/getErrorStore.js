import { create } from "zustand";
import errorMessages from "../../backend/log/errorMessages";

const exceptionMsg = "문제가 발생했습니다. 잠시후 다시 시도해 주세요" //예외에러메세지
//에러코드에 따른 예외메세지 처리도 가능할듯? 결제 과정중의 예외에러, 접속중 예외에러 등
const useGetErrorMsg = create((set) => ({
    // 에러메세지
    errorMsg: "",
    setErrorMsg: (msgKey) => {

      // 전달받은 props로 메세지 저장소에서 조회 or 예외에러메세지
      const resloveMsg = errorMessages[msgKey] || exceptionMsg;
      set({errorMessages: resloveMsg}); //상태 업데이트
    },


    //에러 메세지 초기화
    resetErrorMsg: () => set({errorMsg: ""}),
  }));
  
  export default useGetErrorMsg;