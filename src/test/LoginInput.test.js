/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle username typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import { render } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import LoginInput from '../components/LoginInput';

describe('LoginInput Component', ()=>{
    it('should handle username typing correctly', async()=>{
        // Arrage
        render(<LoginInput/>)
        // Action
        // Assert
    })
})