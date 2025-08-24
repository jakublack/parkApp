import { renderHook, act } from '@testing-library/react';
import { useAuth } from '../useAuth';

// Mock localStorage
const mockLocalStorage = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

describe('useAuth', () => {
  beforeEach(() => {
    mockLocalStorage.clear();
  });

  test('should initialize with unauthenticated state', () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.user).toBe(null);
    expect(result.current.loginLoading).toBe(false);
    expect(result.current.loginError).toBe(null);
  });

  test('should restore authentication from localStorage', () => {
    const mockUser = { id: '1', email: 'test@example.com', name: 'Test User' };
    mockLocalStorage.setItem('authToken', 'mock_token');
    mockLocalStorage.setItem('userData', JSON.stringify(mockUser));

    const { result } = renderHook(() => useAuth());

    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.user).toEqual(mockUser);
  });

  test('should login successfully with correct credentials', async () => {
    const { result } = renderHook(() => useAuth());

    await act(async () => {
      const loginResult = await result.current.login(
        'tester@parkapp.pl',
        'testPassword'
      );
      expect(loginResult.success).toBe(true);
    });

    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.user).toEqual({
      id: '1',
      email: 'tester@parkapp.pl',
      name: 'Test User',
    });
    expect(result.current.loginLoading).toBe(false);
    expect(result.current.loginError).toBe(null);
  });

  test('should fail login with incorrect credentials', async () => {
    const { result } = renderHook(() => useAuth());

    await act(async () => {
      const loginResult = await result.current.login(
        'wrong@email.com',
        'wrongpassword'
      );
      expect(loginResult.success).toBe(false);
      expect(loginResult.error).toBe('Invalid email or password');
    });

    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.user).toBe(null);
    expect(result.current.loginError).toBeInstanceOf(Error);
  });

  test('should logout successfully', async () => {
    // First login
    const { result } = renderHook(() => useAuth());

    await act(async () => {
      await result.current.login('tester@parkapp.pl', 'testPassword');
    });

    expect(result.current.isAuthenticated).toBe(true);

    // Then logout
    act(() => {
      result.current.logout();
    });

    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.user).toBe(null);
    expect(mockLocalStorage.getItem('authToken')).toBe(null);
    expect(mockLocalStorage.getItem('userData')).toBe(null);
  });
});
