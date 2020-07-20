import { Test } from "@nestjs/testing";
import { UserRepository } from "./user.repository";

const mockCredentialsDto = { username: 'testusername', password: 'testpassword' };

describe('UserRepository', () => {
  let userRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UserRepository,
      ]
    }).compile();

    userRepository = await module.get<UserRepository>(UserRepository);
  });

  describe('signUp', () => {
    let save;

    beforeEach(() => {
      save = jest.fn();
      userRepository.create = jest.fn().mockReturnValue({ save });
    });

    it('successfully sign up the user', () => {
      save.mockResolvedValue(undefined);
      expect(userRepository.signUp(mockCredentialsDto)).resolves.not.toThrow();
    });

    it('throw a conflic exeption as username already exists', () => {
      save.mockRejectedValue({ code: '23505' });
    });
  });
});