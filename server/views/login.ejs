<!DOCTYPE html>
<html>
<head>
  <title>Login In</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
</head>
<body>
  <h2>Log In</h2>
  <form id="loginForm">
    <div class="form-group">
      <label>Email</label>
      <input type="text" class="form-control" name="email" id="email">
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" name="password" id="password">
    </div>
    <button type="submit" class="btn btn-primary btn-lg">Login</button>
  </form>
  <p>Need an account? <a href="/signup">SignUp</a></p>
  <p id="errorMessage"></p>

  <script>
    document.getElementById('loginForm').addEventListener('submit', async (event) => {
      event.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (result.success) {
        window.location.href = '/dashboard'; // Redirect to the new page
      } else {
        document.getElementById('errorMessage').textContent = 'Invalid email or password. Please try again.';
      }
    });
  </script>
</body>
</html>