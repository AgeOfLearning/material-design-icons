import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneUpdateElement
 * @class IconTwotoneUpdateElement
 * @extends {AoflElement}
 */
class IconTwotoneUpdateElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneUpdateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-update';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneUpdateElement.is, IconTwotoneUpdateElement);

export default IconTwotoneUpdateElement;
