import React, { useCallback,useEffect,useState } from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head'
import Router from 'next/router'
import { Form, Input, Checkbox, Button } from 'antd'
import useInput from '../hooks/useInput'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_UP_REQUEST } from '../reducers/user';

const ErrorMessage = styled.div`
  color: red;
`

const Signup = function () {

  const dispatch = useDispatch()
  const { signUpLoading, signUpDone, signUpError } = useSelector(state => state.user)

  useEffect(() => {
    if (signUpDone) {
      Router.push('/')
    }
  }, [signUpDone])

  useEffect(() => {
    if (signUpError) {
      alert(signUpError)
    }
  }, [signUpError])

  const [email, onChangeEmail] = useInput('')
  const [nickname, onChangeNickname] = useInput('')
  const [password, onChangePassword] = useInput('')
 
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const onChangePasswordCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordError(e.target.value !== password)
    setPasswordCheck(e.target.value)
  }, [password])


  const [termError, setTermError] = useState<boolean>(false)
  const [term, setTerm] = useState<boolean>(false)
  const onChangeTerm = useCallback((e) => {
    setTermError(false)
    setTerm(e.target.checked)
  }, [])

  const onSubmit = useCallback((e) => {
    if (password !== passwordCheck) {
      return setPasswordError(true)
    }
    if (!term) {
      return setTermError(true)
    }
    console.log(email, nickname, password)
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, nickname },
    })
  }, [email, password, passwordCheck, term]);

  return (
    <AppLayout>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required/>
        </div>
        <div>
          <label htmlFor="user-nickname">닉네임</label>
          <br />
          <Input name="user-nickname" value={nickname} onChange={onChangeNickname} required/>
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" value={password} onChange={onChangePassword} required/>
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다</ErrorMessage>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>EMGC 말을 잘 들을 것을 동의합니다</Checkbox>
          {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>
        </div>
      </Form>
    </AppLayout>
  )
}

export default Signup