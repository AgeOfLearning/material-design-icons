import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBlockElement
 * @class IconTwotoneBlockElement
 * @extends {AoflElement}
 */
class IconTwotoneBlockElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBlockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-block';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBlockElement.is, IconTwotoneBlockElement);

export default IconTwotoneBlockElement;
