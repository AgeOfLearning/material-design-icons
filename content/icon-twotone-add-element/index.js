import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAddElement
 * @class IconTwotoneAddElement
 * @extends {AoflElement}
 */
class IconTwotoneAddElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAddElement.is, IconTwotoneAddElement);

export default IconTwotoneAddElement;
