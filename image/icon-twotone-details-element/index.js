import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDetailsElement
 * @class IconTwotoneDetailsElement
 * @extends {AoflElement}
 */
class IconTwotoneDetailsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDetailsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-details';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDetailsElement.is, IconTwotoneDetailsElement);

export default IconTwotoneDetailsElement;
