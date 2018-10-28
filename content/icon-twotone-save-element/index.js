import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSaveElement
 * @class IconTwotoneSaveElement
 * @extends {AoflElement}
 */
class IconTwotoneSaveElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSaveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-save';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSaveElement.is, IconTwotoneSaveElement);

export default IconTwotoneSaveElement;
