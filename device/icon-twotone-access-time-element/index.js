import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAccessTimeElement
 * @class IconTwotoneAccessTimeElement
 * @extends {AoflElement}
 */
class IconTwotoneAccessTimeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAccessTimeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-access-time';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAccessTimeElement.is, IconTwotoneAccessTimeElement);

export default IconTwotoneAccessTimeElement;
