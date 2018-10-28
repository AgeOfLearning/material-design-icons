import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHomeElement
 * @class IconTwotoneHomeElement
 * @extends {AoflElement}
 */
class IconTwotoneHomeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHomeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-home';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHomeElement.is, IconTwotoneHomeElement);

export default IconTwotoneHomeElement;
