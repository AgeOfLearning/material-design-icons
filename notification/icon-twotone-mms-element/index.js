import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMmsElement
 * @class IconTwotoneMmsElement
 * @extends {AoflElement}
 */
class IconTwotoneMmsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMmsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-mms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMmsElement.is, IconTwotoneMmsElement);

export default IconTwotoneMmsElement;
