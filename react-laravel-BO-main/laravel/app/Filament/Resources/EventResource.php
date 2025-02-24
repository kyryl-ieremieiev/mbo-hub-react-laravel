<?php

namespace App\Filament\Resources;

use App\Filament\Resources\EventResource\Pages;
use App\Models\Event;
use Filament\Forms;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\TextArea;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;

class EventResource extends Resource
{
    protected static ?string $model = Event::class;

    protected static ?string $navigationIcon = 'heroicon-o-calendar';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                Section::make('')
                    ->schema([
                        FileUpload::make('image')
                            ->image()
                            ->label('Afbeelding'),
                        TextInput::make('title')
                            ->label('Titel')
                            ->required(),
                        RichEditor::make('description')
                            ->label('Beschrijving')
                            ->required(),
                        DatePicker::make('date')
                            ->label('Datum'),
                        TextInput::make('location')
                            ->label('Locatie'),
                    ]),
            ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->sortable()->searchable()->label('Titel'),
                TextColumn::make('description')->limit(50)->formatStateUsing(fn ($state) => strip_tags($state))->label('Beschrijving'),
                TextColumn::make('location')->sortable()->label('Locatie'),
                ImageColumn::make('image')->circular()->label('Afbeelding'),
                TextColumn::make('date')->date('d-m-Y')->sortable()->label('Datum')
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index'  => Pages\ListEvents::route('/'),
            'create' => Pages\CreateEvent::route('/create'),
            'edit'   => Pages\EditEvent::route('/{record}/edit'),
        ];
    }
}
