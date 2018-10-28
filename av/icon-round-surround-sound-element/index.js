import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSurroundSoundElement
 * @class IconRoundSurroundSoundElement
 * @extends {AoflElement}
 */
class IconRoundSurroundSoundElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSurroundSoundElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-surround-sound';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSurroundSoundElement.is, IconRoundSurroundSoundElement);

export default IconRoundSurroundSoundElement;
