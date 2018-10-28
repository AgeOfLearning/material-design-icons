import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCheckElement
 * @class IconTwotoneCheckElement
 * @extends {AoflElement}
 */
class IconTwotoneCheckElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCheckElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-check';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCheckElement.is, IconTwotoneCheckElement);

export default IconTwotoneCheckElement;
