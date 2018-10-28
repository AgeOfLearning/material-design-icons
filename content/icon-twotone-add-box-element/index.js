import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAddBoxElement
 * @class IconTwotoneAddBoxElement
 * @extends {AoflElement}
 */
class IconTwotoneAddBoxElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAddBoxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-add-box';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAddBoxElement.is, IconTwotoneAddBoxElement);

export default IconTwotoneAddBoxElement;
