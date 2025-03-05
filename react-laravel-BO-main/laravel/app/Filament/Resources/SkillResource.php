<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SkillResource\Pages;
use App\Models\Skill;
use Filament\Forms;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\RichEditor;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\ColorPicker;
use Filament\Tables\Columns\BadgeColumn;

class SkillResource extends Resource
{
    protected static ?string $model = Skill::class;

    protected static ?string $navigationIcon = 'heroicon-o-academic-cap';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                Section::make('')
                    ->schema([
                        TextInput::make('title')
                            ->label('Titel')
                            ->required()
                            ->maxLength(255),
                        RichEditor::make('description')
                            ->label('Beschrijving')
                            ->required(),
                        TextInput::make('email')
                            ->label('E-mailadres')
                            ->email(),
                        TextInput::make('email_subject')
                            ->label('Mailonderwerp')
                            ->maxLength(255),
                        Repeater::make('tags')
                            ->label('Tags')
                            ->schema([
                                TextInput::make('name')->label('Naam')->required(),
                                ColorPicker::make('color')->label('Kleur')->default('#000000'),
                            ])
                            ->collapsible()
                            ->columns(2),
                    ])
                    ->columns(1)
            ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->label('Titel')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('description')
                    ->label('Beschrijving')
                    ->limit(100)
                    ->formatStateUsing(fn($state) => strip_tags($state)),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index'  => Pages\ListSkills::route('/'),
            'create' => Pages\CreateSkill::route('/create'),
            'edit'   => Pages\EditSkill::route('/{record}/edit'),
        ];
    }
}
