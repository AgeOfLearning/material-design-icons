import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAddCircleElement
 * @class IconTwotoneAddCircleElement
 * @extends {AoflElement}
 */
class IconTwotoneAddCircleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAddCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-add-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAddCircleElement.is, IconTwotoneAddCircleElement);

export default IconTwotoneAddCircleElement;
