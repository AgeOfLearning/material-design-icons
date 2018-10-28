import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePublicElement
 * @class IconTwotonePublicElement
 * @extends {AoflElement}
 */
class IconTwotonePublicElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePublicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-public';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePublicElement.is, IconTwotonePublicElement);

export default IconTwotonePublicElement;
