# VowSuite Client

### The VowSuite subscriber's user experience.

## Routes

Routing is handled using react-router and useHistory.

### Dashboard

//TODO

### Signup

The signup form is powered by Firebase, utilizing a custom useAuth hook with createContext. Input is handled using the useRef and useState hooks. The new user is asked for their Email, Password, and their password again--Password Confirmation.

### Login

Login is nearly identical to signup, without the need for Password Confirmation, and they link to one another.
