import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneEditAttributesElement
 * @class IconTwotoneEditAttributesElement
 * @extends {AoflElement}
 */
class IconTwotoneEditAttributesElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneEditAttributesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-edit-attributes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneEditAttributesElement.is, IconTwotoneEditAttributesElement);

export default IconTwotoneEditAttributesElement;
