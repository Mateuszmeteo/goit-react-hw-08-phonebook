import { statusFilters } from "./constans"
import { createSelector } from "@reduxjs/toolkit"

// const selectorXd = createSelector(
//     [ inputSelector1, inputSelector2, inputSelector3],
//     (result1, result2, result3) => {
//         //obliczenia
//         return result
//     }
// )

export const selectContacts = state => state.contacts.items

export const selectIsLoading = state => state.contacts.isLoading

export const selectError = state => state.contacts.error

export const selectStatusFilter = state => state.filters.status

export const selectVisibleContact = createSelector(
    [selectContacts, selectStatusFilter], (contacts, statusFilter) => {

        switch (statusFilter) {
            case statusFilters.active:
                return contacts.filter(contact => !contact.completed)
            case statusFilters.completed:
                return contacts.filter(contact => contact.completed)
            default:
             return contacts;
        }
    }
)

export const selectContactCount = createSelector(
    [selectContacts], contacts => {

    return contacts.reduce(
        (acc, contact) => {
            if (contact.completed) {
                acc.completed += 1;
            } else {
                acc.active += 1;
            }

            return acc;
        },
        { active: 0, completed: 0}
    )
    }
)