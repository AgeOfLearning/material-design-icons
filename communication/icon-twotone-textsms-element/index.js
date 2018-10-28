import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTextsmsElement
 * @class IconTwotoneTextsmsElement
 * @extends {AoflElement}
 */
class IconTwotoneTextsmsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTextsmsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-textsms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTextsmsElement.is, IconTwotoneTextsmsElement);

export default IconTwotoneTextsmsElement;
