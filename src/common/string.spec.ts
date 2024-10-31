import { describe, it, expect } from 'vitest';
import StringUtils from './string';

describe('StringUtils', () => {
    describe('isEmpty', () => {
        it('should return true for null', () => {
            expect(StringUtils.isEmpty(null)).toBe(true);
        });

        it('should return true for undefined', () => {
            expect(StringUtils.isEmpty(undefined)).toBe(true);
        });

        it('should return false for non-empty string', () => {
            expect(StringUtils.isEmpty('hello')).toBe(false);
        });

        it('should return false for empty string', () => {
            expect(StringUtils.isEmpty('')).toBe(false);
        });
    });

    describe('isBlank', () => {
        it('should return true for empty string', () => {
            expect(StringUtils.isBlank('')).toBe(true);
        });

        it('should return true for string with only spaces', () => {
            expect(StringUtils.isBlank('   ')).toBe(true);
        });

        it('should return false for non-empty string', () => {
            expect(StringUtils.isBlank('hello')).toBe(false);
        });
    });

    describe('isNotEmpty', () => {
        it('should return false for null', () => {
            expect(StringUtils.isNotEmpty(null)).toBe(false);
        });

        it('should return false for undefined', () => {
            expect(StringUtils.isNotEmpty(undefined)).toBe(false);
        });

        it('should return true for non-empty string', () => {
            expect(StringUtils.isNotEmpty('hello')).toBe(true);
        });

        it('should return true for empty string', () => {
            expect(StringUtils.isNotEmpty('')).toBe(true);
        });
    });

    describe('isNotBlank', () => {
        it('should return false for empty string', () => {
            expect(StringUtils.isNotBlank('')).toBe(false);
        });

        it('should return false for string with only spaces', () => {
            expect(StringUtils.isNotBlank('   ')).toBe(false);
        });

        it('should return true for non-empty string', () => {
            expect(StringUtils.isNotBlank('hello')).toBe(true);
        });
    });

    describe('isNotEmptyAndNotBlank', () => {
        it('should return false for null', () => {
            expect(StringUtils.isNotEmptyAndNotBlank(null)).toBe(false);
        });

        it('should return false for undefined', () => {
            expect(StringUtils.isNotEmptyAndNotBlank(undefined)).toBe(false);
        });

        it('should return false for empty string', () => {
            expect(StringUtils.isNotEmptyAndNotBlank('')).toBe(false);
        });
    })
});