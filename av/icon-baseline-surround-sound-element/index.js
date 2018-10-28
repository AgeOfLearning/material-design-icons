import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSurroundSoundElement
 * @class IconBaselineSurroundSoundElement
 * @extends {AoflElement}
 */
class IconBaselineSurroundSoundElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSurroundSoundElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-surround-sound';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSurroundSoundElement.is, IconBaselineSurroundSoundElement);

export default IconBaselineSurroundSoundElement;
