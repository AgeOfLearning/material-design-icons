import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBeachAccessElement
 * @class IconTwotoneBeachAccessElement
 * @extends {AoflElement}
 */
class IconTwotoneBeachAccessElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBeachAccessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-beach-access';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBeachAccessElement.is, IconTwotoneBeachAccessElement);

export default IconTwotoneBeachAccessElement;
