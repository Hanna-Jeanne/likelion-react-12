import { useState } from 'react';

interface ResponseDataType {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  message?: string;
}

const ENDPOINT = 'http://localhost:4000/api/signup';

// const createRequestOption = (formData: FormData) => ({
//   method: 'POST',
//   body: formData,
//   // body 값으로 FormData를 보낼 경우,
//   // headers에 'Content-Type'과 boundary 자동적으로 설정되어서 서버에 보내지게 된다 => 생략 가능
//   // 하지만 headers 명시적으로 서버에 보낼 경우, boundary 생략되어 보내지게 되어 에러가 발생한다.
//   // headers: {
//   //   'Content-Type': 'multipart/form-data',
//   // },
// });

function SignUpForm() {
  const [responseData, setResponseData] = useState<null | ResponseDataType>(
    null
  );

  // const [error, setError] = useState<null | Error>(null);

  // React 19 <form> 요소 action 속성에 핸들러 연결
  const handleSubmitAction = async (formData: FormData) => {
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        body: formData,
      });
      const jsonData = await response.json();
      setResponseData(jsonData as ResponseDataType);
    } catch {
      // setError(error as Error);
    }
  };

  /*
  // onSubmit 속성 - Promise 방식
  const handleSubmitPromise = (e: React.FormEvent<HTMLFormElement>) => {
    // 브라우저 기본 작동 중지
    e.preventDefault();

    // 폼 데이터 구하기
    const formData = new FormData(e.currentTarget); // FormData
    // console.log(formData); // FormData
    // console.log(formData instanceof FormData); // true

    // POST ENDPOINT Request.body (FormData)
    // fetch() 전역 함수 활용
    fetch(ENDPOINT, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((responseData) => setResponseData(responseData as ResponseDataType))
      .catch((error) => console.error(error));
  };
  */

  /*
  // onSubmit 속성 - Async function 방식
  const handleSubmitAsync = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch(ENDPOINT, {
      method: 'POST',
      body: formData,
    })

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  */

  // 조건부 렌더링
  // 오류가 발생한 경우 오류 메시지 출력 (UI 화면)
  // if (error) {
  //   return (
  //     <div role="alert">
  //       <h2>{error.name}</h2>
  //       <p>{error.message}</p>
  //     </div>
  //   );
  // }

  // 회원가입 이후 가입 사용자 정보 (UI 화면)
  if (responseData) {
    return (
      <article className="UserProfile" id={responseData.id}>
        <h2 className="UserProfile--name">{responseData.name}</h2>

        {!responseData.message ? (
          <>
            <img
              src={`http://localhost:4000${responseData.profileImage}`}
              alt=""
              width={64}
              height={64}
            />
            <p>{responseData.email}</p>
          </>
        ) : (
          <p>{responseData.message}</p>
        )}
      </article>
    );
  }
  // 회원가입 폼 (UI 화면)

  return (
    <section style={{ marginInline: 48 }}>
      <h2>회원가입 폼 (POST 메서드)</h2>
      <form
        action={handleSubmitAction}
        // onSubmit={handleSubmitPromise}
        // onSubmit={handleSubmitAsync}

        // onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        //   // 브라우저 기본 작동 중지
        //   // e.preventDefault();

        //   // 폼 데이터 구하기
        //   // const formData = new FormData(e.currentTarget); // FormData
        //   // const formDataObject = Object.fromEntries(formData); // Object

        //   // console.log(formData instanceof FormData);
        //   // console.log(formDataObject instanceof Object);

        //   // const formData = Object.fromEntries(new FormData(e.currentTarget));
        //   // console.log(formData);
        // }}

        // action="http://localhost:4000/api/signup"
        // encType="multipart/form-data"
        // method="POST"
      >
        <div style={{ marginBlockEnd: 8 }}>
          <label htmlFor="usernameSignUp">이름</label>
          <input type="text" name="username" id="usernameSignUp" />
        </div>
        <div style={{ marginBlockEnd: 8 }}>
          <label htmlFor="userEmailSignUp">이메일</label>
          <input type="email" name="useremail" id="userEmailSignUp" />
        </div>
        <div style={{ marginBlockEnd: 8 }}>
          <label htmlFor="userPasswordSignUp">패스워드</label>
          <input type="password" name="userpassword" id="userPasswordSignUp" />
        </div>
        <div style={{ marginBlockEnd: 8 }}>
          <label htmlFor="userProfileSignUp">프로필 이미지</label>
          <input
            type="file"
            name="userprofile"
            id="userProfileSignUp"
            accept=".jpg,.jpeg,.png,.svg,.webp"
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label htmlFor="userProfileSignUp">가입 인사말</label>
          <textarea
            cols={40}
            rows={6}
            style={{ resize: 'none' }}
            defaultValue="짧고 굵게 간단한 인사말을 작성해주세요. (300자 이상)\n"
          />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </section>
  );
}

export default SignUpForm;
