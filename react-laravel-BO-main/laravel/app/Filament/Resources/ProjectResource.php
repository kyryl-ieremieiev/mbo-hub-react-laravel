<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectResource\Pages;
use App\Models\Project;
use Filament\Forms;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\FileUpload;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\DatePicker;

class ProjectResource extends Resource
{
    protected static ?string $model = Project::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                Section::make('')
                    ->schema([
                        FileUpload::make('image')
                        ->image()
                        ->label('Header'),
                        TextInput::make('title')->required(),
                        RichEditor::make('content')->required(),
                        DatePicker::make('published_at')
                            ->label('Publicatiedatum')
                            ->nullable(),
                    ]),
            ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->sortable()->searchable(),
                TextColumn::make('content')
                    ->label('Content')
                    ->limit(50)
                    ->formatStateUsing(fn ($state) => strip_tags($state)),
                ImageColumn::make('image')->circular(),
                TextColumn::make('published_at')
                    ->label('Publicatiedatum')
                    ->date('d-m-Y')
                    ->sortable(),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index'  => Pages\ListProjects::route('/'),
            'create' => Pages\CreateProject::route('/create'),
            'edit'   => Pages\EditProject::route('/{record}/edit'),
        ];
    }
}
