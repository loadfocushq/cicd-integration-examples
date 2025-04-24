const request = require('supertest');
const { app, server } = require('../index');

describe('API Endpoints', () => {
  it('GET / should return welcome message', async () => {
    const res = await request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toBe('Welcome to the LoadFocus Demo API');
  });

  it('GET /api/users should return all users', async () => {
    const res = await request(app)
      .get('/api/users')
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('GET /api/users/:id should return a user if valid id is provided', async () => {
    const res = await request(app)
      .get('/api/users/1')
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('email');
  });

  it('GET /api/users/:id should return 404 if invalid id is provided', async () => {
    const res = await request(app)
      .get('/api/users/999')
      .expect('Content-Type', /json/)
      .expect(404);
    
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toBe('User not found');
  });

  it('POST /api/users should create a new user', async () => {
    const newUser = {
      name: 'Test User',
      email: 'test@example.com'
    };
    
    const res = await request(app)
      .post('/api/users')
      .send(newUser)
      .expect('Content-Type', /json/)
      .expect(201);
    
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('email');
    expect(res.body.name).toBe(newUser.name);
    expect(res.body.email).toBe(newUser.email);
  });

  // Close the server after all tests are done
  afterAll((done) => {
    server.close(done);
  });
});
