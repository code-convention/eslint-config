module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  rules: {
    eqeqeq: 'warn',
    'prefer-const': [2, { destructuring: 'any', ignoreReadBeforeAssign: true }],
    'no-extra-semi': 'off', // 불필요한 세미콜론 허용여부
    'arrow-parens': 'off', // a => {}, (a)=>{} 변경
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_', ignoreRestSiblings: true }], // 안 쓰는 변수 의 경우 warn
    'object-curly-spacing': 'off', // {a:1} -> { a:1 }
    'space-before-function-paren': 'off', // 함수 사이 공백
    'quote-props': 'off', // {'a': 1} or { a: 1 }
    'comma-spacing': ['off', { before: false, after: true }], // 콤마 스페이스 prettier 해줌
    'space-infix-ops': ['warn', { int32Hint: false }], // 중위 연산자
    camelcase: ['warn', { properties: 'never' }],
    'operator-linebreak': 'off', // 중위 연산자 prettier 해줌
    'key-spacing': 'off', // key: value -> key : value
    'no-multi-spaces': 'warn',
    'no-trailing-spaces': 'off', // 비어있는 공간이 필요할 경우가 있음 prettier 해줌
    'no-empty-function': 'off', // 비어있는 펑션이 필요함
    'no-use-before-define': 'off', // import react 버전업시 버그 발견 prettier 해줌
    'no-multiple-empty-lines': ['off', { max: 2, maxEOF: 0 }], // 코드 두줄 이상 띄우면 warn prettier 해줌
    'eol-last': 'off', // eol - 문장의 끝 한 칸 띄우기 //prettier 해줌
    'semi-style': ['off', 'last'], // semi는 뒤에 // prettier 해줌
    'spaced-comment': 'off',
    'padded-blocks': 'off',
    'prefer-const': ['off'], // let을 자동적으로 고침, 해당내역 지만씨 요청,
    'no-invalid-this': 'off', // this를 생성자 함수에서 인수로 사용 허용
    quotes: ['off'],
  },
}
