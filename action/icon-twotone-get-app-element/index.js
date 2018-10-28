import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneGetAppElement
 * @class IconTwotoneGetAppElement
 * @extends {AoflElement}
 */
class IconTwotoneGetAppElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneGetAppElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-get-app';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneGetAppElement.is, IconTwotoneGetAppElement);

export default IconTwotoneGetAppElement;
