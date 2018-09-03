describe('Dog API', () => {
  var result;
  before(async () => {
    result = await fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json());
  });
  after(() => {
    debugger;
    result = undefined;
  });

  it('Ответ от сервера пришел', () => {
    assert.isDefined(result);
  })

  it('Сервер вернул успешный ответ', () => {
    assert.equal(result.status, 'success');
  })

  it('В ответе присутсвтвует порода bulldog', () => {
    assert.exists(result.message.bulldog);
  })

  it('В ответе присутствует порода boxer', () => {
    assert.isDefined(result.message.boxer);
  })
});
