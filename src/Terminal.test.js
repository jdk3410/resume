import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Terminal from './Terminal';

describe('Terminal', () => {
  it('handles "resume" command', () => {
    const { getByRole } = render(<Terminal />);
    const textarea = getByRole('textbox');

    fireEvent.change(textarea, { target: { value: 'root@jdk3410.com ~:# resume' } });
    fireEvent.keyPress(textarea, { key: 'Enter', code: 'Enter' });

    expect(textarea.value).toEqual(expect.stringContaining('jdk3410.com'));
  });

  it('handles "contact" command', () => {
    const { getByRole } = render(<Terminal />);
    const textarea = getByRole('textbox');

    fireEvent.change(textarea, { target: { value: 'root@jdk3410.com ~:# contact' } });
    fireEvent.keyPress(textarea, { key: 'Enter', code: 'Enter' });

    expect(textarea.value).toEqual(expect.stringContaining('jdk3410.com'));
  });

  
});