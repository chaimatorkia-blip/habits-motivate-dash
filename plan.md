# Implementation Plan: My Habits Farm Navigation & Multi-Section Update

This plan outlines the steps to add a navigation drawer and new functional sections (Habits Management, Farm/Shop, Focus Timer, Settings) to the "My Habits Farm" application.

## Scope Summary
- Implement a side navigation drawer (Navigation Drawer) accessible via a hamburger menu.
- Create placeholder/basic functional components for:
    - **Habits Management**: View, edit, archive, and manage habits.
    - **The Farm / Shop**: Interactive virtual farm and rewards shop.
    - **Focus Timer**: Circular Pomodoro-style timer with start/pause functionality.
    - **Settings**: User profile details and app preferences (Theme, Notifications).
- Integrate navigation into the main `App.tsx` shell.
- Maintain existing dashboard features.

## Affected Areas
- `src/App.tsx`: Orchestrate navigation and header triggers.
- `src/components/NavigationDrawer.tsx`: Sidebar menu UI and logic.
- `src/components/HabitsManagement.tsx`: New screen for habit management.
- `src/components/FarmShop.tsx`: New screen for the farm/shop.
- `src/components/FocusTimer.tsx`: New screen for the concentration timer.
- `src/components/Settings.tsx`: New screen for user/app settings.

## Phases

### Phase 1: Navigation Drawer Component
- **Deliverables**: A slide-in drawer with menu items.
- **Tasks**:
    - Create `NavigationDrawer.tsx` using `framer-motion` for smooth RTL animation.
    - Include icons and labels for: الرئيسية (Home), إدارة العادات (Habits), المزرعة والمتجر (Farm), مؤقت التركيز (Timer), الإعدادات (Settings).

### Phase 2: Shell Integration
- **Deliverables**: Updated `App.tsx` with screen routing.
- **Tasks**:
    - Implement a `currentScreen` state in `App.tsx`.
    - Update the header to include a `Menu` icon (hamburger) on the left (RTL right) that opens the drawer.
    - Conditionally render the appropriate screen based on `currentScreen`.

### Phase 3: Placeholder Screens (Basic Logic)
- **Deliverables**: UI shells for new sections.
- **Tasks**:
    - **Habits Management**: List view with mock habits and "Add" button.
    - **Farm Shop**: Visual placeholder for farm and item cards for the shop.
    - **Focus Timer**: Implementation of a circular progress bar and a simple countdown timer.
    - **Settings**: Profile form (Name, Email, etc.) and toggles for Dark Mode/Notifications.

### Phase 4: Final Polish & State Persistence
- **Deliverables**: Fully functional navigation flow.
- **Tasks**:
    - Ensure theme toggling works (persisting to localStorage).
    - Refine RTL layouts for all new screens.
    - Add breadcrumbs or titles to the header when on sub-pages.
