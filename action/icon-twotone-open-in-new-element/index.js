import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneOpenInNewElement
 * @class IconTwotoneOpenInNewElement
 * @extends {AoflElement}
 */
class IconTwotoneOpenInNewElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneOpenInNewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-open-in-new';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneOpenInNewElement.is, IconTwotoneOpenInNewElement);

export default IconTwotoneOpenInNewElement;
