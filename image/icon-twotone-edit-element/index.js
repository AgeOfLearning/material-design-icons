import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneEditElement
 * @class IconTwotoneEditElement
 * @extends {AoflElement}
 */
class IconTwotoneEditElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneEditElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-edit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneEditElement.is, IconTwotoneEditElement);

export default IconTwotoneEditElement;
