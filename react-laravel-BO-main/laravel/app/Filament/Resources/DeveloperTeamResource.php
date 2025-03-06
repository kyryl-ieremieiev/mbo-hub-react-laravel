<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DeveloperTeamResource\Pages;
use App\Models\DeveloperTeam;
use Filament\Forms;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;

class DeveloperTeamResource extends Resource
{
    protected static ?string $model = DeveloperTeam::class;

    protected static ?string $navigationIcon = 'heroicon-o-code-bracket-square';

    protected static ?string $navigationGroup = 'Teams';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                Section::make('')
                    ->schema([
                        FileUpload::make('image')
                            ->image()
                            ->label('Foto')
                            ->directory('developer_teams'),
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
                ImageColumn::make('image')
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
            'index'  => Pages\ListDeveloperTeams::route('/'),
            'create' => Pages\CreateDeveloperTeam::route('/create'),
            'edit'   => Pages\EditDeveloperTeam::route('/{record}/edit'),
        ];
    }
}
