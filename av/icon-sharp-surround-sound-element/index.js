import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSurroundSoundElement
 * @class IconSharpSurroundSoundElement
 * @extends {AoflElement}
 */
class IconSharpSurroundSoundElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSurroundSoundElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-surround-sound';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSurroundSoundElement.is, IconSharpSurroundSoundElement);

export default IconSharpSurroundSoundElement;
