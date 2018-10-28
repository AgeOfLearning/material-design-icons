import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBusinessCenterElement
 * @class IconTwotoneBusinessCenterElement
 * @extends {AoflElement}
 */
class IconTwotoneBusinessCenterElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBusinessCenterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-business-center';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBusinessCenterElement.is, IconTwotoneBusinessCenterElement);

export default IconTwotoneBusinessCenterElement;
