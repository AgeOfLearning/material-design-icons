import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCreateElement
 * @class IconTwotoneCreateElement
 * @extends {AoflElement}
 */
class IconTwotoneCreateElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCreateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-create';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCreateElement.is, IconTwotoneCreateElement);

export default IconTwotoneCreateElement;
