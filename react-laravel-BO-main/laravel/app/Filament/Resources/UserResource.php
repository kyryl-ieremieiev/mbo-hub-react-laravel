<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Illuminate\Support\Facades\Hash;
use Filament\Facades\Filament;

class UserResource extends Resource
{
    protected static ?string $model = User::class;
    protected static ?string $navigationIcon = 'heroicon-o-user';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                // Maak een section voor een kaartachtige layout
                Section::make('')
                    ->schema([
                        TextInput::make('name')
                            ->required()
                            ->maxLength(255),

                        TextInput::make('email')
                            ->email()
                            ->required()
                            ->unique(User::class, 'email'),

                        TextInput::make('password')
                            ->password()
                            ->required(fn($record) => $record === null) // Alleen verplicht bij aanmaken
                            ->minLength(8)
                            ->maxLength(255)
                            ->dehydrateStateUsing(fn($state) => !empty($state) ? Hash::make($state) : null) // Hash het wachtwoord
                            ->dehydrated(fn($state) => !empty($state)), // Alleen opslaan als er een nieuw wachtwoord is ingevuld

                        Select::make('role')
                            ->options([
                                'admin' => 'Admin',
                                'user' => 'User',
                            ])
                            ->default('user')
                            ->required()
                            ->visible(fn() => Filament::auth()->user()?->isAdmin()),
                    ]),
            ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->sortable()->searchable(),
                TextColumn::make('email')->sortable()->searchable(),
                TextColumn::make('role')->sortable(),
            ]);
    }

    public static function canCreate(): bool
    {
        return Filament::auth()->user()?->isAdmin(); // Alleen admins mogen users toevoegen
    }

    public static function canEdit($record): bool
    {
        return Filament::auth()->user()?->isAdmin(); // Alleen admins mogen users bewerken
    }

    public static function canViewAny(): bool
    {
        return Filament::auth()->user()?->isAdmin();
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index'  => Pages\ListUsers::route('/'),
            'create' => Pages\CreateUser::route('/create'),
            'edit'   => Pages\EditUser::route('/{record}/edit'),
        ];
    }
}
