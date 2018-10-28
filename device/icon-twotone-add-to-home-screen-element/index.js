import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAddToHomeScreenElement
 * @class IconTwotoneAddToHomeScreenElement
 * @extends {AoflElement}
 */
class IconTwotoneAddToHomeScreenElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAddToHomeScreenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-add-to-home-screen';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAddToHomeScreenElement.is, IconTwotoneAddToHomeScreenElement);

export default IconTwotoneAddToHomeScreenElement;
