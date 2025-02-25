<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TeamResource\Pages;
use App\Models\Team;
use Filament\Forms;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;

class TeamResource extends Resource
{
    protected static ?string $model = Team::class;

    protected static ?string $navigationIcon = 'heroicon-o-user-group';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                Section::make('')
                    ->schema([
                        FileUpload::make('image')
                            ->image()
                            ->label('Foto')
                            ->directory('teams'),
                        TextInput::make('name')
                            ->label('Naam')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('role')
                            ->label('Functie')
                            ->required()
                            ->maxLength(255),
                    ])
                    ->columns(1),
            ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Naam')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('role')
                    ->label('Functie')
                    ->sortable()
                    ->searchable(),
                ImageColumn::make('photo')
                    ->label('Foto')
                    ->circular(),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index'  => Pages\ListTeams::route('/'),
            'create' => Pages\CreateTeam::route('/create'),
            'edit'   => Pages\EditTeam::route('/{record}/edit'),
        ];
    }
}
