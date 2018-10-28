import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSurroundSoundElement
 * @class IconTwotoneSurroundSoundElement
 * @extends {AoflElement}
 */
class IconTwotoneSurroundSoundElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSurroundSoundElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-surround-sound';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSurroundSoundElement.is, IconTwotoneSurroundSoundElement);

export default IconTwotoneSurroundSoundElement;
