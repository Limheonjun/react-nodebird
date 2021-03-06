import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Form, Input, Button } from 'antd'
import Link from 'next/link'
import styled from 'styled-components'
import { LogInProps } from '../interface/interface';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../reducers/user';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`

const LoginForm = function () {
  const dispatch = useDispatch()
  const { logInLoading,   logInError } = useSelector((state => state.user))
  const [email, onChangeEmail] = useInput('')
  const [password, onChangePassword] = useInput('')
  const [passwordCheck, setPasswordCheck] = useState<string>('')

  const style = useMemo(() => ({ marginTop: 10 }), [])

  useEffect(() => {
    if (logInError) {
      alert(logInError)
    }
  }, [logInError])
  
  const onSubmitForm = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(email, password);
    // setIsLoggedIn(true)
    dispatch(loginRequestAction({ email, password }))
  }, [email, password])

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-email">이메일</label>
        <br />
        <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required/>
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" value={password} onChange={onChangePassword} required/>
      </div>
      <ButtonWrapper style={style}>
        <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
        <Link href="/signup"><Button><a>회원가입</a></Button></Link>
      </ButtonWrapper>
    </FormWrapper>
  )
}

export default LoginForm