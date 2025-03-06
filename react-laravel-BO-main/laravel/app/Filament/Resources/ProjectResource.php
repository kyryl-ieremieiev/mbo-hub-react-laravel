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
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Toggle;
use Filament\Tables\Columns\IconColumn;
use Filament\Forms\Components\TagsInput;

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
                        FileUpload::make('image')->image()->label('Afbeelding'),
                        TextInput::make('title')->required()->label('Titel'),
                        RichEditor::make('content')->label('Beschrijving')->required(),
                        DatePicker::make('published_at')->label('Publicatiedatum')->nullable(),
                        Toggle::make('show_on_homepage')->label('Toon op homepagina'),
                        Toggle::make('amsterdam_750_slider')->label('Amsterdam 750 Slinger')->default(false),
                        TagsInput::make('tags')
                            ->label('Tags')
                            ->placeholder('Voeg tags toe en druk op Enter')
                            ->splitKeys(['Enter', ','])
                            ->nullable(),
                        Repeater::make('links')
                            ->label('Links')
                            ->schema([
                                TextInput::make('name')->label('Naam')->required(),
                                TextInput::make('url')->label('URL')->url()->required(),
                            ])
                            ->addable()
                            ->deletable()
                            ->collapsible()
                            ->nullable(),
                    ]),
            ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->sortable()->searchable()->label('Titel'),
                TextColumn::make('content')->label('Beschrijving')->limit(50)
                    ->formatStateUsing(fn($state) => strip_tags($state)),
                ImageColumn::make('image')->label('Afbeelding')->circular(),
                TextColumn::make('published_at')->label('Publicatiedatum')->date('d-m-Y')->sortable(),
                IconColumn::make('show_on_homepage')
                    ->label('Homepagina')
                    ->boolean(),
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
