import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWbIncandescentElement
 * @class IconRoundWbIncandescentElement
 * @extends {AoflElement}
 */
class IconRoundWbIncandescentElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWbIncandescentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-wb-incandescent';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWbIncandescentElement.is, IconRoundWbIncandescentElement);

export default IconRoundWbIncandescentElement;
