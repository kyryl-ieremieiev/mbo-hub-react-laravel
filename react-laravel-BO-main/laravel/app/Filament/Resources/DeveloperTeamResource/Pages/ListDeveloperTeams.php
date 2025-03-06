<?php

namespace App\Filament\Resources\DeveloperTeamResource\Pages;

use App\Filament\Resources\DeveloperTeamResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListDeveloperTeams extends ListRecords
{
    protected static string $resource = DeveloperTeamResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
