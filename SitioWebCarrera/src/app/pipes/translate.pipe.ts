import { Pipe , PipeTransform , inject } from '@angular/core';
import { TranslationService } from '../services/translation.service';

  @Pipe ({
  name : 'translate',
  standalone : true ,
  pure : false // CRUCIAL : Permite detectar cambios en el signal del servicio
  })
  export class TranslatePipe implements PipeTransform {

    public translationService = inject ( TranslationService );

    transform (key: string ): string {
  // Cada vez que Angular verifique la vista , pedir á la traducci ón actualizada
    return this . translationService . translate ( key);
  }
}
