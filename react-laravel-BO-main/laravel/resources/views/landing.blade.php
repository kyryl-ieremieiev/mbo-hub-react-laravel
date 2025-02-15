<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auth Page</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 h-screen flex items-center justify-center">
    <header class="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
        <div class="flex justify-center mb-6">
            <img src="{{ asset('images/mbo-hub-home.png') }}" alt="Logo MBO Hub Amsterdam" class="w-80 h-40 mb-8"> 
        </div>
        <div class="flex justify-center mb-6">
            <h1 class="text-2xl font-bold text-gray-800">Welcome</h1>
        </div>
        @if (Route::has('login'))
            <nav class="flex flex-col items-center space-y-4">
                @auth
                    <a 
                        href="{{ url('/dashboard') }}" 
                        class="w-full bg-yellow-500 text-white text-center py-2 rounded-md transition hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        Pagina
                    </a>
                @else
                    <a 
                        href="{{ route('login') }}" 
                        class="w-full bg-yellow-500 text-white text-center py-2 rounded-md transition hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        Log in
                    </a>

                    @if (Route::has('register'))
                        <a 
                            href="{{ route('register') }}" 
                            class="w-full bg-purple-800 text-white text-center py-2 rounded-md transition hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            Register
                        </a>
                    @endif
                @endauth
            </nav>
        @endif
    </header>
</body>
</html>
