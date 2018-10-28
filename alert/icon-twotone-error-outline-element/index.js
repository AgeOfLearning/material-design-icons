import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneErrorOutlineElement
 * @class IconTwotoneErrorOutlineElement
 * @extends {AoflElement}
 */
class IconTwotoneErrorOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneErrorOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-error-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneErrorOutlineElement.is, IconTwotoneErrorOutlineElement);

export default IconTwotoneErrorOutlineElement;
