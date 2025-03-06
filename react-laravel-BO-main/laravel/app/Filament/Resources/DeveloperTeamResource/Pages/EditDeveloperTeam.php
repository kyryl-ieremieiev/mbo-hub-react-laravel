<?php

namespace App\Filament\Resources\DeveloperTeamResource\Pages;

use App\Filament\Resources\DeveloperTeamResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditDeveloperTeam extends EditRecord
{
    protected static string $resource = DeveloperTeamResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
