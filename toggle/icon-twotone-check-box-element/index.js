import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCheckBoxElement
 * @class IconTwotoneCheckBoxElement
 * @extends {AoflElement}
 */
class IconTwotoneCheckBoxElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCheckBoxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-check-box';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCheckBoxElement.is, IconTwotoneCheckBoxElement);

export default IconTwotoneCheckBoxElement;
