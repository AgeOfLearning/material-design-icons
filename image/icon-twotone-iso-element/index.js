import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneIsoElement
 * @class IconTwotoneIsoElement
 * @extends {AoflElement}
 */
class IconTwotoneIsoElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneIsoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-iso';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneIsoElement.is, IconTwotoneIsoElement);

export default IconTwotoneIsoElement;
