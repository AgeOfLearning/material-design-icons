import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSaveAltElement
 * @class IconTwotoneSaveAltElement
 * @extends {AoflElement}
 */
class IconTwotoneSaveAltElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSaveAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-save-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSaveAltElement.is, IconTwotoneSaveAltElement);

export default IconTwotoneSaveAltElement;
