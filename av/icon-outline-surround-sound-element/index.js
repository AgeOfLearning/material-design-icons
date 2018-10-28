import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSurroundSoundElement
 * @class IconOutlineSurroundSoundElement
 * @extends {AoflElement}
 */
class IconOutlineSurroundSoundElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSurroundSoundElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-surround-sound';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSurroundSoundElement.is, IconOutlineSurroundSoundElement);

export default IconOutlineSurroundSoundElement;
