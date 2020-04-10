import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './pages/notfound/index'
import SignIn from './pages/admin/signin/index'
import ForgotPassword from './pages/admin/forgotpassword'
import AdminDashboardIndex from './pages/dashboard/AdminDashboardIndex'

const UploadFilesPage = () => <h1>This is a file upload page.</h1>

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signin" component={SignIn} />
      <Route path="/password/forgot" component={ForgotPassword} />
      <ProtectedRoute path="/dashboard" component={AdminDashboardIndex} />
      <Route path="/upload" component={UploadFilesPage} />
      <Route
        path="/user-portal"
        component={() => {
          window.location.href =
            'https://dt5ht7ijj6y6.cloudfront.net/user/signin'
          return null
        }}
      />
      <Route component={NotFound} />
    </Switch>
  )
}
