import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRemoveElement
 * @class IconTwotoneRemoveElement
 * @extends {AoflElement}
 */
class IconTwotoneRemoveElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRemoveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-remove';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRemoveElement.is, IconTwotoneRemoveElement);

export default IconTwotoneRemoveElement;
