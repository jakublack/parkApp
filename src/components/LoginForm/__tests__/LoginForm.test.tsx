import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, type MockedFunction } from 'vitest';
import { LoginForm } from '../LoginForm';
import { useAuth } from '../../../hooks/useAuth';

// Mock useAuth hook
vi.mock('../../../hooks/useAuth');
const mockUseAuth = useAuth as MockedFunction<typeof useAuth>;

// Mock window.location.replace
const mockReplace = vi.fn();
Object.defineProperty(window, 'location', {
  value: { replace: mockReplace },
  writable: true,
});

describe('LoginForm', () => {
  const mockLogin = vi.fn();

  beforeEach(() => {
    mockLogin.mockClear();
    mockReplace.mockClear();

    mockUseAuth.mockReturnValue({
      login: mockLogin,
      loginLoading: false,
      loginError: null,
      isAuthenticated: false,
      user: null,
      logout: vi.fn(),
    });
  });

  test('renders login form with email and password fields', () => {
    render(<LoginForm />);

    expect(
      screen.getByRole('heading', { name: /sign in to park app/i })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email address/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });

  test('has default values for email and password', () => {
    render(<LoginForm />);

    const emailInput = screen.getByDisplayValue('tester@parkapp.pl');
    const passwordInput = screen.getByDisplayValue('testPassword');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('calls login function on form submission', async () => {
    const user = userEvent.setup();
    mockLogin.mockResolvedValue({ success: true });

    render(<LoginForm />);

    const submitButton = screen.getByRole('button', { name: /sign in/i });

    await user.click(submitButton);

    expect(mockLogin).toHaveBeenCalledWith('tester@parkapp.pl', 'testPassword');
  });

  test('redirects to dashboard on successful login', async () => {
    const user = userEvent.setup();
    mockLogin.mockResolvedValue({ success: true });

    render(<LoginForm />);

    const submitButton = screen.getByRole('button', { name: /sign in/i });

    await user.click(submitButton);

    await waitFor(() => {
      expect(mockReplace).toHaveBeenCalledWith('/dashboard');
    });
  });

  test('does not redirect on failed login', async () => {
    const user = userEvent.setup();
    mockLogin.mockResolvedValue({
      success: false,
      error: 'Invalid credentials',
    });

    render(<LoginForm />);

    const submitButton = screen.getByRole('button', { name: /sign in/i });

    await user.click(submitButton);

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalled();
    });

    expect(mockReplace).not.toHaveBeenCalled();
  });

  test('shows loading state during login', () => {
    mockUseAuth.mockReturnValue({
      login: mockLogin,
      loginLoading: true,
      loginError: null,
      isAuthenticated: false,
      user: null,
      logout: vi.fn(),
    });

    render(<LoginForm />);

    const submitButton = screen.getByRole('button', { name: /signing in/i });
    expect(submitButton).toBeDisabled();
  });

  test('shows error message when login fails', () => {
    const mockError = new Error('Invalid email or password');
    mockUseAuth.mockReturnValue({
      login: mockLogin,
      loginLoading: false,
      loginError: mockError,
      isAuthenticated: false,
      user: null,
      logout: vi.fn(),
    });

    render(<LoginForm />);

    expect(screen.getByText('Invalid email or password')).toBeInTheDocument();
  });

  test('allows typing in email and password fields', async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    const emailInput = screen.getByPlaceholderText(
      /email address/i
    ) as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText(
      /password/i
    ) as HTMLInputElement;

    await user.clear(emailInput);
    await user.type(emailInput, 'new@email.com');

    await user.clear(passwordInput);
    await user.type(passwordInput, 'newpassword');

    expect(emailInput.value).toBe('new@email.com');
    expect(passwordInput.value).toBe('newpassword');
  });
});
