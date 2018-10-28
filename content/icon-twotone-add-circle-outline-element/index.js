import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAddCircleOutlineElement
 * @class IconTwotoneAddCircleOutlineElement
 * @extends {AoflElement}
 */
class IconTwotoneAddCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAddCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-add-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAddCircleOutlineElement.is, IconTwotoneAddCircleOutlineElement);

export default IconTwotoneAddCircleOutlineElement;
