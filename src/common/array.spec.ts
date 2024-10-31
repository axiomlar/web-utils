import { describe, it, expect } from 'vitest';
import ArrayUtils from './array';

describe('ArrayUtils', () => {
    it('should return true for isEmpty when array is null or undefined', () => {
        expect(ArrayUtils.isEmpty(null)).toBe(true);
        expect(ArrayUtils.isEmpty(undefined)).toBe(true);
    });

    it('should return false for isEmpty when array is not null', () => {
        expect(ArrayUtils.isEmpty([])).toBe(false);
        expect(ArrayUtils.isEmpty([1, 2, 3])).toBe(false);
    });

    it('should return true for isBlank when array is empty', () => {
        expect(ArrayUtils.isBlank([])).toBe(true);
    });

    it('should return false for isBlank when array is not empty', () => {
        expect(ArrayUtils.isBlank([1, 2, 3])).toBe(false);
    });

    it('should return true for isNotEmpty when array is not null', () => {
        expect(ArrayUtils.isNotEmpty([])).toBe(true);
        expect(ArrayUtils.isNotEmpty([1, 2, 3])).toBe(true);
    });

    it('should return false for isNotEmpty when array is null or undefined', () => {
        expect(ArrayUtils.isNotEmpty(null)).toBe(false);
        expect(ArrayUtils.isNotEmpty(undefined)).toBe(false);
    });

    it('should return true for isNotBlank when array is not empty', () => {
        expect(ArrayUtils.isNotBlank([1, 2, 3])).toBe(true);
    });

    it('should return false for isNotBlank when array is empty', () => {
        expect(ArrayUtils.isNotBlank([])).toBe(false);
    });

    it('should return true for isNotEmptyAndNotBlank when array is not null and not empty', () => {
        expect(ArrayUtils.isNotEmptyAndNotBlank([1, 2, 3])).toBe(true);
    });

    it('should return false for isNotEmptyAndNotBlank when array is null or empty', () => {
        expect(ArrayUtils.isNotEmptyAndNotBlank(null)).toBe(false);
        expect(ArrayUtils.isNotEmptyAndNotBlank([])).toBe(false);
    });

    it('should return true for isEmptyOrBlank when array is null or empty', () => {
        expect(ArrayUtils.isEmptyOrBlank(null)).toBe(true);
        expect(ArrayUtils.isEmptyOrBlank([])).toBe(true);
    });

    it('should return false for isEmptyOrBlank when array is not null and not empty', () => {
        expect(ArrayUtils.isEmptyOrBlank([1, 2, 3])).toBe(false);
    });

    it('should return true for isNotEmptyOrBlank when array is not null or not empty', () => {
        expect(ArrayUtils.isNotEmptyOrBlank([1, 2, 3])).toBe(true);
    });

    it('should return false for isNotEmptyOrBlank when array is null and empty', () => {
        expect(ArrayUtils.isNotEmptyOrBlank(null)).toBe(false);
        expect(ArrayUtils.isNotEmptyOrBlank([])).toBe(false);
    });

    it('should return true for isNotEmptyAndBlank when array is not null and empty', () => {
        expect(ArrayUtils.isNotEmptyAndBlank([])).toBe(true);
    });

    it('should return false for isNotEmptyAndBlank when array is null or not empty', () => {
        expect(ArrayUtils.isNotEmptyAndBlank(null)).toBe(false);
        expect(ArrayUtils.isNotEmptyAndBlank([1, 2, 3])).toBe(false);
    });

    it('should return true for isEmptyOrNotBlank when array is null or not empty', () => {
        expect(ArrayUtils.isEmptyOrNotBlank(null)).toBe(true);
        expect(ArrayUtils.isEmptyOrNotBlank([1, 2, 3])).toBe(true);
    });

    it('should return false for isEmptyOrNotBlank when array is not null and empty', () => {
        expect(ArrayUtils.isEmptyOrNotBlank([])).toBe(false);
    });

    it('should return true for arrayContainsObject when array contains object with specified key and value', () => {
        const arr = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
        expect(ArrayUtils.arrayContainsObject(arr, 'id', 1)).toBe(true);
        expect(ArrayUtils.arrayContainsObject(arr, 'name', 'Jane')).toBe(true);
    });

    it('should return false for arrayContainsObject when array does not contain object with specified key and value', () => {
        const arr = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
        expect(ArrayUtils.arrayContainsObject(arr, 'id', 3)).toBe(false);
        expect(ArrayUtils.arrayContainsObject(arr, 'name', 'Doe')).toBe(false);
    });
});