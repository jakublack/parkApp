import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PilotController } from '../PilotController';

describe('PilotController', () => {
  test('renders pilot controller with default selected zone', () => {
    render(<PilotController />);

    expect(screen.getByText('Długa nazwa pilota')).toBeInTheDocument();
    expect(screen.getByText('Wybierz bramę, by otworzyć')).toBeInTheDocument();

    // Check if pilot buttons are rendered
    expect(screen.getByText('Szlaban Grzybowska 1')).toBeInTheDocument();
    expect(screen.getByText('Brama Garażowa 1')).toBeInTheDocument();
    expect(screen.getByText('Brama Wyjazdowa Śląska')).toBeInTheDocument();
    expect(screen.getByText('Szlaban Pomorska 32')).toBeInTheDocument();
  });

  test('renders pilot image', () => {
    render(<PilotController />);

    const pilotImage = screen.getByAltText('pilot');
    expect(pilotImage).toBeInTheDocument();
    expect(pilotImage).toHaveAttribute('src', '/img/pilot.png');
  });

  test('renders pagination dots', () => {
    render(<PilotController />);

    // Should have 4 pagination dots
    const paginationDots = screen.getAllByRole('button');
    const paginationButtons = paginationDots.filter(button =>
      button.className.includes('paginationDot')
    );

    expect(paginationButtons).toHaveLength(4);
  });

  test('highlights selected pilot zone by default (zone D)', () => {
    render(<PilotController />);

    // Zone D pilot should be selected by default
    const selectedPilot = screen
      .getByText('Szlaban Pomorska 32')
      .closest('button');
    expect(selectedPilot).toHaveClass(
      'bg-blue-900',
      'text-white',
      'border-blue-900'
    );
  });

  test('changes selected pilot when clicking different pilot button', async () => {
    const user = userEvent.setup();
    render(<PilotController />);

    // Initially zone D is selected
    const zoneDPilot = screen
      .getByText('Szlaban Pomorska 32')
      .closest('button');
    expect(zoneDPilot).toHaveClass('bg-blue-900');

    // Click on zone A pilot
    const zoneAPilot = screen
      .getByText('Szlaban Grzybowska 1')
      .closest('button');
    await user.click(zoneAPilot!);

    // Zone A should now be selected
    expect(zoneAPilot).toHaveClass(
      'bg-blue-900',
      'text-white',
      'border-blue-900'
    );

    // Zone D should no longer be selected
    expect(zoneDPilot).toHaveClass(
      'bg-white',
      'text-gray-800',
      'border-gray-200'
    );
  });

  test('all pilot buttons are clickable', async () => {
    const user = userEvent.setup();
    render(<PilotController />);

    const pilots = [
      'Szlaban Grzybowska 1',
      'Brama Garażowa 1',
      'Brama Wyjazdowa Śląska',
      'Szlaban Pomorska 32',
    ];

    for (const pilotName of pilots) {
      const pilotButton = screen.getByText(pilotName).closest('button');
      expect(pilotButton).toBeEnabled();

      await user.click(pilotButton!);

      // Should be selected after click
      expect(pilotButton).toHaveClass('bg-blue-900', 'text-white');
    }
  });
});
